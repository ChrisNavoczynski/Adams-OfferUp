import React, { useEffect, useState } from 'react';
import {
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import ThreadList from './ThreadList';

export default function ConversationList() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderLoading = () => <div>Loading...</div>;
  const renderError = () => <p>{`Error: ${error}`}</p>;
  const renderThreads = () => (
    <Grid
      container
      item
      direction="row"
      spacing={3}
    >
      {threads.map((thread) => (
        <Grid item xs={12} key={thread.id}>
          <ThreadList thread={thread} />
        </Grid>
      ))}
    </Grid>
  );

  useEffect(() => {
    const requestConfig = {
      url: 'http://localhost:8000/api/v1/messages',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    };

    axios(requestConfig)
      .then((response) => {
        setThreads(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return renderLoading();
  }
  if (threads.length > 0) {
    return renderThreads();
  }
  return renderError();
}
