import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import Button from '@mui/material/Button';


const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{user.name}</p>
      <Button
          id="basic-button"         
          onClick={handleLogout}
        >
          LOGOUT
        </Button>
    </div>
  );
};

export default UserMenu;