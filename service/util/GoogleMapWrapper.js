require('dotenv').config({ path: '.env' });
const axios = require('axios');
const debug = require('debug')('api');

//This code was originally created by Jason from sample, some variables have been changed 
const GoogleGeocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?';

exports.getLocation = async (location) => {
  const encodedAddress = encodeURI(location); 
  const addressParam = `address=${encodedAddress}`;
  const apiKeyParam = `&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  const requestURL = `${GoogleGeocodeURL}${addressParam}${apiKeyParam}`;

  const response = await axios.get(requestURL);
  if (response.data.status === 'OK') {
    const geocodeResult = response.data.results[0];
    const location = {
      readable: geocodeResult.formatted_address,
      latitude: geocodeResult.geometry.location.lat,
      longitude: geocodeResult.geometry.location.lng,
    };
    debug('geocode reformatted ', location);
    return location;
  }
  throw new Error('Geocoding Failure');
};