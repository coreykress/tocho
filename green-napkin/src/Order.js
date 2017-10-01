import React, { Component } from 'react';
import './App.css';
import './Order.css';
import DeliveryForm from './DeliveryForm';
import PickupForm from './PickupForm';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelivery: false,
        }
        this.setDelivery = this.setDelivery.bind(this);
        this.setPickup = this.setPickup.bind(this);
        window.scrollTo(0, 0);
    }

    handleChange() {
        return;
    }

    setDelivery() {
        this.setState({showDelivery: true});
    }

    setPickup () {
        this.setState({showDelivery: false});
    }

    showForm() {
        if (this.state.showDelivery) {
            return (<DeliveryForm />);
        }

        return (<PickupForm />);
    }

  render() {
    return (
      <div className="Order">
        <h1 className="main-text">Place your order</h1>
        <div className="order-delivery-choice-buttons">
            <div className="order-delivery-true select-button" onClick={this.setDelivery}>DELIVERY</div>
            <div className="order-delivery-false select-button" onClick={this.setPickup}>PICK-UP</div>
        </div>

          <div className="order-form-container">
              <div className="order-delivery-form">
                {this.showForm()}
              </div>
          </div>
      </div>
    );
  }
}

export default Order;
