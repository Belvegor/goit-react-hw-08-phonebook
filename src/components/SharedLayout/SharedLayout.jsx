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

  return (
    <>
      
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
        <MenuItem  onClick={handleHomeClick} >Home</MenuItem>
        {isLoggedIn && (
            <MenuItem onClick={handleClose}>
              <Link to="/contacts">Contacts</Link>
            </MenuItem>
          )}
        <MenuItem onClick={handleRegisterClick}>Register</MenuItem>
        <MenuItem onClick={handleLoginClick}>Login</MenuItem>
      </Menu>
    </div>
      
      <div>
        <header >
          <nav >
            <div>
              <Link to="/"> Home </Link>{isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
            </div>
            <div>
              {!isLoggedIn ? (
              <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              </>
              ) : (<UserMenu/>)}
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