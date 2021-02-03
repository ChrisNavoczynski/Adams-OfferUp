//AD320- TeamAdams
//UI Prototypes

import React, { Component } from 'react';
import './App.css';
import ItemRow from './ItemRow/ItemRow';
import Logo from './Logo/Logo';
import ItemPage from './ItemPage/ItemPage';
import LoginModal from './LoginModal/logIn'
 
class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
          <hr/>
          <hr/>
          <ItemRow/>
          <ItemRow/>
          <ItemRow/>  
          <hr/>
          <hr/>
          <ItemPage/>
          <hr/>
          <hr/>
          <LoginModal/>

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