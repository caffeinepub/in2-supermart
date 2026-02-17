import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import CategoryQuickLinks from '@/components/marketing/CategoryQuickLinks';
import TrustIndicators from '@/components/marketing/TrustIndicators';
import WhyChooseUs from '@/components/marketing/WhyChooseUs';
import Seo from '@/components/seo/Seo';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="IN2 Supermart - Fresh Groceries, Smart Prices | Supermarket in Sonipat"
        description="IN2 Supermart in Sector 23, Sonipat offers fresh groceries, daily essentials, and household items at affordable prices. Your trusted neighborhood grocery store in Haryana."
        keywords="Supermarket in Sonipat, Grocery Store Sector 23 Sonipat, Daily Needs Store Near Me, Fresh Groceries Sonipat, IN2 Supermart"
        includeStructuredData
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fresh Groceries.
                <br />
                <span className="text-primary">Smart Prices.</span>
                <br />
                <span className="text-secondary">Near You.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Your trusted neighborhood supermarket in Sonipat. Quality products, unbeatable prices, and friendly
                service – all under one roof.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate({ to: '/categories' })} className="gap-2">
                  Shop Categories
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/offers' })} className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  View Offers
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <ResponsiveImage
                src="/assets/generated/in2-hero.dim_1920x900.png"
                alt="Fresh groceries at IN2 Supermart"
                priority
                className="rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <TrustIndicators />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our wide selection of fresh produce, daily essentials, and household items
            </p>
          </div>
          <CategoryQuickLinks />
        </div>
      </section>

      {/* Daily Essentials Highlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ResponsiveImage
                src="/assets/generated/in2-lifestyle.dim_1600x900.png"
                alt="Family shopping at IN2 Supermart"
                className="rounded-2xl shadow-soft"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Everything You Need for Your Family
              </h2>
              <p className="text-muted-foreground mb-6">
                From fresh fruits and vegetables to daily essentials and household items, IN2 Supermart is your one-stop
                shop for all your grocery needs in Sonipat.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>Fresh produce delivered daily from local farms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>Wide range of national and international brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>Special discounts for families and students</span>
                </li>
              </ul>
              <Button onClick={() => navigate({ to: '/about' })} variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the best grocery shopping in Sonipat. Open daily until 10 PM.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate({ to: '/contact' })}
            className="gap-2 shadow-lg"
          >
            Get Directions
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </>
  );
}

