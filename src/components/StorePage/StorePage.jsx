import React from "react";
import CodeCard from "./CodeCard/CodeCard.jsx";
import "./StorePage.css";
import { products } from "../../utils/Products.js";

class StorePage extends React.Component {
  state = {
    data: [],
    loading: false,
    error: false,
  };

  render() {
    let updateCart = this.props.updateCart;
    let userLoggedIn = this.props.userLoggedIn;
    let viewPage = this.props.viewPage;

    return (
      <div className="main-store-page">
        <div className="scrolling-words-container">
          <span>You can buy custom: </span>
          <div className="scrolling-words-box">
            <ul>
              <li>Card Stands</li>
              <li>Funko-Pop Stands</li>
              <li>Video Game Stands</li>
              <li>Box Organizers</li>
              <li>City Skylines</li>
            </ul>
          </div>
        </div>

        <div className="card-input-grid">
          {products.map(function (cardInfo, index) {
            return [
              <div key={index} id={index}>
                <CodeCard
                  data={cardInfo}
                  updateCart={updateCart}
                  userLoggedIn={userLoggedIn}
                  viewPage={viewPage}
                />
              </div>,
            ];
          })}
        </div>
      </div>
    );
  }
}

export default StorePage;
