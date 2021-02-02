//AD320-TeamAdams
//UI Prototypes

import React from 'react';
import './helpPage.css';
import searchBar from './components/searchBar';
const helpPage = (props) => {
    return ( 
        <div className="helpPage">
      <h1>Company Name</h1>
      <h2>How can we help you?</h2>

      <searchBar />

      <div id="wrapper">
        <div id ="row1">
        <div className = 'box1'>
          <ul>
          <li><h3>Shipping</h3></li>
          <li>How to cancel shipment as a seller</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>

          </ul>
          </div>

          <div className = 'box1'>
          <ul>
          <li><h3>Buying</h3></li>
          <li>How to do something</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>

          </ul>
          </div>

          <div className = 'box1'>
          <ul>
          <li><h3>Selling</h3></li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>

          </ul>
          </div>
</div>
          <div id="row2">
          <div className = 'box2'>
            <ul>
            <li><h3>Account</h3></li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
            </ul>
      </div>

      <div className = 'box2'>
            <ul>
            <li><h3>Account</h3></li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
            </ul>
      </div>

      <div className = 'box2'>
            <ul>
            <li><h3>Account</h3></li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
          <li>How to do something else</li>
            </ul>
      </div>
      
    </div>
    </div>
    </div>
  );
}

export default helpPage;