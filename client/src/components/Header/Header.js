import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../constants/colors';
import CatDropDown from './CatDropDown';

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link
            style={{ textDecoration: 'none' }}
            aria-label="To Home Page"
            underline="none"
            to="/"
            color="inherit"
          >
            <Button className={classes.logo}>
              AdamsOfferUp
            </Button>
          </Link>
          <CatDropDown />
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Button className={classes.sideButton}>
              Profile
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button className={classes.sideButton}>
              Log In
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button className={classes.sideButton}>
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
