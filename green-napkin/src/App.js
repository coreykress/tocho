import React, { Component } from 'react';
import background from './speckle-backgroud.png';
import './App.css';
import Main from './Main';

class App extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header tan blue-text">
          <img className="app-logo-icon" src={process.env.PUBLIC_URL + '/tochologo.png'} />
          <div className="app-login body-text blue"><p>Login</p></div>
        </header>

        <div className="App-body">
            <Main />
        </div>
      </div>
    );
  }
}

export default App;
