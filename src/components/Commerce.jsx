/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import StorePage from "./StorePage/StorePage.jsx";
// import LogIn from './LogIn/LogIn.jsx';
import Cart from "./Cart/Cart.jsx";
import Shipping from "./Shipping/Shipping.jsx";
import Payment from "./Payment/Payment.jsx";
import Confirmation from "./Confirmation/Confirmation.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Contact from "./Contact/Contact.jsx";
import HomePage from "./Sections/HomePage.jsx";
import cartImage from "./Images/cartWhite.png";
import Reviews from "./Sections/Reviews.jsx";
import Footer from "./Sections/Footer.jsx";
import { products } from "../utils/Products.js";

class Commerce extends React.Component {
  constructor() {
    super();
    this.state = {
      finalDiscount: 0,
      userLoggedIn: true,
      stateNumber: 1,
      users: [{ email: "dummyEmail@123.com", password: "Qwertasd123!" }],
      cartItems: [],
      shippingCost: 5,
      totalCost: 0,
      cardInfo: {
        number: "",
        expiry: "",
        name: "",
        cvv: "",
      },
      shippingAddress: {
        address: "",
        city: "",
        state: "",
        zipCode: "",
      },
      storeItems: products,
      finalCost: 0,
    };
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  successLogIn = () => {
    this.setState({
      userLoggedIn: true,
    });
  };

  addProducts = (products) => {
    this.setState({ storeItems: products });
  };

  updateShipping = (field, val) => {
    this.setState({ [field]: val });
  };

  updateStateNumber = (newState) => {
    this.setState({ stateNumber: newState });
  };

  updateCartTotal = (val) => {
    this.setState({ totalCost: val });
  };

  addUser = (userEmail, userPassword) => {
    let newUser = { email: userEmail, password: userPassword };
    this.setState({
      users: [...this.state.users, newUser],
      userLoggedIn: true,
    });
  };

  addCard = (num, exp, secCode, holderName, four) => {
    let newCard = {
      number: num,
      expiry: exp,
      name: holderName,
      cvv: secCode,
      lastFour: four,
    };
    this.setState({ cardInfo: newCard });
  };

  updateCart = (action, itemId, value) => {

    // Destructure current state to make the code cleaner
    const { storeItems, cartItems, totalCost } = this.state;

    // Initialize new state variables to avoid directly mutating state
    let updatedCartItems = [...cartItems];
    let updatedTotalCost = totalCost;

    // Find the item in the store by its ID
    const storeItemIndex = storeItems.findIndex((item) => item.id === itemId);
    const cartItemIndex = updatedCartItems.findIndex((item) => item.id === itemId);

    if (storeItemIndex !== -1) {
      const itemInStore = storeItems[storeItemIndex];

      if (action === "add" && !itemInStore.addedToCart) {
        // Add item to cart
        updatedCartItems.push({ ...itemInStore, quantity: 1 });
        updatedTotalCost += itemInStore.price;
        // Update the item in store to mark it as added to cart
        storeItems[storeItemIndex] = { ...itemInStore, addedToCart: true };
      } else if (action === "remove" && cartItemIndex !== -1) {
        // Remove item from cart
        updatedTotalCost -=
          updatedCartItems[cartItemIndex].price * updatedCartItems[cartItemIndex].quantity;
        // Remove from cartItems array
        updatedCartItems = updatedCartItems.filter((item) => item.id !== itemId);
        // Update the item in store to mark it as not added to cart
        storeItems[storeItemIndex] = { ...itemInStore, addedToCart: false };
      } else if (action === "quantity" && cartItemIndex !== -1) {
        // Update the quantity of an item in the cart
        const updatedItem = { ...updatedCartItems[cartItemIndex], quantity: value };
        updatedTotalCost += (value - updatedCartItems[cartItemIndex].quantity) * updatedItem.price;
        // Replace the item in cart with the updated one
        updatedCartItems[cartItemIndex] = updatedItem;
      }

      // Update the state with the modified cart and cost
      this.setState({
        cartItems: updatedCartItems,
        totalCost: updatedTotalCost,
        storeItems, // Update storeItems to reflect changes to `addedToCart`
      });
    }
  };

  checkCart = (e) => {
    if (!this.state.userLoggedIn) {
      this.updateStateNumber(2);
    } else {
      this.updateStateNumber(3);
    }
  };

  addReqField = (field, value, itemId) => {
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].id === itemId) {
        this.state.cartItems[i].requiredCustomized[field] = value;
      }
    }
  };

  render() {
    let cartDiv = (
      <div className="cart-store-display" onClick={(e) => this.checkCart(e)}>
        <span className="cart-item-img">
          <img src={cartImage} alt="cart" width="23" />
        </span>
        <span className="cart-item-tag">{this.state.cartItems.length} Item(s)</span>
        <span className="cart-item-cost">${this.state.totalCost}.00</span>
      </div>
    );

    let subPage;
    if (this.state.stateNumber === 1) {
      subPage = (
        <div className="store-view">
          <div>{cartDiv}</div>
          <HomePage />
          <div id="products">
            <StorePage
              data={this.state}
              addProducts={this.addProducts}
              updateCart={this.updateCart}
              viewPage={this.updateStateNumber}
              userLoggedIn={this.state.userLoggedIn}
            />
          </div>
          <Contact />
          <Reviews />
        </div>
      );
    } else if (this.state.stateNumber === 3) {
      subPage = (
        <div className="cart-view">
          <Cart
            data={this.state}
            viewPage={this.updateStateNumber}
            updateCart={this.updateCart}
            updateState={this.updateState}
            addReqField={this.addReqField}
          />
        </div>
      );
    } else if (this.state.stateNumber === 4) {
      subPage = (
        <div className="shipping-view">
          <Shipping
            data={this.state}
            viewPage={this.updateStateNumber}
            updateShipping={this.updateShipping}
          />
        </div>
      );
    } else if (this.state.stateNumber === 5) {
      subPage = (
        <div className="payment-view">
          <Payment
            data={this.state}
            viewPage={this.updateStateNumber}
            updateState={this.updateState}
          />
        </div>
      );
    } else if (this.state.stateNumber === 6) {
      subPage = (
        <div className="confirm-view">
          <Confirmation data={this.state} viewPage={this.updateStateNumber} />
        </div>
      );
    }
    return (
      <div className="main-store-page">
        <div className="site-header">
          <Navbar stateNumber={this.state.stateNumber} />
        </div>
        <div style={{ marginTop: "100px" }}>{subPage}</div>
        <Footer />
      </div>
    );
  }
}

export default Commerce;
