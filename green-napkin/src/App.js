import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Green Napkin</h1>
          <button className="App-Login">Login</button>
        </header>
        <div className="App-body">
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
