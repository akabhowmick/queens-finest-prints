import React from 'react';
import './SignIn.css';

const initial = {
  email: '',
  password: '',
  error: false,
  errorMessage: '',
  userFound: false,
  eyeFlip: false
}

class SignIn extends React.Component{

  constructor(props){
    super(props);
    this.state = initial;
  }

  handleInputBlur = (e) => {
    if(e.target.value.length === 0){
      this.setState(
        {error: true,
        errorMessage: 'Please enter required field'})
    } else {
      e.target.name === 'email' ?
      this.setState({
        email: e.target.value
      }) :
      this.setState({
        password: e.target.value
      })
    }
  }

  handleInputChange = (e) => {
    e.target.name === 'email' ?
    this.setState(
      {error: false,
        email: e.target.value}) :
    this.setState(
      {error: false,
        password: e.target.value})
  }

  handleLoginBtn = (e) => {
    const userArray = this.props.data.users;
    for(let i = 0; i<userArray.length; i++){
      if(userArray[i].email === this.state.email){
        if(userArray[i].password === this.state.password){
          console.log('userfound');
          this.setState({error: false, userFound: true});
          this.props.log();
          this.props.viewPage(1);
        }
        else {
          this.setState({
            error: true,
            errorMessage: 'Password entered is incorrect'
          })
        }
      }
    }
    if(!this.state.userFound && !this.state.error){
      this.setState({
        error: true,
        errorMessage: 'Email not found'
      })
    }
  }

  handleCancelBtn = (e) => {
    this.state = initial;
    this.props.viewPage(1);
  }

  handleEyeClick = (e) => {
    this.setState({eyeFlip: !this.state.eyeFlip})
  }

  render(){
    return(
      <div className='sign-in'>
        <h4>Returning User</h4>
        <div className='error-section'>
          {this.state.error && <div className='error-message'>{this.state.errorMessage}</div>}
        </div>
        <label htmlFor='email'>Email Address *</label>
        <input type='text' name='email' id='email' autoComplete='off' onChange={(e)=>this.handleInputChange(e)} onBlur={(e)=>this.handleInputBlur(e)} required/>
        <label htmlFor='password'>Password *</label>
        <div className='password-visible'>{
          this.state.eyeFlip ?
          <div>
            <input type='password' name='password' id='password' autoComplete='off' onChange={(e)=>this.handleInputChange(e)} onBlur={(e)=>this.handleInputBlur(e)} required/>
            <i className="far fa-eye-slash" id="togglePassword" onClick={(e)=>this.handleEyeClick(e)}></i>
          </div>:
          <div>
          <input type='text' name='password' id='password' autoComplete='off' onChange={(e)=>this.handleInputChange(e)} onBlur={(e)=>this.handleInputBlur(e)} required/>
            <i className="far fa-eye" id="togglePassword" onClick={(e)=>this.handleEyeClick(e)}></i>
          </div>
        }</div>
        <button type="button" onClick={(e)=>this.handleLoginBtn(e)}>Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
        </label>
        <button type="button" onClick={(e)=>this.handleCancelBtn(e)} className="cancelbtn">Cancel</button>
      </div>
    )
  }
}

export default SignIn;

//back to store
