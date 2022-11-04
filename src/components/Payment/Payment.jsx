import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Summary from '../Summary/Summary.jsx';
import './Payment.css'

class Payment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      paymentSuccess: false,
      errorMessage: '',
    }
  }

  handleCancelBtn = (e) => {
    this.props.viewPage(1);
  }

  render(){
    let amount = this.props.data.finalCost; 
    let currency = "USD";
    console.log(amount, currency);
    return(
      <div>
        <div className='payment-info'>
          <div className='paypal-div'>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons 
                  style={{ 
                    layout: "vertical",
                    shape: "pill",
                    color: "gold",
                  }} 
                />
            </PayPalScriptProvider>
          </div>
          <Summary data={this.props.data} viewPage={this.props.viewPage} errors={this.state.errors} paymentSuccess={this.state.paymentSuccess} updateCommerce={this.props.updateState}/>
        </div>
      </div>
    )
  }
}

export default Payment;
