import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Order "mo:core/Order";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Offer Management
  module Offer {
    public type Data = {
      id : Text;
      title : Text;
      description : Text;
      discountLabel : Text;
      startDate : Time.Time;
      endDate : Time.Time;
      active : Bool;
      createdAt : Time.Time;
      updatedAt : Time.Time;
    };

    public func compareByStartDate(offer1 : Data, offer2 : Data) : Order.Order {
      if (offer1.startDate < offer2.startDate) {
        #less;
      } else if (offer1.startDate > offer2.startDate) {
        #greater;
      } else {
        #equal;
      };
    };

    public func compareByEndDate(offer1 : Data, offer2 : Data) : Order.Order {
      if (offer1.endDate < offer2.endDate) {
        #less;
      } else if (offer1.endDate > offer2.endDate) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  let offers = Map.empty<Text, Offer.Data>();

  public shared ({ caller }) func createOffer(
    title : Text,
    description : Text,
    discountLabel : Text,
    startDate : Time.Time,
    endDate : Time.Time,
    active : Bool,
  ) : async Text {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can create offers");
    };

    let id = title.concat(Time.now().toText());
    let now = Time.now();

    let offer : Offer.Data = {
      id;
      title;
      description;
      discountLabel;
      startDate;
      endDate;
      active;
      createdAt = now;
      updatedAt = now;
    };

    offers.add(id, offer);
    id;
  };

  public shared ({ caller }) func updateOffer(
    id : Text,
    title : Text,
    description : Text,
    discountLabel : Text,
    startDate : Time.Time,
    endDate : Time.Time,
    active : Bool,
  ) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update offers");
    };

    switch (offers.get(id)) {
      case (null) { Runtime.trap("Offer not found") };
      case (?existingOffer) {
        let updatedOffer : Offer.Data = {
          id;
          title;
          description;
          discountLabel;
          startDate;
          endDate;
          active;
          createdAt = existingOffer.createdAt;
          updatedAt = Time.now();
        };
        offers.add(id, updatedOffer);
      };
    };
  };

  public shared ({ caller }) func deleteOffer(id : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete offers");
    };

    if (not (offers.containsKey(id))) {
      Runtime.trap("Offer not found");
    };

    offers.remove(id);
  };

  public query ({ caller }) func getOffer(id : Text) : async ?Offer.Data {
    offers.get(id);
  };

  public query ({ caller }) func getAllOffers() : async [Offer.Data] {
    offers.values().toArray();
  };

  public query ({ caller }) func getActiveOffers() : async [Offer.Data] {
    let now = Time.now();
    offers.values().toArray().filter(
      func(offer) {
        offer.active and offer.startDate <= now and offer.endDate >= now
      }
    );
  };

  public query ({ caller }) func searchOffersByTitle(searchTerm : Text) : async [Offer.Data] {
    offers.values().toArray().filter(
      func(offer) {
        offer.title.contains(#text searchTerm);
      }
    );
  };

  public query ({ caller }) func getOffersFilteredByDateRange(startDate : Time.Time, endDate : Time.Time) : async [Offer.Data] {
    offers.values().toArray().filter(
      func(offer) {
        offer.startDate >= startDate and offer.endDate <= endDate
      }
    );
  };

  public shared ({ caller }) func toggleOfferActiveState(id : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can toggle offer state");
    };

    switch (offers.get(id)) {
      case (null) { Runtime.trap("Offer not found") };
      case (?existingOffer) {
        let updatedOffer : Offer.Data = {
          existingOffer with
          active = not (existingOffer.active);
          updatedAt = Time.now();
        };
        offers.add(id, updatedOffer);
      };
    };
  };
};
