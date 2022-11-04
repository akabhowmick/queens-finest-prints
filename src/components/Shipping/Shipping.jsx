import React from 'react';
import Summary from '../Summary/Summary.jsx';
import './Shipping.css';

class Shipping extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: '',
        address: '',
        city: '',
        state: '',
        email: '',
        zipCode: '',
        number: '',
      },
      validFields: {
        validName: true,
        validAddress: true,
        validCity: true,
        validState: true,
        validEmail: true,
        validZipCode: true,
        validNumber: true,
      },
      errorMessage: '',
      shippingPrice: 5,
      deliveryMethod: 'standard',
      errors: true
    }
  }

  //fix regex patterns
  validateFields = (fieldName, value) =>{
    switch (fieldName) {
      case 'email':
        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        this.setState({validFields: {...this.state.validFields, validEmail: emailRegex.test(value)}});
        break;
      case 'name':
        const letterRegex = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/gi;
        this.setState({validFields: {...this.state.validFields, validName: letterRegex.test(value)}});
        break;
      case 'zipCode':
        const postalCodeRegex = /^\d{5}$/;
        this.setState({validFields: {...this.state.validFields, validZipCode: postalCodeRegex.test(value)}});
        break;
      case 'state': //fix
        const stateRegex = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/gi;
        this.setState({validFields: {...this.state.validFields, validState: stateRegex.test(value)}});
        break;
      case 'city': //fix
        const cityRegex = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/gi;
        this.setState({validFields: {...this.state.validFields, validCity: cityRegex.test(value)}});
        break;
      case 'number':
        const phoneNumberRegex = /^\d{10}$/;
        this.setState({validFields: {...this.state.validFields, validNumber: phoneNumberRegex.test(value)}});
        break;
      case 'address': //fix
        const addressRegex = /^[a-z0-9\s,'-]*$/i;
        this.setState({validFields: {...this.state.validFields, validAddress: addressRegex.test(value)}});
        break;
      default:
        break;
    }
  }

  componentDidMount = () => {
    this.props.updateShipping(this.state.shippingPrice);
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({fields: {...this.state.fields, [name]: value}});
    this.validateFields(name, value);
  }

  handleRadioClick = (e) => {
    const {value} = e.target;
    if(value === 'express'){
      this.setState({deliveryMethod: value, shippingPrice: 15});
      this.props.updateShipping('amount', 15);
    } else {
      this.setState({deliveryMethod: value, shippingPrice: 5});
      this.props.updateShipping('amount', 5);
    }
    
  }

  handleGoToCartBtn = (e) => {
    this.props.viewPage(3);
  }

  handleValidAddBtn = (e) => {
    let validForm = true;
    let validFields = Object.keys(this.state.validFields);
    let validFieldValues = Object.values(this.state.validFields);
    let fieldValues = Object.values(this.state.fields);
    for(let i = 0; i<validFields.length; i++){
      if(validFieldValues[i]===false || fieldValues[i].length===0){
        this.setState({errorMessage: 'We are sorry, but one of more fields are incorrect or incomplete', errors: true});
        validForm=false;
      }
    }
    if(validForm){
      this.setState({errorMessage: '', errors: false});
      let shippingAddress = {
        address: this.state.fields.address,
        city: this.state.fields.city,
        state: this.state.fields.state,
        zipCode: this.state.fields.zipCode,
      }
      this.props.updateShipping('address',shippingAddress);
    }
  }

  render(){
    return(
      <div>
        <h3>Shipping Information</h3>
        <div className='shipping-form'>
          <div className='shipping-info'>
            <div className="row">
              <div className="col-75">
                <div className="container">
                  <div className="row">
                    <div className="col-50">
                      <h4>Shipping Address</h4>
                      <div>
                        {this.state.errorMessage.length > 0 &&
                        <div className='error-message-field-text'>{this.state.errorMessage}</div>}
                      </div>
                      <label htmlFor="fname">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="John M. Doe" onChange={(e)=>this.handleInputChange(e)} />
                      <div className='error-message-field'>
                        {!this.state.validFields.validName &&
                          <div className='error-message-field-text'>
                            <p>Please enter a valid name</p>
                          </div>}
                      </div>

                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" name="email" placeholder="john@example.com" onChange={(e)=>this.handleInputChange(e)} />
                      <div className='error-message-field'>
                        {!this.state.validFields.validEmail &&
                          <div className='error-message-field-text'>
                            <p>Please enter a valid email</p>
                          </div>}
                      </div>

                      <label htmlFor="number">Phone Number</label>
                      <input type="number" id="number" name="number" placeholder="1234567890" onChange={(e)=>this.handleInputChange(e)} />
                      <div className='error-message-field'>
                        {!this.state.validFields.validNumber &&
                          <div className='error-message-field-text'>
                            <p>Please enter a valid phone number</p>
                          </div>}
                      </div>

                      <label htmlFor="adr">Address</label>
                      <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange={(e)=>this.handleInputChange(e)} />
                      <div className='error-message-field'>
                        {!this.state.validFields.validAddress &&
                          <div className='error-message-field-text'>
                            <p>Please enter a valid address</p>
                          </div>}
                      </div>

                      <label htmlFor="city">City</label>
                      <input type="text" id="city" name="city" placeholder="New York" onChange={(e)=>this.handleInputChange(e)} />
                      <div className='error-message-field'>
                        {!this.state.validFields.validCity &&
                          <div className='error-message-field-text'>
                            <p>Please enter a valid city</p>
                          </div>}
                      </div>

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input type="text" id="state" name="state" placeholder="NY" onChange={(e)=>this.handleInputChange(e)} />
                          <div className='error-message-field'>
                            {!this.state.validFields.validState &&
                              <div className='error-message-field-text'>
                                <p>Please enter a valid state</p>
                              </div>}
                          </div>
                        </div>
                        <div className="col-50">
                          <label htmlFor="zipCode"><b></b>Zip Code</label>
                          <input type="number" placeholder="Zip Code" autoComplete='off' name="zipCode" onChange={(e)=>this.handleInputChange(e)}  required />
                          <div className='error-message-field'>
                            {!this.state.validFields.validZipCode &&
                              <div className='error-message-field-text'>
                                <p>Please enter valid zip code</p>
                              </div>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='shipping-div'>
              <h4>Shipping Method</h4>
              <input type="radio" id="standard" name="shipping" value="standard" defaultChecked onClick={(e)=>this.handleRadioClick(e)}/>
              <label htmlFor="html">Standard - Delivery in 4-6 days ($5)</label>
              <br />
              <input type="radio" id="express" name="shipping" value="express" onClick={(e)=>this.handleRadioClick(e)}/>
              <label htmlFor="css">Express - Delivery in 1-3 days ($15)</label>
              <br />
              <button type="button" onClick={(e)=>this.handleGoToCartBtn(e)} className="btn-primary round-pill">Back to Cart</button>
              <button type="button" onClick={(e)=>this.handleValidAddBtn(e)} className="btn-primary round-pill">Validate Address</button>
            </div>
          </div>
          <Summary data={this.props.data} viewPage={this.props.viewPage} shippingCost={this.state.shippingPrice} errors={this.state.errors} updateShipping={this.props.updateShipping} />
        </div>
      </div>
    )
  }
}

export default Shipping;
