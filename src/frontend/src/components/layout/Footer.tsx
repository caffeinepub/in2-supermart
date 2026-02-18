import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'in2-supermart'
  );

  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-primary">IN2 Supermart</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted neighborhood grocery store in Sonipat. Fresh products, affordable prices, friendly service.
            </p>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>No. 134 Basement, 135P, Sector 23, Sonipat, Haryana – 131001, India</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <Clock className="h-4 w-4 flex-shrink-0 text-primary" />
              <span>Open daily, closes at 10 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Categories
              </Link>
              <Link to="/offers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Offers & Deals
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Visit Store
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Shop By Category</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <span>Fruits & Vegetables</span>
              <span>Dairy & Bakery</span>
              <span>Packaged Foods</span>
              <span>Household Essentials</span>
              <span>Beverages & Snacks</span>
              <span>Personal Care</span>
            </div>
          </div>
        </div>

        {/* Website Designed By Section */}
        <div className="mt-12 mb-8">
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
            <h3 className="font-heading text-xl font-semibold mb-6 text-center md:text-left">
              Website Designed By
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Designer Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/assets/generated/designer-photo.dim_320x320.png"
                  alt="Aditya Sharma - Website Designer"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-lg"
                />
              </div>

              {/* Designer Info */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-heading text-2xl font-bold mb-1">Aditya Sharma</h4>
                <p className="text-primary font-medium mb-4">Website Designer & Digital Creator</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Aditya Sharma is a passionate young website designer dedicated to creating modern, user-friendly, and business-focused websites. At just 17, he specializes in designing clean, responsive, and high-converting websites that help local businesses build a strong online presence. His goal is to combine creativity with functionality to deliver professional digital experiences that drive real results.
                </p>

                {/* CTA */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">Need a Website for Your Business?</p>
                  <a
                    href="https://instagram.com/aditya.sharma.30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
                  >
                    <SiInstagram className="h-5 w-5" />
                    Contact Me on Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Dedication Line */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground text-center italic">
                Designed with dedication by Aditya Sharma
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground space-y-2">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} IN2 Supermart. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-sm">Made by Aditya Sharma</p>
        </div>
      </div>
    </footer>
  );
}
