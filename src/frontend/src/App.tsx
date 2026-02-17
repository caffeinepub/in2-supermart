import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';
import AdminOffersPage from './pages/admin/AdminOffersPage';
import AdminRouteGuard from './components/auth/AdminRouteGuard';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  )
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <SiteLayout>
      <AboutPage />
    </SiteLayout>
  )
});

const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/categories',
  component: () => (
    <SiteLayout>
      <CategoriesPage />
    </SiteLayout>
  )
});

const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/offers',
  component: () => (
    <SiteLayout>
      <OffersPage />
    </SiteLayout>
  )
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <SiteLayout>
      <ContactPage />
    </SiteLayout>
  )
});

const adminOffersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/offers',
  component: () => (
    <SiteLayout>
      <AdminRouteGuard>
        <AdminOffersPage />
      </AdminRouteGuard>
    </SiteLayout>
  )
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  categoriesRoute,
  offersRoute,
  contactRoute,
  adminOffersRoute
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

