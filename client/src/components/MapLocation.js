import React from 'react';
import { makeStyles } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import PinPoint from './PinPoint';

const mapStyles = makeStyles({
  root: {
    width: '400px',
    height: '300px',
    position: 'relative',
  },
});

export default function MapLocation({ location }) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapClass = mapStyles();
  return (
    <div className={mapClass.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        zoom={15}
        defaultCenter={[47.6062, -122.3321]}
      >
        <PinPoint
          text="My Location"
          lat={47.6062}
          lng={-122.3321}
        />
      </GoogleMapReact>
    </div>
  );
}
