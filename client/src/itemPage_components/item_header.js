//Chris Navoczynski Item Page Prototype

import React from 'react'
import './item_header.css'

export default function itemHeaderGroup(props) {
    return (
        <div>
            <div className="itemPageHead">
            <h1>Logo and Company Name</h1>
            </div>
            <div className="NavBar">
            <span>Home(icon)    </span>
            <span>Search        </span>
            <span>Filter Location</span>
            <span>Cart(icon)     </span>
            <span>Login          </span>
            <span>Signup         </span>
            </div>    
        </div>
    )

}
