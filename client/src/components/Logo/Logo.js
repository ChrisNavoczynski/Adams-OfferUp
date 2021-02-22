// AD320- TeamAdams
// Courtney Hoppus - UI Prototypes
import React from 'react';
import './Logo.css';

// import { Button } from '@material-ui/core';

const logo = () => (
  <div className="Hover">
    <a className="Link" href="./itemPage/item_header">
      <button type="button" className="Logo">
        <div>
          {/* this should be things we can bind to */}
          <p>Adams Offers</p>
        </div>
      </button>
    </a>
  </div>

);

export default logo;
