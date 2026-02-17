import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Data {
    id: string;
    title: string;
    active: boolean;
    endDate: Time;
    createdAt: Time;
    discountLabel: string;
    description: string;
    updatedAt: Time;
    startDate: Time;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createOffer(title: string, description: string, discountLabel: string, startDate: Time, endDate: Time, active: boolean): Promise<string>;
    deleteOffer(id: string): Promise<void>;
    getActiveOffers(): Promise<Array<Data>>;
    getAllOffers(): Promise<Array<Data>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getOffer(id: string): Promise<Data | null>;
    getOffersFilteredByDateRange(startDate: Time, endDate: Time): Promise<Array<Data>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    searchOffersByTitle(searchTerm: string): Promise<Array<Data>>;
    toggleOfferActiveState(id: string): Promise<void>;
    updateOffer(id: string, title: string, description: string, discountLabel: string, startDate: Time, endDate: Time, active: boolean): Promise<void>;
}
