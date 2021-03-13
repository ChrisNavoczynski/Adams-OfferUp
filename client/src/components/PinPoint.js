import React from 'react';
import { makeStyles } from '@material-ui/core';
import GooglePin from '@material-ui/icons/LocationOn';

const ptStyles = makeStyles({
  root: {
    width: '30px',
    height: '30px',
  },
});

export default function PinPoint() {
  const mapClass = ptStyles();
  return (
    <div className={mapClass.root}>
      <GooglePin />
    </div>
  );
}
