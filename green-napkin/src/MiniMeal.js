import React, { Component } from 'react';
import './App.css';
import './Home.css';
import './MiniMeal.css';

class MiniMeal extends Component {
    constructor(props) {
        super(props);
    }

    getImageSrc() {
        return <img src={process.env.PUBLIC_URL + '/images/' + this.props.photo} />;
    }

    render() {
        return (
            <div className="mini-meal-container">
                <div className="mini-meal-photo">
                    { this.getImageSrc() }
                </div>
                <div className="mini-meal-info body-text">
                    <span> {this.props.name} </span>
                </div>
                <div className="button-container">
                    <div>
                        <div className="mini-go-to-button orange body-text">SEE RECIPIE</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiniMeal;
