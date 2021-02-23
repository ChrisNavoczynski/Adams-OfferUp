//AD320- TeamAdams
//UI Prototypes

import React from 'react';
import '../ItemCard/ItemCard.css';
import { Card,
        CardContent,
        makeStyles,
        Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        backgroundColor: "#FAF6F5",
    },
}));

const Message = (props) => {
    const classes = useStyles();
    return (
            <Card className={classes.card} variant="outlined">
                <CardContent >
                    <Typography>From: {props.message.from}</Typography>
                    <Typography>Subject: {props.message.subject}</Typography>
                    <Typography>Message: {props.message.message}</Typography>
                </CardContent>
            </Card>
    )
};

export default Message;
