import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <div className="App">
      {/* Step 1 */}
      <Router >
        {/* Header is above switch so it appears on every page
        < Header /> */}
        <Switch>

          <Route exact path="/">
            <LoginPage />
          </Route>

          <ProtectedRoute path="/main">
            < MainPage />
          </ ProtectedRoute>

          {/* <Route path="/profile">
            <ProfilePage />
          </Route> */}

          <Route path="/register">
            <RegisterPage />
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
