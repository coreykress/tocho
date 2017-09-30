import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tonight&#39;s Choice</h1>
          <button className="App-Login">Login</button>
        </header>

        <div className="App-body">
            <Main />
        </div>
      </div>
    );
  }
}

export default App;
