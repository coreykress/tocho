import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import MealSchedule from './MealSchedule';
import Meal from './Meal';
import Order from './Order';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/meals' component={MealSchedule}/>
          <Route path='/meals/:number' component={Meal} />
          <Route exact path='/order' component={Order}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
