import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <br/>
      <h4 className="ad"><a href="https://digitalcrafts.com">Web Development 100% Online - </a><a className="adblack" href="https://digitalcrafts.com" >Launch your career in development @DigitalCrafts bootcamp.  No degree required</a></h4>
      <br/>

      {/* App Body */}
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
