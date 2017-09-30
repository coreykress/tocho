import React, { Component } from 'react';
import './App.css';
import './Meal.css';
import MealApi from './test/MealApi';

class Meal extends Component {
    constructor(props) {
        super(props);

        this.state = {
                number: 1,
                name: "Seared Barramundi & Sushi Rice",
                time: "30 mins",
                description: "Hearty barramundi fillets are accompanied by roasted broccoli, sticky sushi rice, and—for crispy and creamy textures in every bite—tempura-fried avocado. When drizzled on top, a sauce of citrusy ponzu, sesame oil, and spicy sambal ties it all deliciously together.",
                ingredients: [
                    {
                        name: "Skin-on Barramundi Fillets",
                        quantity: 2,
                        unit: "",
                    },
                    {
                        name: "Sushi Rice",
                        quantity: 2,
                        unit: "cups",
                    },
                    {
                        name: "Garlic",
                        quantity: 2,
                        unit: "Cloves"
                    },
                    {
                        name: "Scallions",
                        quantity: 2,
                        unit: "",
                    },
                    {
                        name: "Avocado",
                        quantity: 1,
                        unit: "",
                    },
                    {
                        name: "Lime",
                        quantity: 1,
                        unit: "",
                    },
                    {
                        name: "Broccoli",
                        quantity: .5,
                        unit: "lbs",
                    },
                ],
                recipie: [
                    "Preheat the oven to 475°F. Wash and dry the fresh produce. Peel and roughly chop the garlic. Cut off and discard the root ends of the scallions; thinly slice, separating the white bottoms and green tops. Cut off and discard the bottom ½ inch of the broccoli stem. Cut the broccoli into small pieces. Quarter the lime.",
                    "Preheat the oven to 475°F. Wash and dry the fresh produce. Peel and roughly chop the garlic. Cut off and discard the root ends of the scallions; thinly slice, separating the white bottoms and green tops. Cut off and discard the bottom ½ inch of the broccoli stem. Cut the broccoli into small pieces. Quarter the lime.",
                    "Preheat the oven to 475°F. Wash and dry the fresh produce. Peel and roughly chop the garlic. Cut off and discard the root ends of the scallions; thinly slice, separating the white bottoms and green tops. Cut off and discard the bottom ½ inch of the broccoli stem. Cut the broccoli into small pieces. Quarter the lime.",
                    "Preheat the oven to 475°F. Wash and dry the fresh produce. Peel and roughly chop the garlic. Cut off and discard the root ends of the scallions; thinly slice, separating the white bottoms and green tops. Cut off and discard the bottom ½ inch of the broccoli stem. Cut the broccoli into small pieces. Quarter the lime.",
                    "Preheat the oven to 475°F. Wash and dry the fresh produce. Peel and roughly chop the garlic. Cut off and discard the root ends of the scallions; thinly slice, separating the white bottoms and green tops. Cut off and discard the bottom ½ inch of the broccoli stem. Cut the broccoli into small pieces. Quarter the lime.",
                ],
                photo: "925_2PF_Seared-Barramundi_82818_WEB_SQ_main_square_2x.jpg",
                servings: 2,
            };
    }

    listInstructions() {
        return (
            <ol className="meal-list meal-instructions-list">
                {this.state.recipie.map(function (item, i) {
                    var classId = i % 2 === 0 ? 'ev-shade' : 'od-shade';
                    return <li key={i} className={classId} >{item}</li>
                })}
            </ol>);
    }

    listIngredients() {
        return (
            <ul className="meal-list meal-ingredients-list">
                { this.state.ingredients.map(function (item, i) {
                    return <li key={i} >{item.name} - {item.quantity * this.state.servings}</li>
                }.bind(this)) }
            </ul>);
    }

    onServingChange(event) {
        this.setState({quantity: event.target.value});
    }

    getImageSrc() {
        return <img src={process.env.PUBLIC_URL + '/images/' + this.state.photo} />;
    }

    render() {
        return (
          <div className="meal-container">
            <div className="meal-info">
                <div className="meal-title">
                    <h1>{ this.state.name }</h1>
                    <p>{ this.state.time }</p>
                    <p className="meal-description-text">{ this.state.description }</p>
                </div>
                <div className="meal-select">
                    <div className="meal-quantities-selector">
                    <span>Servings: </span>
                    <select onChange={this.onServingChange.bind(this)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    </div>

                    <div className="meal-order-button">
                        ORDER NOW
                    </div>
                </div>
            </div>

            <div className="meal-photo">
                { this.getImageSrc() }
            </div>
            <div className="meal-ingredients">
                <h3 className="section-header">Ingredients</h3>
                { this.listIngredients() }
            </div>
            <div className="meal-instructions">
                <h3 className="selection-header">Instructions</h3>
                { this.listInstructions() }
            </div>
          </div>
        );
    }
}

export default Meal;
