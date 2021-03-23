import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import UserThread from '../UserThread/UserThread';

const ThreadList = (props) => {
  const { thread } = props;
  const { messages } = thread;
  return (
    <Grid
      container
      item
      direction="row"
      spacing={3}
    >
      {messages.map((message) => (
        <Grid item xs={3} key={message.id}>
          <UserThread message={message} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ThreadList;
