import { Shield, DollarSign, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const indicators = [
  {
    icon: Shield,
    title: 'Quality Products',
    description: 'Fresh and authentic items daily'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Best value for your money'
  },
  {
    icon: MapPin,
    title: 'Local Convenience',
    description: 'Right in your neighborhood'
  }
];

export default function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {indicators.map((indicator) => {
        const Icon = indicator.icon;
        return (
          <Card key={indicator.title} className="border-2 hover-lift">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{indicator.title}</h3>
              <p className="text-sm text-muted-foreground">{indicator.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

