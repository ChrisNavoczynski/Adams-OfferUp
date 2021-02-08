//AD320- TeamAdams
//UI Prototypes

import React from 'react';
import ItemHeader from '../ItemHeader/ItemHeader';
import './ItemPage.css';
import ItemRow from '../ItemRow/ItemRow';
import MAP from '../itemPage_components/google.jpg';
import PHOTO from '../itemPage_components/photo.jpg';

const itemPage = (props) => {
    return (
        <div className="itemPage">
            <ItemHeader/ >  
            <div className="description">
                <div className="photo">
                    <h2>Name of Item</h2>
                    <img src={PHOTO} alt="Item"></img>
                </div>
                <div className= "list">
                    <ul>Item Description</ul>
                    <ul>Asking Price</ul>
                    <ul>Make An Offer</ul>
                    <ul>Save to Favorites</ul>
                </div>
            </div>
            <div className="map">
                <h3>Location</h3>
                <img src={MAP} alt="Location" width="250" ></img> 
            </div>
            <div className="similarItems">
                <h4>Other Similar Items</h4>
                <ItemRow />
            </div>             
        </div>
    )
};

export default itemPage;