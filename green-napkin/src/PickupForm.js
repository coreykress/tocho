import React, { Component } from 'react';
import './App.css';
import './Form.css';

class PickupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
            exp_month: null,
            exp_year: null,
            cvc: null,
            token: null,
        };
    }

    render() {
        return (
            <div className="pick-up-form-container">
                <h3 className="main-text">Pickup</h3>
                <div className="form-body yellow">
                    <form>
                    <h4 className="main-text">Name:</h4>
                        <input type="text" value="Name"/>
                    <h4 className="main-text">Phone:</h4>
                        <input type="tel" />
                    <h4 className="main-text">Order Now!</h4>
                        <input type="submit" value="Order"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default PickupForm;
