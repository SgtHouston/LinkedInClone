import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Ad from './components/Ad';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
// import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <Ad />
      <div className="app__body" >
        
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
      
    </div>
  );
}

export default App;
