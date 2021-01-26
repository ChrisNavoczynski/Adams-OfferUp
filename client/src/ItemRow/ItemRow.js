//AD320- TeamAdams
//Courtney Hoppus - UI Prototypes

import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemRow.css';

const itemRow = (props) => {
    return (
        <div className="ItemRow">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
    )
};

export default itemRow;