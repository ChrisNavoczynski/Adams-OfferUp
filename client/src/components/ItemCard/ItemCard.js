//AD320- TeamAdams
//UI Prototypes

import React from 'react';
import './ItemCard.css';
import Photo from '../itemPage_components/photo.jpg';
import { Card,
        CardContent,
        makeStyles,
        Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        backgroundColor: "#b2dfdb",
    },
    image: {
        width: "80%",
    },
    details: {
        textDecoration: "none",
        color: "black"
    }
}));

const ItemCard = (props) => {
    const classes = useStyles();
    const details = props.item.id;
    return (
        <Card className={classes.card} variant="outlined">
            <a href={"/products/" + details} className={classes.details}>
            <CardContent >
                <img src={Photo} alt="item" className={classes.image}/>
                <Typography>{props.item.name}</Typography>
                <Typography>{props.item.location}</Typography>
                <Typography>Price: {props.item.price}</Typography>
            </CardContent>
            </a>
        </Card>
    )
};

export default ItemCard;