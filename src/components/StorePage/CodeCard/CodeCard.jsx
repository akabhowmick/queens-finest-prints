import React from "react";
import "./CodeCard.css";

class CodeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOnCard: false,
      error: false,
      learnMoreClicked: false,
      slides: this.props.data.images.length,
      current: 0,
      next: 1,
      prev: this.props.data.images.length - 1,
      currentImage: this.props.data.images[0],
    };
  }

  goToNum = (newCurrent) => {
    const totalSlides = this.state.slides;

    const newPrev = newCurrent > 0 ? newCurrent - 1 : totalSlides - 1;
    const newNext = newCurrent < totalSlides - 1 ? newCurrent + 1 : 0;

    // Update state with the new values
    this.setState({
      current: newCurrent,
      next: newNext,
      prev: newPrev,
      currentImage: this.props.data.images[newCurrent].url,
    });
  };

  goToNext = () => {
    const { current, slides } = this.state;
    this.goToNum(current < slides - 1 ? current + 1 : 0);
  };

  goToPrev = () => {
    const { current, slides } = this.state;
    this.goToNum(current > 0 ? current - 1 : slides - 1);
  };

  handleBtnClick = (e) => {
    if (this.props.userLoggedIn) {
      if (this.props.data.quantity > 0) {
        if (!this.props.data.addedToCart) {
          this.props.updateCart("add", parseInt(e.target.id, 10), 1);
        } else {
          this.props.updateCart("remove", parseInt(e.target.id, 10), 1);
        }
      } else {
        this.setState({ error: true });
      }
    } else {
      this.props.viewPage(2);
    }
  };

  learnMore = () => {
    this.setState({ learnMoreClicked: true });
  };

  backToHome = () => {
    this.setState({ learnMoreClicked: false });
  };

  render() {
    const { addedToCart, name, id, images, price, details } = this.props.data;
    const { currentImage, learnMoreClicked, error } = this.state;

    // Render the appropriate button based on the cart status
    const btn = addedToCart ? (
      <button onClick={this.handleBtnClick} id={id} className="btn btn-primary round-pill">
        Remove from Cart!
      </button>
    ) : (
      <button onClick={this.handleBtnClick} id={id} className="btn btn-primary round-pill">
        Add to Cart!
      </button>
    );

    return (
      <div className="card">
        <div className="card-image">
          <img src={images[0]} alt="card-sale" />
        </div>
        <h3>
          {name} <p>${price}</p>
        </h3>
        <div className="card-modal">
          <button onClick={this.learnMore} className="btn-primary round-pill">
            Learn More!
          </button>
          {btn}
        </div>

        {learnMoreClicked && (
          <div className="card-details">
            <div className="card-details-pic">
              <h3>Scroll down for details and more examples!</h3>
              <img src={currentImage} alt="card-sale" />
              {/* <div className="slide-ctrl-container">
                <button onClick={this.goToPrev}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button onClick={this.goToNext}>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div> */}
            </div>
            <div className="card-details-text">
              <h3>{name}</h3>
              {/* <h4 className="desc">{desc}</h4> */}
              <p className="orange-price">${price}+</p>
              {/* map over the details of the product */}
              {details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
              <div className="card-modal">
                <button onClick={this.backToHome} className="btn-primary round-pill">
                  Back to Home!
                </button>
                <div className="btnDisplay">{btn}</div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="error-message-field">
            <p>Currently out of stock!</p>
          </div>
        )}
      </div>
    );
  }
}

export default CodeCard;
