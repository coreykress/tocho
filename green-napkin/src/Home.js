import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="Home">
        <div className="home-banner"></div>
        <div className="home-today-meal"></div>
        <div className="home-upcoming-meals"></div>
      </div>
    );
  }
}

export default Home;
