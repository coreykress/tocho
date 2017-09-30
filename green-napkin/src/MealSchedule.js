import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Meal from './Meal';
import MealList from './MealList';
import './App.css';

class MealSchedule extends Component {
    constructor(props) {
        super(props);
    }

      render() {
        return (
            <div>
              <Switch>
                <Route exact path='/meals' component={MealList}/>
                <Route exact path='/meals/:number' component={Meal}/>
              </Switch>
             </div>
        );
      }
}

export default MealSchedule;
