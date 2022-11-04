import React from 'react';
import Summary from '../Summary/Summary.jsx';
import './Confirmation.css'

class Confirmation extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      address: '',
      cartItem: '',
      paymentComplete: false
    }
  }

  render(){
    const address = JSON.stringify(this.props.data.shippingAddress);
    let simplifiedCart = []
    for(let i = 0; i < this.props.data.cartItems.length; i++){
      let simpleItem = {
        name: this.props.data.cartItems[i].name,
        quantity: this.props.data.cartItems[i].quantity,
        requiredCustomized: this.props.data.cartItems[i].requiredCustomized
      }
      simplifiedCart.push(simpleItem);
    }

    return(
      <div className='confirm-main-div'>
        <div className='paypal-payment-div'>
          <form action="https://formsubmit.co/akabhowmick@gmail.com" method="POST" id="contactForm" name="contactForm" className="contactForm" encType="multipart/form-data">
            <input type="hidden" name="_subject" value="Complete Order for Queens Finest Prints!" />
            <input type="hidden" name="_template" value="table" />
            <input type='hidden' name='address' value={address}/>
            {simplifiedCart.map(function(element, index){
              return(
                <div key={ index } id={ index }>
                  <input type='hidden' name={element.name} value={JSON.stringify(element)}/>  
                </div>)})
            }
            <button type="submit" className='btn btn-primary round-pill'>Send your wishlist to vendor!</button>
          </form>
        </div>
        <Summary data={this.props.data}/>
      </div>
    )
  }
}

export default Confirmation;

