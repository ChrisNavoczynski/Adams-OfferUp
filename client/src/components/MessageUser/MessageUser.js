import {
  Paper,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React from 'react';

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

const MessageUser = (props) => {
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
        placeholder="Subject: "
        multiline
        rows={1}
      />
      <TextField
        className={classes.labels}
        fullWidth
        id="standard-multiline-static"
        label="Message:     "
        variant="outlined"
        placeholder="Message: "
        multiline
        rows={4}
      />
    </Paper>
  );
};

export default MessageUser;
