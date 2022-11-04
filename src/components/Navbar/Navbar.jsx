import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component{
  toggleNav = (e) =>{
    let btnToggle = document.querySelector('#ham-menu');
    let expanded = btnToggle.getAttribute('aria-expanded')==='true' || false;
    btnToggle.setAttribute('aria-expanded', !expanded);
    let activeHamMenu = document.querySelector('#hamburger-lines');
    if(expanded){
      activeHamMenu.classList.remove("deactive");
    }else{
      activeHamMenu.classList.add("deactive");
    }
  }

  render(){
    return(
      <nav id="navbar" className="navbare sticky">
        <div className="navigation nav-container">
          <button onClick={(e)=> this.toggleNav()} id="ham-menu" className="navbar-toggler" aria-expanded="false" aria-controls="navbarDropdown">
            <div className='hamburger-lines' id="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </button>
          <ul className="navbar-nav">
            <li className="nav-link"><a href="index.html">Home</a></li>
            <li className="nav-link"><a href="#products">Products</a></li>
            <li className="nav-link"><a href="#contact">Contact Us</a></li>
            <li className="nav-link"><a className="toggles-show" href="#products">Buy Now</a></li>
          </ul>
          <a className="navbar-brand" href="index.html">Queens Finest Prints</a>
          <ul className="navbar-buy">
            <li className="nav-link"><a className="btn btn-primary" href="#products">Buy Now</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar; 