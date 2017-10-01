import React, { Component } from 'react';
import './App.css';
import './Meal.css';
import MealApi from './test/MealApi';
import { Link } from 'react-router-dom';

class Meal extends Component {
    constructor(props) {
        super(props);
         window.scrollTo(0, 0);

        this.state = {
                number: 1,
                name: "Seared Barramundi & Sushi Rice",
                time: "30 - 40 mins",
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
                    "In a small pot, combine the rice, garlic, white bottoms of the scallions, a big pinch of salt, and 1 cup of water; heat to boiling on high. Once boiling, cover and reduce the heat to low. Cook 15 to 17 minutes, or until the water has been absorbed and the rice is tender. Turn off the heat and fluff the cooked rice with a fork. Stir in the mirin; season with salt and pepper to taste.",
                    "While the rice cooks, place the broccoli on a sheet pan. Drizzle with olive oil and season with salt and pepper. Toss to coat. Arrange in a single layer. Roast 13 to 15 minutes, or until browned and tender when pierced with a fork. Remove from the oven. Top with half the sesame oil; carefully stir to coat. Season with salt and pepper to taste. Set aside in a warm place.",
                    "While the broccoli roasts, pit and peel the avocado; cut lengthwise into ½-inch-thick pieces. To make the batter, in a large bowl, whisk together the tempura mix and ¼ cup of cold water until smooth; season with salt and pepper. In a medium pan (nonstick, if you have one), heat a thin layer of oil on medium-high until hot. Once the oil is hot enough that a drop of batter sizzles immediately when added to the pan, thoroughly coat the avocado in the batter (letting any excess drip off); carefully add to the pan. Cook 2 to 4 minutes per side, or until lightly browned and crispy. Transfer to a paper towel-lined plate; immediately season with salt. Drain off and discard any excess oil from the pan. Wipe out the pan.",
                    "Pat the barramundi fillets dry with paper towels; season with salt and pepper on both sides. In the same pan, heat 2 teaspoons of olive oil on medium-high until hot. Add the seasoned fillets, skin side down, and cook 3 to 5 minutes on the first side, or until the skin is lightly browned and crispy. Flip and cook 2 to 3 minutes, or until lightly browned and cooked through. Turn off the heat.",
                    "While the barramundi cooks, in a bowl, whisk together the ponzu sauce, remaining sesame oil, the juice of 2 lime wedges, and as much of the sambal oelek as you’d like, depending on how spicy you’d like the dish to be. Divide the cooked rice, roasted broccoli, avocado tempura, and cooked barramundi fillets between 2 dishes. Garnish with the green tops of the scallions. Serve with the sauce and remaining lime wedges on the side. Enjoy!",
                ],
                photo: "925_2PF_Seared-Barramundi_82818_WEB_SQ_main_square_2x.jpg",
                photoIngredients: "ingredients.jpg",
                servings: 2,
            };
    }

    listInstructions() {
        return (
            <ol className="meal-list meal-instructions-list yellow">
                {this.state.recipie.map(function (item, i) {
                    var classId = i % 2 === 0 ? 'ev-shade body-text' : 'od-shade body-text';
                    return <li key={i} className={classId} >{item}</li>
                })}
            </ol>);
    }

    listIngredients() {
        return (
            <ol className="meal-list meal-ingredients-list">
                { this.state.ingredients.map(function (item, i) {
                    var unit = "";
                    if (item.unit.length) {
                        unit = "(" + item.unit + ")";
                    }
                    return <li key={i} className='body-text' >{item.name} - {item.quantity} {unit}</li>
                }.bind(this)) }
            </ol>);
    }

    onServingChange(event) {
        this.setState({quantity: event.target.value});
    }

    getImageSrc() {
        return <img className="meal-photo" src={process.env.PUBLIC_URL + '/images/' + this.state.photo} />;
    }

    getIngredientImage() {
        return <img className="ingredient-photo" src={process.env.PUBLIC_URL + '/' + this.state.photoIngredients} />;
    }

    render() {
        return (
          <div className="meal-container">
          <div className="meal-photo-info">
              <div className="meal-primary-info yellow">
                <div className="meal-info">
                    <div className="meal-title">
                        <h1 className="main-text">{ this.state.name }</h1>
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

                        <div className="button-container-container">
                            <div className="button-container orange">
                                <Link className="meal-button-text body-text" to={'/order'}>ORDER NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meal-photo">
                    { this.getImageSrc() }
                </div>
            </div>
            </div>
                            <h3 className="section-header main-text">Ingredients</h3>

            <div className="meal-ingredients">
                    {this.getIngredientImage()}
            </div>
            <div className="meal-instructions main-text">
                <h3 className="section-header">Instructions</h3>
                { this.listInstructions() }
            </div>
          </div>
        );
    }
}

export default Meal;
