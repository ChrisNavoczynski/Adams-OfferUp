import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';

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

const defaultFormValues = {
  to: '',
  from: '',
  subject: '',
  message: '',
};

export default function MessageUser() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState([defaultFormValues]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const renderError = () => <p>{`Error: ${error}`}</p>;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestConfig = {
      url: 'http://localhost:8000/api/v1/messages',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: {
        to: formValues.to,
        from: formValues.from,
        subject: formValues.subject,
        message: formValues.message,
      },
    };

    axios(requestConfig)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (success) {
    return <Redirect to="/" />;
  }
  if (error) {
    return renderError();
  }

  return (
    <Paper
      className={classes.paper}
      elevation={5}
    >
      <form onSubmit={handleSubmit} id="createMessage">
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="To: "
          variant="outlined"
          placeholder="To: "
          defaultValue={formValues.to}
          onChange={handleInputChange}
          name="to"
          multiline
          rows={1}
        />
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="From: "
          variant="outlined"
          placeholder="From: "
          defaultValue={formValues.from}
          onChange={handleInputChange}
          name="from"
          multiline
          rows={1}
        />
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="Subject: "
          variant="outlined"
          placeholder="Subject: "
          defaultValue={formValues.subject}
          onChange={handleInputChange}
          name="subject"
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
          defaultValue={formValues.message}
          onChange={handleInputChange}
          name="message"
          multiline
          rows={4}
        />
        <Button type="submit" form="createMessage">Send Message</Button>
      </form>
    </Paper>
  );
}
