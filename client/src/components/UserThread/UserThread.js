// AD320- TeamAdams
// UI Prototypes

import React from 'react';
import '../ItemCard/ItemCard.css';
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

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
  const { message } = props;
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography>
          From:
          {message.from}
        </Typography>
        <Typography>
          Subject:
          {message.subject}
        </Typography>
        <Typography>
          Message:
          {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
