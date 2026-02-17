import { useActiveOffers } from '@/hooks/offers/useActiveOffers';
import OfferCard from '@/components/offers/OfferCard';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Tag, Sparkles } from 'lucide-react';
import Seo from '@/components/seo/Seo';

export default function OffersPage() {
  const { data: offers, isLoading, error } = useActiveOffers();

  return (
    <>
      <Seo
        title="Offers & Deals - IN2 Supermart | Special Discounts in Sonipat"
        description="Check out our latest offers and deals at IN2 Supermart. Weekly promotions and special discounts for families and students in Sonipat."
        keywords="Grocery Offers Sonipat, Supermarket Deals, Discount Groceries, Weekly Promotions, Special Offers"
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 py-8">
          <ResponsiveImage
            src="/assets/generated/in2-offers-banner.dim_1600x500.png"
            alt="Special offers at IN2 Supermart"
            priority
            className="rounded-2xl shadow-soft"
            aspectRatio="16/5"
          />
        </div>
      </section>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Offers & Deals</h1>
            <p className="text-lg text-muted-foreground">
              Save more on your favorite products with our exclusive deals and promotions
            </p>
          </div>

          {/* Savings Message */}
          <div className="max-w-4xl mx-auto mb-12">
            <Alert className="bg-secondary/10 border-secondary">
              <Sparkles className="h-5 w-5 text-secondary" />
              <AlertDescription className="text-base">
                <strong>Special savings for families and students!</strong> We understand the importance of stretching
                your budget. Check out our weekly promotions and today's special discounts designed to help you save on
                everyday essentials.
              </AlertDescription>
            </Alert>
          </div>

          {/* Offers Content */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
              <AlertDescription>Failed to load offers. Please try again later.</AlertDescription>
            </Alert>
          ) : !offers || offers.length === 0 ? (
            <div className="text-center py-12">
              <Tag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-heading text-xl font-semibold mb-2">No Active Offers</h3>
              <p className="text-muted-foreground">Check back soon for exciting new deals and promotions!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Weekly Promotions */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Tag className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Weekly Promotions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {offers.map((offer) => (
                    <OfferCard
                      key={offer.id}
                      title={offer.title}
                      description={offer.description}
                      discountLabel={offer.discountLabel}
                      startDate={offer.startDate}
                      endDate={offer.endDate}
                    />
                  ))}
                </div>
              </div>

              {/* Today's Special Discounts */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-6 w-6 text-secondary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Today's Special Discounts</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Visit our store to discover additional in-store specials and flash deals available today only!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-muted-foreground">
              New offers are added regularly. Visit us in store or contact us to learn about the latest deals and
              promotions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

