import React from "react";
import etsy from "../Images/etsy.png";
import tiktok from "../Images/tiktok.png";
import ebay from "../Images/ebay.png";
import "./Sections.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-dark">
        <footer>
          <h3>Follow Us On:</h3>
          <div className="col item social">
            <a href="https://www.facebook.com/Queens-Finest-Cards-100291432150180">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/BreaksQueens">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/queensfinestprints/">
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="fake-icon-a"
              href="https://www.ebay.com/sch/chris_cards_3/m.html?_nkw=&_armrs=1&_ipg=&_from="
            >
              <img className="fake-icon" src={ebay} />
            </a>
            <a className="fake-icon-a" href="https://www.tiktok.com/@queensfinestcards">
              <img className="fake-icon" src={tiktok} />
            </a>
            <a className="fake-icon-a" href="https://www.etsy.com/shop/QueensFinestPrints">
              <img className="fake-icon" src={etsy} />
            </a>
          </div>
          <p className="copyright">Queens Finest Prints &copy; 2022</p>
          <div className="footer-credits">
            Made by <a href="https://akashbhowmick.com/">AKA CODE</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
