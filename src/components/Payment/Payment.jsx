import React from 'react';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import Summary from '../Summary/Summary.jsx';
import './Payment.css'
import ButtonWrapper from './ButtonWrapper.jsx';

class Payment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      paymentSuccess: false,
      errorMessage: '',
    }
  }

  setPaymentSuccess = () => {
    this.setState({paymentSuccess: true});
  }

  handleCancelBtn = (e) => {
    this.props.viewPage(1);
  }

  render(){
    let amount = this.props.data.finalCost; 
    const currency = "USD"
    return(
      <div>
        <div className='payment-info'>
          <div className='paypal-buttons'>
            <h3>Complete the payment!</h3>
            <PayPalScriptProvider
              options={{
                "client-id": "AXqOomrS73dZYPvV-fElIHCQITsnzIRe0DNmMZKhmIC6nod2TPfhJV9HGnD4iE4O0M4UL3_jAJzgL8gs",
                components: "buttons",
                currency: "USD"
              }}
            >
              <ButtonWrapper
                amount={amount}
                currency={currency}
                showSpinner={true}
                setPaymentSuccess={this.setPaymentSuccess}
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
