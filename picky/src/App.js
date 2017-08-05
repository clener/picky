import React, { Component } from 'react';
import bag from './bag.png';
import EntryScreen from './Components/EntryScreen';
import './App.css';

var RouteHandler = require('react-router').RouteHandler;  

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Front-page">
          <div className="App-header">
            <img src={bag} className="App-logo" alt="logo" />
            <h2>Welcome to Picky</h2>
          </div>
          <EntryScreen />
        </div>
      </div>
    );
  }
}

export default App;
