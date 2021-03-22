import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: Colors.teal,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
  },
  categories: {
    fontWeight: 'bold',
    fontSize: 18,
    '&:hover': {
      backgroundColor: Colors.lightTeal,
    },
  },
  sideButton: {
    fontWeight: 'bold',
    fontSize: 18,
    '&:hover': {
      backgroundColor: Colors.lightTeal,
    },
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 32,
    '&:hover': {
      backgroundColor: Colors.lightTeal,
    },
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
            aria-label="To Home Page"
            underline="none"
            to="/"
            color="inherit"
          >
            <Button className={classes.logo}>
              AdamsOfferUp
            </Button>
          </Link>
          <Button className={classes.categories} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Categories
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/furniture" onClick={handleClose}>Furniture</MenuItem>
            <MenuItem component={Link} to="/collectables" onClick={handleClose}>Collectables</MenuItem>
            <MenuItem component={Link} to="/electronics" onClick={handleClose}>Electronics</MenuItem>
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
