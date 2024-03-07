import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ Component, redirectTo }) {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
}