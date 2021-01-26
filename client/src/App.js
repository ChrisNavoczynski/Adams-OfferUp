//AD320- TeamAdams
//Courtney Hoppus - UI Prototypes

import React, { Component } from 'react';
import './App.css';
import ItemRow from './ItemRow/ItemRow';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
          <hr/>
          <SearchBar/ >
          <hr/>
          <ItemRow/>
          <ItemRow/>
          <ItemRow/>
      </div>
    );
  }
}

export default App;
