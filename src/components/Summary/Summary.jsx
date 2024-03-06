import React from 'react';
import './Summary.css'

class Summary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cartSubTotal: 0,
      shippingCost: 0,
      discount: 0,
      taxAmount: 0,
      finalCost: 0,
      codeEntered: ''
    }
  }

  setCurrentTotal = () => {
    let currentTotal = 0;
    let cartItem = this.props.data.cartItems
    if (cartItem.length > 0){
      for(let i = 0; i < cartItem.length; i++){
        currentTotal += cartItem[i].price * cartItem[i].quantity;
      }
    }
    this.state.cartSubTotal = currentTotal; //not good practice but this.setState({cartSubTotal: currentTotal}) was not working
    this.setFinalCost();
  }

  setFinalCost = () => {
    let currentFinal = this.state.cartSubTotal + this.props.data.shippingCost - this.props.data.finalDiscount;
    let tax = Math.round(100*(this.state.cartSubTotal*0.0875))/100;
    this.setState({
      finalCost: (currentFinal + tax).toFixed(2),
      taxAmount: tax,
    })
    if(this.props.data.stateNumber === 5){
      this.props.updateCommerce('finalCost', (currentFinal + tax).toFixed(2));
    }
  }

  componentDidMount(){
    if(this.props.data.stateNumber > 3){
      this.setState({
        shippingCost: this.props.data.shippingCost,
        discount: this.props.data.finalDiscount
      })
    }
    this.setCurrentTotal();
  }

  componentDidUpdate(prevProps) {
    let oldCart = prevProps.data.cartItems;
    let newCart = this.props.data.cartItems;
    if (newCart.length  !== oldCart.length) {
      this.setCurrentTotal();
    }
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].quantity !== oldCart[i].quantity){
        this.setCurrentTotal();
      }
    }
  }

  handleCancelBtn = (e) => {
    this.props.viewPage(1);
  }

  handleShippingBtn = (e) => {
    this.props.updateState('codeEntered', this.state.codeEntered);
    this.props.viewPage(4);
  }

  handlePaymentBtn = (e) => {
    this.props.updateShipping('shippingCost', this.props.shippingCost);
    this.props.viewPage(5);
  }

  handleConfirmBtn = (e) => {
    this.props.viewPage(6);
  }

  handleInputChange = (e) =>{
    this.setState({codeEntered: e.target.value})
  }

  handleInputClick = (e) => {
    let discountAmount =  0; 
    if(this.state.codeEntered === '20OFF'){
      discountAmount = 20;
    } else if (this.state.codeEntered === 'SAVE10'){
      discountAmount = Math.round(100*(this.state.cartSubTotal * 0.10))/100;
    }
    this.setState({discount:discountAmount });
    this.props.updateState('finalDiscount', discountAmount);
  }

  render(){
    let btn;
    if(this.props.data.stateNumber === 3){
      if(this.props.data.cartItems.length === 0){
        btn = <button id='disabled' type="button" onClick={(e)=>this.handleShippingBtn(e)} className="btn-primary round-pill">Shipping Info</button>;
      } else {
        btn = <button type="button" onClick={(e)=>this.handleShippingBtn(e)} className="btn-primary round-pill">Shipping Info</button>;
      }
    } else if(this.props.data.stateNumber === 4){   
      if(this.props.errors === true ){ 
        btn = <button id='disabled' type="button" onClick={(e)=>this.handlePaymentBtn(e)} className="btn-primary round-pill">Validate Address to go to Payment!</button>;
      } else {
        btn = <button type="button" onClick={(e)=>this.handlePaymentBtn(e)} className="btn-primary round-pill">Pay ${(this.state.cartSubTotal+this.props.data.shippingCost+this.state.taxAmount-this.props.data.finalDiscount).toFixed(2)}</button>;
      }
    } else if(this.props.data.stateNumber === 5){
      if(this.props.paymentSuccess === false ){ 
        btn = <button id='disabled' type="button" onClick={(e)=>this.handleConfirmBtn(e)} className="btn-primary round-pill">Complete Payment to Confirm Order!</button>;
      } else {
        btn = <button type="button" onClick={(e)=>this.handleConfirmBtn(e)} className="btn-primary round-pill">Confirm Order!</button>;
      }
    }

    let minicart;
    let cart = this.props.data.cartItems;
    if(this.props.data.stateNumber > 3){
      minicart = <div className='mini-cart'>
        {cart.map(function(item,index){
          return (
            <div key={ index } id={ index }>
              <div className='mini-cart-item'>
                <div className="cart-image">
                  <img src={item.img} alt="card-sale" />
                </div>
                <div className='mini-cart-product-info'>
                  <div>Name: {item.name}</div>
                  <div>Quantity: {item.quantity}</div>
                  <div>Price: ${item.price*item.quantity}.00</div>
                </div>
              </div>
            </div>)})
        }
        <hr />
      </div>
    }

    let billingSummary =
    <div className='cart-info'>
      <h4>Cart SubTotal: ${this.state.cartSubTotal}.00</h4>
      <h4>Shipping and Handling: ${this.props.data.shippingCost}.00</h4>
      <h4>Discount: ${this.props.data.finalDiscount.toFixed(2)}</h4>
      <h4>Tax: ${this.state.taxAmount}</h4>
      <h4>Cart Total: ${(this.state.cartSubTotal+this.props.data.shippingCost+this.state.taxAmount-this.props.data.finalDiscount).toFixed(2)}</h4>
      <hr />
    </div>

    let summaryDiv;
    if(this.props.data.stateNumber === 3){
      summaryDiv =
      <div className='summary'>
        <div className='cart-summary-div'>
          <div className='cart-summary'>
            <h4>Enter Promo Code</h4>
            <input type="text" placeholder="Promo Code" autoComplete='off' onChange={(e)=>this.handleInputChange(e)} name="promo"/>
            <button className="btn-primary round-pill" onClick={(e)=>this.handleInputClick(e)}>Apply</button>
          </div>
          <div className='cart-info'>
            <h4>Cart SubTotal: ${this.props.cost.toFixed(2)}</h4>
            <h4>Shipping and Handling: --</h4>
            <h4>Discount: ${this.state.discount.toFixed(2)}</h4>
            <h4>Cart Total: ${(this.props.cost - this.state.discount).toFixed(2)}</h4>
          </div>
          <button type="button" onClick={(e)=>this.handleCancelBtn(e)} className="cancelbtn btn-primary round-pill">Back to Store</button>
          {btn}
        </div>
      </div>
    } else if (this.props.data.stateNumber === 4){
      summaryDiv =
      <div className='summary'>
        <div className='cart-summary-div'>
          <div className='shipping-summary'>
            <h5>{this.props.data.cartItems.length} item(s) in your cart</h5>
          </div>
          {minicart}
          {billingSummary}
          {btn}
        </div>
      </div>
    } else if (this.props.data.stateNumber === 5){
      summaryDiv =
      <div className='summary'>
        <div className='cart-summary-div'>
          <div className='payment-summary'>
            <h5>{this.props.data.cartItems.length} item(s) in your cart</h5>
          </div>
          {minicart}
          {billingSummary}
          {btn}
        </div>
      </div>
    } else if (this.props.data.stateNumber === 6){
      summaryDiv =
      <div className='summary'>
        <div className='cart-summary-div'>
          <div className='shipping-summary'>
            <h5>{this.props.data.cartItems.length} item(s) in your cart</h5>
          </div>
          {minicart}
          {billingSummary}
        </div>
      </div>
    }

    return(
      <div className='summary-section'>
        <h2 className='summary-title'>Summary</h2>
        <div>{summaryDiv}</div>
      </div>
    )
  }
}

export default Summary;
