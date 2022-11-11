/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import StorePage from './StorePage/StorePage.jsx';
// import LogIn from './LogIn/LogIn.jsx';
import Cart from './Cart/Cart.jsx';
import Shipping from './Shipping/Shipping.jsx'
import Payment from './Payment/Payment.jsx';
import Confirmation from './Confirmation/Confirmation.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Contact from './Contact/Contact.jsx';
import HomePage from './Sections/HomePage.jsx';
import cartImage from './Images/cartWhite.png';
import Reviews from './Sections/Reviews.jsx';
import Footer from './Sections/Footer.jsx';

class Commerce extends React.Component{

  constructor(){
    super();
    this.state = {
      finalDiscount: 0,
      userLoggedIn: true,
      stateNumber: 1,
      users: [
        {email: 'dummyEmail@123.com', password: 'Qwertasd123!'}
      ],
      cartItems: [],
      shippingCost: 5,
      totalCost: 0,
      cardInfo: {
        number: '',
        expiry: '',
        name: '',
        cvv: ''
      },
      shippingAddress: {
        address: '',
        city: '',
        state: '',
        zipCode: ''
      },
      storeItems: [],
      finalCost: 0
    }
  }

  updateState = (field, value) => {
    this.setState({[field]: value});
  }

  successLogIn = () => {
    this.setState({
      userLoggedIn: true
    })
  }

  addProducts = (products) => {
    this.setState({storeItems: products})
  }

  updateShipping = (field, val) => {
    this.setState({[field]: val});
  }

  updateStateNumber = (newState) =>{
    this.setState({stateNumber: newState});
  }

  updateCartTotal = (val) => {
    this.setState({totalCost: val});
  }

  addUser = (userEmail, userPassword) =>{
    let newUser = {email: userEmail, password: userPassword}
    this.setState({
      users: [...this.state.users, newUser],
      userLoggedIn: true
    })
  }

  addCard = (num, exp, secCode, holderName, four) => {
    let newCard = {
      number: num,
      expiry: exp,
      name: holderName,
      cvv: secCode,
      lastFour: four
    }
    this.setState({cardInfo: newCard})
  }

  updateCart = (action, item, value) =>{
    for(let i=0; i<this.state.storeItems.length; i++){
      if(this.state.storeItems[i].id === item){
        if(action === 'add'){
          this.setState({
            cartItems: [...this.state.cartItems, this.state.storeItems[i]],
            totalCost: this.state.totalCost + this.state.storeItems[i].price})
          this.state.storeItems[i].addedToCart = true;
        }
      }
    }
    for(let i=0; i<this.state.cartItems.length; i++){
      if(this.state.cartItems[i].id === item){
        if(action === 'remove') {
          this.state.cartItems[i].addedToCart = false;
          this.setState({cartItems: this.state.cartItems.filter(function(value, index, arr){
            return value.id !== item;
          }),
            totalCost: this.state.totalCost - (this.state.cartItems[i].price*this.state.cartItems[i].quantity)
          })
        } else if(action === 'quantity'){
          this.state.cartItems[i].quantity = value;
          this.setState({totalCost: this.state.totalCost - this.state.cartItems[i].price + (this.state.cartItems[i].price*this.state.cartItems[i].quantity)})
        }
      }
    }
  }

  checkCart = (e) => {
    if(!this.state.userLoggedIn){
      this.updateStateNumber(2);
    }else{
      this.updateStateNumber(3);
    }
  }

  addReqField = (field, value, itemId) =>{
    for(let i=0; i<this.state.cartItems.length; i++){
      if(this.state.cartItems[i].id === itemId){
        this.state.cartItems[i].requiredCustomized[field] = value;
      }
    }
  }


  render(){
    let cartDiv = <div className='cart-store-display' onClick={(e)=>this.checkCart(e)}>
      <span className='cart-item-img'>
        <img src={cartImage} alt='cart' width="23" />
      </span>
      <span className='cart-item-tag'>{this.state.cartItems.length} Item(s)</span>
      <span className='cart-item-cost'>${this.state.totalCost}.00</span>
    </div>;

    let subPage;
    if (this.state.stateNumber===1){
      subPage = <div className='store-view'>
        <div>{cartDiv}</div>
        <HomePage />
        <div id='products'> 
          <StorePage data={this.state} addProducts={this.addProducts} updateCart={this.updateCart} viewPage={this.updateStateNumber} userLoggedIn={this.state.userLoggedIn}/>
        </div>
        <Contact />
        <Reviews />
      </div>
    }else if (this.state.stateNumber===3){
      subPage = <div className='cart-view'>
        <Cart data={this.state} viewPage={this.updateStateNumber} updateCart={this.updateCart} updateState={this.updateState} addReqField={this.addReqField}/>
      </div>
    } else if (this.state.stateNumber===4){
      subPage = <div className='shipping-view'>
        <Shipping data={this.state} viewPage={this.updateStateNumber} updateShipping={this.updateShipping}/>
      </div>
    } else if (this.state.stateNumber===5){
      subPage = <div className='payment-view'>
        <Payment data={this.state} viewPage={this.updateStateNumber} updateState={this.updateState}/>
      </div>
    }else if (this.state.stateNumber===6){
      subPage = <div className='confirm-view'>
        <Confirmation data={this.state} viewPage={this.updateStateNumber}/>
      </div>
    }
    return(
      <div className='main-store-page'>
        <div className='site-header'>
          <Navbar stateNumber={this.state.stateNumber}/>
        </div>
        <div style={{marginTop: "100px"}}>{subPage}</div>
        <Footer />
      </div>

    )
  }
}

export default Commerce;
