import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LoginButton from '../auth/LoginButton';
import { useCallerRole } from '@/hooks/auth/useCallerRole';

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAdmin } = useCallerRole();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Categories', path: '/categories' },
    { label: 'Offers & Deals', path: '/offers' },
    { label: 'Visit Store', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ShoppingBag className="h-7 w-7 text-primary" />
            <span className="font-heading text-xl font-bold text-primary">IN2 Supermart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant="ghost"
                onClick={() => navigate({ to: link.path })}
                className="text-sm font-medium"
              >
                {link.label}
              </Button>
            ))}
            {isAdmin && (
              <Button
                variant="ghost"
                onClick={() => navigate({ to: '/admin/offers' })}
                className="text-sm font-medium text-secondary"
              >
                Manage Offers
              </Button>
            )}
          </nav>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <LoginButton />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-lg font-bold text-primary">Menu</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.path}>
                      <Button
                        variant="ghost"
                        onClick={() => navigate({ to: link.path })}
                        className="justify-start text-base"
                      >
                        {link.label}
                      </Button>
                    </SheetClose>
                  ))}
                  {isAdmin && (
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        onClick={() => navigate({ to: '/admin/offers' })}
                        className="justify-start text-base text-secondary"
                      >
                        Manage Offers
                      </Button>
                    </SheetClose>
                  )}
                </nav>
                <div className="pt-4 border-t">
                  <LoginButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

