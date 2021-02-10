//Chris Navoczynski Item Page Prototype

import React from 'react'
import './item_header.css'
import './loginModal/login.js'
import './Logo/Logo.js'

export default function itemHeaderGroup(props) {
    return (
        <div>
            <div className="itemPageHead">
            <h1>Logo and Company Name</h1>
            </div>
            <div className="NavBar">
            <span>Search        </span>
            <span>Filter Location</span>
            <span>Cart(icon)     </span>
            <Modal />
            <span>Signup         </span>
            </div>    
        </div>
    )

}
