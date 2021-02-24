import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import UserThread from '../UserThread/UserThread';

const ThreadList = (props) => {
  const messages = [
    {
      id: '1',
      to: 'user A',
      from: 'admin 1',
      subject: 'account lock',
      message: 'test message',
    },
    {
      id: '2',
      to: 'admin 1',
      from: 'user A',
      subject: 'warning',
      message: 'test testing',
    },
    {
      id: '3',
      to: 'user A',
      from: 'user B',
      subject: 'pick up details',
      message: 'message test',
    },
    {
      id: '4',
      to: 'admin 2',
      from: 'user C',
      subject: 'let us be friends',
      message: 'testing message',
    },
  ];
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
