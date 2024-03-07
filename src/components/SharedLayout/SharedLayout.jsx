import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';


export const SharedLayout = () => {

  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHomeClick = () => {
    handleClose();
    navigate('/');
  };
  const handleRegisterClick = () => {
    handleClose();
    navigate('/register');
  };
  const handleLoginClick = () => {
    handleClose();
    navigate('/login');
  };
  const handleContactsClick = () => {
    handleClose();
    navigate('/contacts');
  };

  return (
    <>
    <header >
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          MENU
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleHomeClick}>Home</MenuItem>
          {!isLoggedIn && (
            <>
              <MenuItem onClick={handleRegisterClick}>Register</MenuItem>
              <MenuItem onClick={handleLoginClick}>Login</MenuItem>
            </>
          )}
          {isLoggedIn && (
            <MenuItem onClick={handleContactsClick}>Contacts</MenuItem>
          )}
          {isLoggedIn && <UserMenu />}
        </Menu>
      </div>
      
   </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>    
    </>
  );
};