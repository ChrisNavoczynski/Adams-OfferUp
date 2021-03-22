// AD320- TeamAdams
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ItemRow from './components/ItemRow/ItemRow';
import Header from './components/Header/Header';
import ItemPage from './components/ItemPage/ItemPage';
// import LoginModal from './components/LoginModal/logIn';
// import Register from './components/Register/register';
import MessageUser from './components/MessageUser/MessageUser';
import ConversationList from './components/ThreadList/ConversationList';
import FileUploader from './components/UploadUtilities/FileUploader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/product/:id">
            <ItemPage />
          </Route>
          <Route path="/thread/:id">
            {/** individual message thread */}
          </Route>
          <Route path="/profile">
            {/** user profile */}
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
          <Route path="/login">
            {/** login component */}
            {/** <LoginModal /> */}
          </Route>
          <Route path="/signup">
            {/** signup component */}
            {/** <SignUp /> */}
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
