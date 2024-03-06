import React from 'react';
import Summary from '../Summary/Summary.jsx';
import './Confirmation.css'
import CheckoutStatusBar from '../Sections/CheckoutStatusBar.jsx';

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
    const {finalCost, shippingName, shippingEmail} = this.props.data;
    let simplifiedCart = [];
    for(let i = 0; i < this.props.data.cartItems.length; i++){
      let simpleItem = {
        name: this.props.data.cartItems[i].name.replace(" ","_"),
        quantity: this.props.data.cartItems[i].quantity,
        requiredCustomized: this.props.data.cartItems[i].requiredCustomized,
      }
      simplifiedCart.push(simpleItem);
    }

    return(
      <div className='confirm-main-div'>
        <CheckoutStatusBar cart shipping payment placeOrder ></CheckoutStatusBar>
        <div className='send-info-div'>
          <form action="https://formsubmit.co/christiancardenas13@gmail.com" method="POST" id="contactForm" name="contactForm" className="contactForm" encType="multipart/form-data">
            <input type="hidden" name="_subject" value="Complete Order for Queens Finest Prints!" />
            <input type="hidden" name="_next" value="https://akabhowmick.github.io/queens-finest-prints/" />
            <input type="hidden" name="_template" value="table" />
            <input type='hidden' name='name' value={shippingName}/>
            <input type="email hidden" className='hidden' name="email" value={shippingEmail} readOnly/>
            <input type='hidden' name='address' value={address}/>
            <input type='hidden' name='Total Cost' value={finalCost}/>
            {simplifiedCart.map(function(element, index){
              return(
                <div key={ index } id={ index }>
                  <input type='hidden' name={element.name} value={JSON.stringify(element)}/>  
                </div>)})
            }
            {simplifiedCart.map(function(element, index){
              return(
                <div className="product-image-div" key={ index } id={ index }>
                  <label id="product-image" className="label" htmlFor="name">Upload Image for {element.name} *optional</label>
                  <input type="file" id="myFile" name={element.name+' imageFile'} accept="image/png, image/jpeg" multiple/>
                </div>)})
            }
            <div className='final-reminder'> 
              <h3 className='reminder'>Don't forget to: </h3>
              <button type="submit" className='btn btn-primary round-pill'>Send your wishlist to vendor!</button>
            </div>
          </form>
        </div>
        <Summary data={this.props.data}/>
      </div>
    )
  }
}

export default Confirmation;

