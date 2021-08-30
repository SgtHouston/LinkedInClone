import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main';

import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      {/* Step 1 */}
      <Router >
        {/* Header is above switch so it appears on every page
        < Header /> */}
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/main">
            < Main />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>


          <Route path="*">
            <Redirect to="/">
            {/* Redirect to homepage like so or leave an h1 page not found and a Link to return to homepage */}
            </Redirect>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
