import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#80cbc4',
    fontWeight: 'bold',
  },
  categories: {
    backgroundColor: '#b2dfdb',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sideButton: {
    width: '100px',
    backgroundColor: '#80cbc4',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link
            underline="none"
            to="/"
            color="inherit"
          >
            <Button>
              <Typography className={classes.logo} variant="h4" aria-label="To Home Page">
                AdamsOfferUp
              </Typography>
            </Button>
          </Link>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Categories
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Furniture</MenuItem>
            <MenuItem onClick={handleClose}>Collectables</MenuItem>
            <MenuItem onClick={handleClose}>Electronics</MenuItem>
          </Menu>
          <Link to="/profile">
            <Button className={classes.sideButton}>
              Profile
            </Button>
          </Link>
          <Link to="/login">
            <Button className={classes.sideButton}>
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className={classes.sideButton}>
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
