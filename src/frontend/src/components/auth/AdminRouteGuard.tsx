import { type ReactNode } from 'react';
import { useCallerRole } from '@/hooks/auth/useCallerRole';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminRouteGuardProps {
  children: ReactNode;
}

export default function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const { isAdmin, isLoading } = useCallerRole();

  if (!identity) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert className="max-w-2xl mx-auto">
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription className="mt-2">
            <p className="mb-4">You need to be logged in as an administrator to access this page.</p>
            <Button onClick={login} disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login as Admin'
              )}
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You do not have administrator privileges to access this page. Please contact the store owner if you believe
            this is an error.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return <>{children}</>;
}

