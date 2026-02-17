import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

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

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground space-y-2">
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

