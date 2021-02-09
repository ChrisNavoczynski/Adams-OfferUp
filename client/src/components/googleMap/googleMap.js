//Created by Chris NAvoczynski
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '60%',
    height: '40%',
    position: 'relative'
  };

export class Container extends React.Component {
  render() {
    return (
      <div className = 'gmap'>  
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{lat: -1.2884, lng: 36.8233}}
        />
      </div>
    );
  }
}
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEV-j4cFhASHoRyGssoC8O2YV93LYbNOk'
  })

(Container);