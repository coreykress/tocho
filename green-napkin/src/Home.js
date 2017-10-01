import React, { Component } from 'react';
import MealBanner from './MealBanner';
import MiniMeal from './MiniMeal';
import DrawingContainer from './DrawingContainer';
import './App.css';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-banner background-quiche">
                    <img className="home-banner-image" src={process.env.PUBLIC_URL + '/pasta.jpg'} />
                    <div className="home-banner-text-container">
                        <h3 className="home-banner-text body-text"><span>Fresh meal ingredients </span></h3>
                        <h3 className="home-banner-text body-text"><span>prepared for you, every day</span></h3>
                    </div>
                </div>
                <div className="home-drawing-banner">
                    <img src={process.env.PUBLIC_URL + '/tocho_draw_line-01.png'} />
                </div>
                <div className="home-today-meal">
                    <h2 className="left-title-text main-text">Tonight&#39;s Choice</h2>
                    <MealBanner />
                </div>
                <h3 className="home-upcoming-meals-text body-text">Upcoming Meals</h3>
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
