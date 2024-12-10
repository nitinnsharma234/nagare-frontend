import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes/path';
import useAuth from '../hooks/useAuth';

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
