import React, { Component } from 'react';
import background from './speckle-backgroud.png';
import { withRouter } from 'react-router-dom';
import './App.css';
import Main from './Main';
import { Redirect } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            redirect: false,
        };
        this.redirectHome = this.redirectHome.bind(this);
    }

    redirectHome () {
        window.location = '/';
    }

  render() {

    return (
      <div className="App">
        <header className="App-header tan blue-text">
          <img className="app-logo-icon" src={process.env.PUBLIC_URL + '/tochologo.png'} onClick={ this.redirectHome }/>
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
