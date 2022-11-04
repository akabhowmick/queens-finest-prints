import React from 'react';
import "./Sections.css";
import logo from "../Images/logo.png";

class HomePage extends React.Component{
  render(){
    return(
      <div className="header">
        <div className="container floating-header">
          <div className="text-wrap">
            <img className="main-logo" src={logo} alt="main-logo" />
            <div className="landing-page-header">
              <h1 className="slogan">You dream it! <br /> We make it!</h1>
              <h3>Customize your own 3D decor piece</h3>
              <div className="action-btns">
                <button onClick={event =>  window.location.href='#products'} className="btn-primary round-pill">Buy Now!</button>
                <button onClick={event =>  window.location.href='#contact'} className="btn-primary round-pill">Learn More!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage; 