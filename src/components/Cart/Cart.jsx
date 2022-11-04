import React from 'react';
import Summary from '../Summary/Summary.jsx';
import './Cart.css';
import CartItem from './CartItem.jsx';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cartEmpty: this.props.data.cartItems.length > 0 ? false : true,
      cost: 0,
      cart: this.props.data.cartItems
    }
  }

  totalCartCost = () => {
    let cartTotal = 0;
    for(let i = 0; i<this.props.data.cartItems.length ;i++){
      cartTotal += this.props.data.cartItems[i].quantity * this.props.data.cartItems[i].price;
    }
    this.setState({cost: cartTotal})
  }

  componentDidMount(){
    this.totalCartCost();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.cartItems.length  !== prevProps.data.cartItems.length) {
      this.totalCartCost();
      this.setState({cart: this.props.data.cartItems})
    }
  }

  handleCancelBtn = (e) => {
    this.props.viewPage(1);
  }

  render(){
    let cart = this.props.data.cartItems;
    let {updateCart, viewPage, updateState, addReqField} = this.props;
    let totalCartCost = this.totalCartCost;
    return(
      <div>
        <div className='cart-summary-flexbox'>
          <div className='main-cart'>
            <div className='cart-table-entry'>
            {!this.state.cartEmpty &&
              <div>
              {this.state.cart.map(function(item,index){
                return (
                  <div key={ index } id={ index }>
                    <CartItem cart={cart} data={item} updateCart={updateCart} totalCartCost={totalCartCost} addReqField={addReqField}/>
                  </div>)})
              }
              </div>
            }</div>
            {this.state.cartEmpty &&
              <div>
                No Items currently in the cart! 
              </div>
            }
          </div>
          <div className='summary-section'>
            <Summary data={this.props.data} viewPage={viewPage} cost={this.state.cost} updateState={updateState}/>
          </div>
        </div>
        <button type="button" onClick={(e)=>this.handleCancelBtn(e)} className="cancelbtn btn-primary round-pill">Back to Store</button>
      </div>
    )
  }
}

export default Cart;
