import React from 'react';
import Message from '../Message/Message';

import {
    Grid,
 } from '@material-ui/core';

const MessageList = (props) => {
    const messages = [
        { 
            id: '1',
            to: 'user A',
            from: 'admin 1',
            message: 'test message',
        },
        { 
            id: '2',
            to: 'admin 1',
            from: 'user A',
            message: 'test testing',
        },
        { 
            id: '3',
            to: 'user A',
            from: 'user B',
            message: 'message test',
        },
        { 
            id: '4',
            to: 'admin 2',
            from: 'user C',
            message: 'testing message',
        },
    ]
    return (
        <Grid
         container item direction="row"
         spacing={3}
         > 
            {messages.map((message) => (
                <Grid item xs={3}>
                    <Message message={message}/>
                </Grid>
            ))}
        </Grid>
    )
};

export default MessageList;