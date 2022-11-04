import React from 'react';
import './CreateAccount.css';

const initial = {
  fields: {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    zipCode: '',
  },
  validFields: {
    validEmail: true,
    validPassword: true,
    validConfirmPassword: true,
    validFirstName: true,
    validLastName: true,
    validZipCode: true,
  },
  eyeFlip: false,
  errorMessage: ''
}

class CreateAccount extends React.Component{

  constructor(props){
    super(props);
    this.state = initial;
  }

  handleLoginBtn = (e) =>{
    console.log('not much happening with this');
  }

  validateFields = (name, value) =>{
    switch (name) {
      case 'email':
        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        this.setState({fields: {...this.state.fields, [name]: value}});
        this.setState({ validFields: {...this.state.validFields, validEmail: emailRegex.test(value)}});
        break;
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-#$^+_!*()@%&]).{8,20}$/gm;
        this.setState({ validFields: {...this.state.validFields, validPassword: passwordRegex.test(value)}});
        break;
      case 'confirmPassword':
        this.setState({ validFields: {...this.state.validFields, validConfirmPassword: (value === this.state.fields.password)}});
        break;
      case 'firstName':
        const letterRegex = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/gi;
        this.setState({  validFields: {...this.state.validFields, validFirstName: letterRegex.test(value)}});
        break;
      case 'lastName':
        const letterRegex2 = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/gi;
        this.setState({  validFields: {...this.state.validFields, validLastName: letterRegex2.test(value)}});
        break;
      case 'zipCode':
        const postalCodeRegex = /^\d{5}$/;
        this.setState({  validFields: {...this.state.validFields, validZipCode: postalCodeRegex.test(value)}});
        break;
      default:
        break;
    }
  }

  handleCancelBtn = (e) => {
    this.state = initial;
    this.props.viewPage(1);
  }

  handleEyeClick = (e) => { this.setState({eyeFlip: !this.state.eyeFlip})}

  //fix
  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({fields: {...this.state.fields, [name]: value}});
    this.validateFields(name, value);
  }

  //fix
  handleSignInBtn = (e) => {
    let validUser = true;
    let validFields = Object.keys(this.state.validFields);
    let valieFieldValues = Object.values(this.state.validFields);
    let fieldValues = Object.values(this.state.fields);
    for(let i = 0; i<validFields.length; i++){
      if(valieFieldValues[i]===false || fieldValues[i].length===0){
        this.setState({errorMessage: 'We are sorry, but one of more fields are incorrect or incomplete'});
        validUser=false;
      }
    }
    if(validUser){
      this.props.addUser(this.state.email, this.state.password);
      this.props.viewPage(1);
    }
  }

  render(){
    return(
      <div className="new-account">
        <h4>Register New Account</h4>

        <div className='error-message-top'>
          {this.state.errorMessage.length > 0 &&
          <div className='error-message-field-text'>{this.state.errorMessage}</div>}
        </div>

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" autoComplete='off' onChange={(e)=>this.handleInputChange(e)} name="email" required />
        <div className='error-message-field'>
          {!this.state.validFields.validEmail &&
            <div className='error-message-field-text'>
              <p>Please enter a valid email</p>
            </div>}
        </div>

        <label htmlFor="psw"><b>Password</b></label>
        <div className='password-visible'>{
          this.state.eyeFlip ?
          <div>
            <input type='password' name='password' id='password' autoComplete='off' onChange={(e)=>this.handleInputChange(e)} required/>
            <i className="far fa-eye-slash" placeholder="Enter Password" id="togglePassword" onClick={(e)=>this.handleEyeClick(e)}></i>
          </div>:
          <div>
          <input type='text' name='password' id='password' autoComplete='off' onChange={(e)=>this.handleInputChange(e)} required/>
            <i className="far fa-eye" placeholder="Enter Password" id="togglePassword" onClick={(e)=>this.handleEyeClick(e)}></i>
          </div>
        }<p>Password must be 8-20 characters, including: at least one capital letter, at least one small letter, one number and one special character - ! @ # $ % ^ & * ( ) _ +</p>
        </div>
        <div className='error-message-field'>
          {!this.state.validFields.validPassword &&
            <div className='error-message-field-text'>
              <p>Please enter a valid password</p>
            </div>}
        </div>

        <label htmlFor="confirmPassword"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" autoComplete='off' name="confirmPassword" onChange={(e)=>this.handleInputChange(e)} required />
        <div className='error-message-field'>
          {!this.state.validFields.validConfirmPassword &&
            <div className='error-message-field-text'>
              <p>Passwords do not match</p>
            </div>}
        </div>

        <label htmlFor="firstName"><b>First Name</b></label>
        <input type="text" placeholder="First Name" autoComplete='off' name="firstName" onChange={(e)=>this.handleInputChange(e)} required />
        <div className='error-message-field'>
          {!this.state.validFields.validFirstName &&
            <div className='error-message-field-text'>
              <p>Please enter valid first name</p>
            </div>}
        </div>

        <label htmlFor="lastName"><b></b>Last Name</label>
        <input type="text" placeholder="Last Name" autoComplete='off' name="lastName" onChange={(e)=>this.handleInputChange(e)}  required />
        <div className='error-message-field'>
          {!this.state.validFields.validLastName &&
            <div className='error-message-field-text'>
              <p>Please enter valid last name</p>
            </div>}
        </div>

        <label htmlFor="zipCode"><b></b>Zip Code</label>
        <input type="number" placeholder="Zip Code" autoComplete='off' name="zipCode" onChange={(e)=>this.handleInputChange(e)} required />
        <div className='error-message-field'>
          {!this.state.validFields.validZipCode &&
            <div className='error-message-field-text'>
              <p>Please enter valid zip code</p>
            </div>}
        </div>

        <button type="button" onClick={(e)=>this.handleSignInBtn(e)}>Create Account</button>
        <button type="button" id='fb' onClick={(e)=>this.handleLoginBtn(e)}>Sign In With FaceBook</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember"/> Remember me
        </label>
        <button type="button" onClick={(e)=>this.handleCancelBtn(e)} className="cancelbtn">Cancel</button>
      </div>
    )
  }
}

export default CreateAccount;
