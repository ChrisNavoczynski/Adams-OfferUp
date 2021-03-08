
import React from 'react';
import './ItemCard.css';
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Photo from '../itemPage_components/photo.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    backgroundColor: '#b2dfdb',
  },
  image: {
    width: '80%',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const ItemCard = (props) => {
  const classes = useStyles();
  const productID = props.item.id;
  return (
    <Card className={classes.card} variant="outlined">
      <Link
        className={classes.link}
        to={`/product/${productID}`}
      >
        <CardContent>
          <img src={Photo} alt="item" className={classes.image} />
          <Typography>{props.item.name}</Typography>
          <Typography>{props.item.location}</Typography>
          <Typography>
            Price:
            {props.item.price}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ItemCard;
