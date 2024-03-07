import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
        <header >
          <nav >
            <div>
              <Link
                 to="/"
              >
                Home
              </Link>
              {isLoggedIn && (
                <Link
                   to="/contacts"
                >
                  Contacts
                </Link>
              )}
            </div>
            <div>
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/register"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <UserMenu />
              )}
            </div>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>    
    </>
  );
};