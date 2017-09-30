import React, { Component } from 'react';
import './App.css';
import './Home.css';
import './MealBanner.css';
import { Link } from 'react-router-dom'


class MealBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            name: "Seared Barramundi & Sushi Rice",
            description: "Hearty barramundi fillets are accompanied by roasted broccoli, sticky sushi rice, and—for crispy and creamy textures in every bite—tempura-fried avocado. When drizzled on top, a sauce of citrusy ponzu, sesame oil, and spicy sambal ties it all deliciously together.",
            photo: "925_2PF_Seared-Barramundi_82818_WEB_SQ_main_square_2x.jpg",

        };
    }

    getImageSrc() {
        return <img src={process.env.PUBLIC_URL + '/images/' + this.state.photo} />;
    }

    render() {
        return (
            <div className="meal-banner-container">
                <div className="meal-banner-photo">
                    { this.getImageSrc() }
                </div>
                <div className="meal-banner-info">
                    <h3> {this.state.name} </h3>
                    <p> {this.state.description} </p>
                    <div className="button-container">
                        <Link to={'meals/1'}>TEST</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MealBanner;
