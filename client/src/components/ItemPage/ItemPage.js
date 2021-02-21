// AD320- TeamAdams
// Interaction Updates
import React from 'react';
import ItemHeader from '../ItemHeader/ItemHeader';
import './ItemPage.css';
import ItemRow from '../ItemRow/ItemRow';
import PHOTO from '../itemPage_components/photo.jpg';
import '../googleMap/googleMap';
import '../ContactSeller/ContactSeller';

const itemPage = (props) => (
  <div className="itemPage">
    <ItemHeader />
    <div className="description">
      <div className="photo">
        <h2>Name of Item</h2>
        <img src={PHOTO} alt="Item" />
      </div>
      <div className="list">
        <ul>Item Description</ul>
        <ul>Asking Price</ul>
        <ul>Save to Favorites</ul>
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
      <div className="overMap">
        <googleMap />
      </div>
    </div>
    <div className="similarItems">
      <h4>Other Similar Items</h4>
      <ItemRow />
    </div>
  </div>
);
export default itemPage;
