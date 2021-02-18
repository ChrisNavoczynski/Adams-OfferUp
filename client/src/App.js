// AD320- TeamAdams
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import './App.css';
import ItemRow from './components/ItemRow/ItemRow';
import Header from './components/Header/Header';
import ItemPage from './components/ItemPage/ItemPage';
import HelpPage from './components/HelpPage/helpPage';
import ContactSeller from './components/ContactSeller/ContactSeller';
// import LoginModal from './components/LoginModal/logIn';
// import Register from './components/Register/register';
import MessageUser from './components/MessageUser/MessageUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/product/:id">
            <ItemPage />
          </Route>
          <Route path="/helppage">
            <HelpPage />
          </Route>
          <Route path="/messageuser">
            <MessageUser />
          </Route>
          <Route path="/contactseller">
            {/** this will have to be set up from item page
            and from seller page with appropriate props being fed,
            this form opens a new tab which we probably don't want*/}
            <ContactSeller />
          </Route>
          <Route path="/login">
            {/** login component */}
            {/** <LoginModal /> */}
          </Route>
          <Route path="/signup">
            {/** signup component */}
            {/** <Register /> */}
          </Route>
          <Route exact path="/">
            {/** this will be replaced by a component with random items */}
            <ItemRow />
            <ItemRow />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
