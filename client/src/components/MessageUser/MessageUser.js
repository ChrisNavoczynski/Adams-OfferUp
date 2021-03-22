import React, { useState } from 'react';
import {
  Paper,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    width: '50%',
    margin: theme.spacing(2),
    backgroundColor: '#FAF6F5',
  },
  labels: {
    textDecoration: 'none',
    color: 'black',
    display: 'block',
    marginBlock: theme.spacing(1),
  },
}));

export default function MessageUser() {
  const classes = useStyles();
  return (
    <Paper
      className={classes.paper}
      elevation={5}
    >
      <TextField
        className={classes.labels}
        fullWidth
        id="standard-multiline-static"
        label="Subject: "
        variant="outlined"
        placeholder="A thing"
        multiline
        rows={1}
      />
      <TextField
        className={classes.labels}
        fullWidth
        id="standard-multiline-static"
        label="Message:     "
        variant="outlined"
        placeholder="What's Up?"
        multiline
        rows={4}
      />
    </Paper>
  );
}
