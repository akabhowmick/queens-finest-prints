import React from 'react';
import CreateAccount from './CreateAccount/CreateAccount.jsx';
import SignIn from './SignIn/SignIn.jsx';
import './LogIn.css';

class LogIn extends React.Component{
  constructor(){
    super();
    this.state = {
      newUser: false,
    }
  }

  handleRadioButton = (e) => {
    const btnClicked = e.target.value;
    btnClicked === 'newUser' ?
      this.setState({newUser: true}):
      this.setState({newUser: false})
  }

  render(){
    let formSection;
    if(this.state.newUser){
      formSection =
        <div>
          <CreateAccount data={this.props.data} viewPage={this.props.viewPage} addUser={this.props.addUser}/>
        </div>
    } else {
      formSection =
        <div>
          <SignIn data={this.props.data} viewPage={this.props.viewPage} log={this.props.log}/>
        </div>
    }
    return(
      <div>
        <form>
          <div className='form-header'>
            <h4>Create Account or Login</h4>
            <input type='radio' name='userType' value='signIn' id='signIn' onChange={(e)=>this.handleRadioButton(e)} text='Sign In' defaultChecked='defaultChecked'/>
            <label htmlFor='signIn'>Log In</label>
            <input type='radio' name='userType' value='newUser' id='newUser'  onChange={(e)=>this.handleRadioButton(e)} text='Create Account' defaultChecked=''/>
            <label htmlFor='newUser'>Create Account</label>
          </div>
          <div className='form-body'>
            {formSection}
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn;
