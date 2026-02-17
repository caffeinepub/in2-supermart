import { DollarSign, Package, MapPin, Heart, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive prices that fit your budget'
  },
  {
    icon: Package,
    title: 'Wide Product Range',
    description: 'Everything you need under one roof'
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easy to reach in Sector 23, Sonipat'
  },
  {
    icon: Heart,
    title: 'Friendly Service',
    description: 'Warm and helpful staff always ready to assist'
  },
  {
    icon: Leaf,
    title: 'Fresh Stock Daily',
    description: 'New deliveries every day for maximum freshness'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose IN2 Supermart?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best shopping experience for our community in Sonipat
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

