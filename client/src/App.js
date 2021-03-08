// AD320- TeamAdams
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import ItemRow from './components/ItemRow/ItemRow';
import Header from './components/Header/Header';
import ItemPage from './components/ItemPage/ItemPage';
import HelpPage from './components/HelpPage/helpPage';
import Loading from './components/Loading/Loading';
import MessageUser from './components/MessageUser/MessageUser';
import ThreadList from './components/ThreadList/ThreadList';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
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
          <Route path="/helppage">
            <HelpPage />
          </Route>
          <Route path="/threadlist">
            <ThreadList />
          </Route>
          <Route path="/messageuser">
            <MessageUser />
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
