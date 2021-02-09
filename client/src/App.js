//AD320- TeamAdams
import React, { Component } from 'react';
import './App.css';
import ItemRow from './components/ItemRow/ItemRow';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import ItemPage from './components/ItemPage/ItemPage';
import LoginModal from './components/LoginModal/logIn'
 
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
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

