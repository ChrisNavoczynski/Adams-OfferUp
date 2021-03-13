import React from 'react';
import { Grid } from '@material-ui/core';
import './ItemPage.css';
import ItemRow from '../ItemRow/ItemRow';
import PHOTO from '../itemPage_components/photo.jpg';
import '../ContactSeller/ContactSeller';
import MapLocation from '../MapLocation';

const itemPage = (props) => (
  <div className="itemPage">
    <div className="description">
      <div className="photo">
        <h2>Name of Item</h2>
        <img src={PHOTO} alt="Item" />
      </div>
      <div className="list">
        <ul>Item Description</ul>
        <ul>Asking Price</ul>
      </div>

      <div className="Contact">
        <a href="../ContactSeller/ContactSeller.js" target="_blank">
          <button type="button" className="ContactPage">
            <p>Contact Seller</p>
          </button>
        </a>
      </div>
    </div>

    <div className="map">
      <h3>Location</h3>
      <Grid item>
        <MapLocation />
      </Grid>
    </div>

    <div className="similarItems">
      <h4>Other Similar Items</h4>
      <ItemRow />
    </div>
  </div>
);
export default itemPage;
