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
        backgroundColor: "#b2dfdb",
    },
}));

const Message = (props) => {
    const classes = useStyles();
    return (
            <Card className={classes.card} variant="outlined">
                <CardContent >
                    <Typography>From: </Typography>
                    <Typography>Subject: </Typography>
                    <Typography>Message: {props.}</Typography>
                </CardContent>
            </Card>
    )
};

export default Message;