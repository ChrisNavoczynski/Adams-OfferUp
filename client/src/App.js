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

/* //Created by Chis Navoczynski
//AD320- TeamAdams 

import ItemPageHeader from './itemPage_components/item_header'
import ItemPageSelection from './itemPage_components/selectItem'

function App() {
  return (
    <div>
        <ItemPageHeader/>
        <ItemPageSelection/>

    </div>
  );
}

export default App; */