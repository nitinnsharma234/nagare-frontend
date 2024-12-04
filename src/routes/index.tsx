import { useLocation, useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/dashboard';
import { ElementType, lazy, Suspense } from 'react';
import { useAuth } from '../hooks/useAuth';
import GuestGuard from '../guards/guestGard';

import AuthGuard from '../guards/AuthGuard';

const Loadable = (Component: ElementType) => (props: any) => {
  // const { pathname } = useLocation();

  // const { isAuthenticated } = useAuth();

  return (
    <Suspense
      fallback={
        <>
          <p>Loading...</p>
        </>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const { isAuthenticated } = useAuth();

  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'signup',
          element: (
            <GuestGuard>
              <Signup />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [],
    },
  ]);
}

//========================================

//auth
const Login = Loadable(lazy(() => import('../pages/Auth/Login')));
const Signup = Loadable(lazy(() => import('../pages/Auth/Signup')));
