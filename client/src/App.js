// AD320- TeamAdams
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ItemRow from './components/ItemRow/ItemRow';
import Header from './components/Header/Header';
import ItemPage from './components/ItemPage/ItemPage';
import MessageUser from './components/MessageUser/MessageUser';
import ConversationList from './components/ThreadList/ConversationList';
import FileUploader from './components/UploadUtilities/FileUploader';
import ProductUser from './components/ProductUser/ProductUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/product/:id">
            <ItemPage />
          </Route>
          <Route path="/productuser">
            <ProductUser />
          </Route>
          <Route path="/conversation">
            <ConversationList />
          </Route>
          <Route path="/fileupload">
            <FileUploader />
          </Route>
          <Route path="/messageuser">
            <MessageUser />
          </Route>
          <Route path="/login" />
          <Route path="/signup" />
          <Route exact path="/">
            <ItemRow />
            <ItemRow />
            <ItemRow />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
