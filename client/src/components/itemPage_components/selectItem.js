// Chris Navoczynski Item Page Prototype

import React from 'react';
import './selectItem.css';
import MAP from './google.jpg';
import PHOTO from './photo.jpg';
import ItemBox from './itemTemplate';

export default function itemSelectionGroup(props) {
  return (
    <div>
      <div className="itemSelection">
        <section className="section">
          <h2>Name of Item</h2>
          <div>
            <img src={PHOTO} alt="Item Name" width="200" />
          </div>
          <div className="list">
            <ul>Item Description</ul>
            <ul>Asking Price</ul>
            <ul>Make An Offer</ul>
            <ul>Save to Favorites</ul>
          </div>
          <h3>Location</h3>
          <div>
            <img src={MAP} alt="Location" width="250" />
          </div>
          <div>
            <h4>Other Similar Items</h4>
          </div>
          <div className="wrapper">
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
          </div>
        </section>
      </div>
    </div>
  );
}
