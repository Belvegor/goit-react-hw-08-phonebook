
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';

export const NotFoundPage = () => {

  const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    handleClose();
    navigate('/');
  };

  return ( 
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div>
        <h2>
          Page doesn't exist
        </h2>
        <Button
          variant="contained"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleHomeClick}
        >
          Back to main page
        </Button>
      </div>
    </>
  );
};