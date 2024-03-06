import React from 'react';
import './Sections.css';
export default function CheckoutStatusBar(props) {
 return (
  <div className="checkout-steps">
   <div className={props.cart ? 'active' : ''} >Cart</div>
   <div className={props.shipping ? 'active' : ''} >Shipping</div>
   <div className={props.payment ? 'active' : ''} >Payment</div>
   <div className={props.placeOrder ? 'active' :''}>Confirmation</div>
  </div>
 )
}