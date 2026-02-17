import { Users, Heart, Leaf, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import WhyChooseUs from '@/components/marketing/WhyChooseUs';
import Seo from '@/components/seo/Seo';

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Freshness First',
      description: 'We source fresh produce daily from trusted local suppliers to ensure quality'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We go the extra mile to serve you better'
    },
    {
      icon: Award,
      title: 'Value for Money',
      description: 'Competitive pricing without compromising on quality or service'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Proud to serve the families and students of Sonipat with dedication'
    }
  ];

  return (
    <>
      <Seo
        title="About IN2 Supermart - Your Trusted Grocery Store in Sonipat"
        description="Learn about IN2 Supermart, a reliable local grocery destination in Sector 23, Sonipat. We focus on freshness, value-for-money, and customer satisfaction."
        keywords="About IN2 Supermart, Grocery Store Sonipat, Daily Needs Store Near Me, Local Supermarket Haryana"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About IN2 Supermart</h1>
            <p className="text-lg text-muted-foreground">
              Your reliable local grocery destination in Sonipat, committed to serving the community with quality
              products and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                IN2 Supermart is more than just a grocery store – we're a trusted part of the Sonipat community. Located
                conveniently in Sector 23, we've been serving families, students, and residents with dedication and care.
              </p>
              <p>
                Our mission is simple: to provide fresh, quality products at prices that make sense for your budget. We
                understand the importance of having a reliable neighborhood store where you can find everything you need,
                from daily essentials to special items.
              </p>
              <p>
                What sets us apart is our commitment to freshness. We receive new stock daily, ensuring that the fruits,
                vegetables, dairy products, and bakery items you purchase are always at their best. Our team carefully
                selects each product, working with trusted suppliers to maintain the highest standards.
              </p>
              <p>
                At IN2 Supermart, we believe in building relationships with our customers. Our friendly staff is always
                ready to help you find what you need, offer recommendations, and ensure your shopping experience is
                pleasant and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="hover-lift">
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-lg opacity-90 mb-8">
              We're dedicated to being more than just a store – we're your neighborhood partner in maintaining a healthy,
              happy household. Every product we stock, every price we set, and every interaction we have is guided by our
              commitment to your satisfaction.
            </p>
            <p className="text-lg opacity-90">
              Thank you for choosing IN2 Supermart. We look forward to serving you and your family for years to come.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

