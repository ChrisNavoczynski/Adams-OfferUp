//AD320- TeamAdams
//UI Prototypes

import React from 'react';
import './ItemCard.css';
import Photo from '../itemPage_components/photo.jpg';

const itemCard = (props) => {
    return (
        <div className="ItemCard">
            {/* this should be things we can bind to */}
            <img src={Photo} alt='item' />
            <h3>Item Name</h3>
            <h3>Item Location</h3>
            <h3>Item Price</h3>
        </div>
    )
};

export default itemCard;