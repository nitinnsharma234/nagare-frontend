import { Outlet, useLocation, useNavigate } from 'react-router';
import NavbarHorizontal from './navbar';
import NavBarVertical from './navbar/navbarVertical';

export default function MainLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isHome = pathname === '/';

  if (isHome) {
    return navigate('/dashboard');
  }

  return (
    <div>
      <div className="flex ">
        <NavBarVertical />
        <div className="flex-1">
          <NavbarHorizontal />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
