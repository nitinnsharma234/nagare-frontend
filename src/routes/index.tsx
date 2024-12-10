import {
  Navigate,
  useLocation,
  useNavigate,
  useRoutes,
} from 'react-router-dom';
import MainLayout from '../layouts/dashboard';
import { ElementType, lazy, Suspense, useEffect } from 'react';
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGard';
import useAuth from '../hooks/useAuth';
import { PATH_AFTER_LOGIN } from '../config';
import { PATH_DASHBOARD } from './path';

const Loadable = (Component: ElementType) => (props: any) => {
  const { pathname } = useLocation();

  const { isAuthenticated } = useAuth();

  const isDashboard = pathname.includes('/dashboard') && isAuthenticated;

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
  const { pathname } = useLocation();
  console.log('🚀 ~ Router ~ pathname:', pathname);
  const navigate = useNavigate();

  const isHome = pathname === '/';
  useEffect(() => {
    if (isHome) {
      return navigate('/dashboard');
    }
  }, []);

  //const DEFAULT_PATH = Dash ? PATH_AFTER_LOGIN : PATH_DASHBOARD.root;

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
      children: [
        {
          path: 'homes',
          element: <Home />,
        },
      ],
    },
  ]);
}

//========================================

//auth
const Login = Loadable(lazy(() => import('../pages/Auth/Login')));
const Signup = Loadable(lazy(() => import('../pages/Auth/Signup')));

//dashboard
const Home = Loadable(lazy(() => import('../pages/dashboard/index')));
