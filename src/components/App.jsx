import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from '../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>loading...</p>;
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <ProtectedRoute Component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="register"
          element={<PrivateRoute Component={<Register />} redirectTo="/" />}
        />
        <Route
          path="login"
          element={<PrivateRoute Component={<Login />} redirectTo="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;