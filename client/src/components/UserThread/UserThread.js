// AD320- TeamAdams
// UI Prototypes

import React from 'react';
import '../ItemCard/ItemCard.css';
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    backgroundColor: '#FAF6F5',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Message = (props) => {
  const classes = useStyles();
  const threadID = props.message.id;
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography>
          From:
          {props.message.from}
        </Typography>
        <Typography>
          Subject:
          {props.message.subject}
        </Typography>
      </CardContent>
      <Link
        className={classes.link}
        to={`/thread/${threadID}`}
      >
        <CardActions>
          <Button fullWidth="true">Go To Thread</Button>
        </CardActions>
      </Link>
    </Card>
  );
};

export default Message;
