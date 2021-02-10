//AD320- TeamAdams
//UI Prototypes

import React from 'react';
import '../itemPage_components/item_header.css';
import Logo from '../Logo/Logo.js';
import Modal from 'react-bootstrap/Modal';

const itemHeader = (props) => {
    return (
        <div className="ItemHeader">
            <div>
            <Logo />
            <div className="NavBar">
            <span>Home(icon)    </span>
            <span>Search        </span>
            <span>Filter Location</span>
            <span>Cart(icon)     </span>
            <Modal />
            <span>Signup         </span>
            </div>    
        </div>
        </div>
    )
};

export default itemHeader;