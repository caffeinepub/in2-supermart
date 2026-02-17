import { type ReactNode } from 'react';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import FloatingContactCtas from '../cta/FloatingContactCtas';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderNav />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContactCtas />
    </div>
  );
}

