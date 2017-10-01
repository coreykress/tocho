import React, { Component } from 'react';
import './App.css';
import './DrawingContainer.css';

class DrawingContainer extends Component {
    constructor(props) {
        super(props);
    }

getImageSrc() {
    return <img src={process.env.PUBLIC_URL + '/' + this.props.photo} />;
}

    render() {
        return (
            <div className="drawing-container-container">
                { this.getImageSrc() }
                <p className="main-text blue-text">{this.props.text}</p>
            </div>
        );
    }
}

export default DrawingContainer;
