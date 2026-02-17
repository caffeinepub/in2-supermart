import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Seo from '@/components/seo/Seo';

export default function ContactPage() {
  const address = 'No. 134 Basement, 135P, Sector 23, Sonipat, Haryana – 131001, India';
  const phoneNumber = '+91XXXXXXXXXX';
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.123456789!2d77.0123456!3d28.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzE1LjYiTiA3N8KwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin';

  return (
    <>
      <Seo
        title="Visit Our Store - IN2 Supermart Location & Contact | Sector 23 Sonipat"
        description="Visit IN2 Supermart at No. 134 Basement, 135P, Sector 23, Sonipat, Haryana. Open daily until 10 PM. Get directions and contact information."
        keywords="IN2 Supermart Location, Grocery Store Sector 23 Sonipat, Supermarket Address Sonipat, Contact IN2 Supermart"
        includeStructuredData
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visit Our Store</h1>
            <p className="text-lg text-muted-foreground">
              We're conveniently located in Sector 23, Sonipat. Come visit us for all your grocery needs!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Our Address</h3>
                <p className="text-sm text-muted-foreground">{address}</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                  <Clock className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Store Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Open daily
                  <br />
                  Closes at 10 PM
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a href={`tel:${phoneNumber}`} className="hover:text-primary transition-colors">
                    {phoneNumber}
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map and Directions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Google Map */}
            <div className="order-2 lg:order-1">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IN2 Supermart Location"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Directions Info */}
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">How to Reach Us</h2>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  IN2 Supermart is conveniently located in the heart of Sector 23, Sonipat, making it easily accessible
                  for residents and visitors alike.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">Located in the basement of building 135P</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">Easy parking available nearby</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">Well-connected by local transport</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">Walking distance from major residential areas in Sector 23</span>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="gap-2"
                asChild
              >
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">We're Here to Help</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about our products or services? Our friendly staff is always ready to assist you. Feel free
              to call us or visit the store during our operating hours.
            </p>
            <p className="text-sm text-muted-foreground">
              For quick inquiries, you can also reach us via WhatsApp using the floating button on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

