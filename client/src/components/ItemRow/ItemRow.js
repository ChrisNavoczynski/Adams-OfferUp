// AD320- TeamAdams
// UI Prototypes

import React from 'react';
import { Grid } from '@material-ui/core';
import ItemCard from '../ItemCard/ItemCard';
import './ItemRow.css';

const itemRow = (props) => {
  const items = [
    {
      id: '1',
      location: '123 Fake Street',
      name: 'A Bat',
      price: 50,
    },
    {
      id: '2',
      location: '42 Galactic Way',
      name: 'A Cat',
      price: 75,
    },
    {
      id: '3',
      location: 'your mom\'s house',
      name: 'A Hat',
      price: 150,
    },
    {
      id: '4',
      location: 'the alley',
      name: 'A Mat',
      price: 0,
    },
  ];
  return (
    <Grid
      container
      item
      direction="row"
      spacing={3}
    >
      {items.map((item) => (
        <Grid item xs={3} key={item.id}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default itemRow;
