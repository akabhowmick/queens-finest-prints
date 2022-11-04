import React from 'react';
import './CodeCard.css';

class CodeCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mouseOnCard: false,
      error: false,
      learnMoreClicked: false,
      slides: this.props.data.imageCarosel.length,
      current: 0,
      next: 0,
      prev: 0,
      currentImage: this.props.data.imageCarosel[0].url
    }
  }

  goToNum = (newCurrent) =>{
    let newPrev = (newCurrent > 0) ? newCurrent - 1 : this.state.slides.length - 1;
    let newNext = (newCurrent < this.state.slides.length - 1) ? newCurrent + 1 : 0;
    this.setState({
      current: newCurrent,
      next: newNext,
      prev: newPrev,
      currentImage: this.props.data.imageCarosel[newCurrent].url
    })

  }

  goToNext = () => (this.state.current < this.state.slides - 1) ? this.goToNum(this.state.current + 1) : this.goToNum(0) ;
  goToPrev = () => (this.state.current > 0) ? this.goToNum(this.state.current - 1) : this.goToNum(this.state.slides - 1) ;

  descWithoutHTML = (str) => {
    return (str.replace( /(<([^>]+)>)/ig, '\n'));
  };

  handleBtnClick = (e) => {
    if(this.props.userLoggedIn){
      if(this.props.data.quantity>0){
        if(!this.props.data.addedToCart){
          this.props.updateCart('add', e.target.id, 1);
        } else {
          this.props.updateCart('remove', e.target.id, 1);
        }
      } else {
        this.setState({error:true})
      }
    } else{
      this.props.viewPage(2);
    }
  }

  learnMore = (e) => {
    this.setState({learnMoreClicked:true})
  }

  backToHome = (e) => {
    this.setState({learnMoreClicked:false})
  }

  render(){
    const {addedToCart, name, id, img, price} = this.props.data;
    let description = this.descWithoutHTML(this.props.data.desc);
    let btn;
    if (addedToCart===true){
      btn = <button onClick={(e)=>this.handleBtnClick(e)} id={id} className="btn-primary round-pill">Remove from Cart!</button>
    } else {
      btn = <button onClick={(e)=>this.handleBtnClick(e)} id={id} className="btn-primary round-pill">Add to Cart!</button>
    }
    return(
      <div className="card">
        <div className="card-image">
            <img src={img} alt="card-sale" />
        </div>
        <h3>{name} <p>${price}.00</p></h3>
        <div className="card-modal">
          <button onClick={(e)=>this.learnMore(e)} className="btn-primary round-pill">Learn More!</button>
          {btn}
        </div>
        {this.state.learnMoreClicked && 
        <div className='card-details'>
          <div className='card-details-pic'>
            <img src={this.state.currentImage} alt="card-sale" />
            <div className="slide-ctrl-container">
              <button onClick={(e)=>this.goToPrev()}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button onClick={(e)=>this.goToNext()}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className='card-details-text'>
            <h3>{name}</h3>
            <h4 className='desc'>{description}</h4>
            <p className='green-price'>${price}.00+</p>
            <div className="card-modal">
              <button onClick={(e)=>this.backToHome(e)} className="btn-primary round-pill">Back to Home!</button>
              <div className='btnDisplay'>{btn}</div>
            </div>
          </div>
        </div>
        }
        <div className='error-message-field'>
        {this.state.error && <p>Current out of stock!</p>}
        </div>
    </div>
    )
  }
}

export default CodeCard;

// onMouseEnter={() => this.showProductDetails()}
// onMouseLeave={() => this.showProductDetails()}