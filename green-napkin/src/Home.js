import React, { Component } from 'react';
import logo from './logo.svg';
import MealBanner from './MealBanner';
import MiniMeal from './MiniMeal';
import './App.css';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-banner">
                    <span>What is Tonight&#39;s Choice?</span>
                    <h3>Fresh meal ingredients prepared for you, every day</h3>
                </div>
                <div className="home-today-meal">
                    <h2 className="left-title-text">Tonight&#39;s Choice</h2>
                    <MealBanner />
                </div>
                <h3>Upcoming Meals</h3>
                <div className="home-upcoming-meals">
                    <MiniMeal
                        photo="925_2PP_Half-Chicken_82663_WEB_SQ_main_square_2x.jpg"
                        name="Roasted Chicken with Goat Cheese Mashed Potatoes"
                        />
                    <MiniMeal
                        photo="1002_2PM_Beef_Medallions_89152_WEB_SQ_main_square_2x.jpg"
                        name="Beef Medallions with Mashed Potatoes & Balsamic Pan Sauce"
                        />
                    <MiniMeal
                        photo="1002_2PRE08_Beef-Bolognese_89134_WEB_SQ_main_square_2x.jpg"
                        name="Penne Pasta & Beef Bolognese"
                        />
                </div>
                </div>
            );
    }
}

export default Home;
