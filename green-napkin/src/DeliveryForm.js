import React, { Component } from 'react';
import './App.css';

class DeliveryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            name: "",
            expiry: "",
            cvc: "",
            focused: "false",

        };
    }

    render() {
        return (
            <div className="delivery-form-container">
                <h3 className="main-text">Delivery</h3>

            </div>
        );
    }
}

export default DeliveryForm;
