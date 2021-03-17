import React from 'react';
import {
  AppBar,
  Button,
  InputBase,
  Typography,
  Toolbar,
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
  },
  title: {
    width: '100%',
    color: 'black',
    margin: theme.spacing(2),
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    paddingLeft: '5px',
    textAlign: 'left',
    margin: theme.spacing(2),
    width: '50%',
    backgroundColor: Colors.lightTeal,
  },
  sideButton: {
    width: '100px',
    backgroundColor: Colors.lightPurple,
    fontWeight: 'bold',
    margin: theme.spacing(2),
    '&:hover': {
      color: 'black',
      backgroundColor: Colors.lightTeal,
    },
  },
  logo: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Colors.lightPurple,
    padding: '5px',
    fontWeight: 'bold',
    '&:hover': {
      color: 'black',
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
            underline="none"
            to="/"
            color="inherit"
          >
            <Button>
              <Typography className={classes.logo} variant="h4">
                AdamsOfferUp
              </Typography>
            </Button>
          </Link>
          <InputBase className={classes.search} placeholder="Search..." fullWidth />
          <Link to="/helppage">
            <Button className={classes.sideButton}>
              How it Works
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
