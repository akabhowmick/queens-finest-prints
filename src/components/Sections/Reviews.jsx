import React from 'react';
import './Sections.css';
import logo from "../Images/logo.png";

class Reviews extends React.Component{

  constructor(){
    super();
    this.state = {
      slides: 4,
      current: 0,
      next: 1,
      prev: 3
    }
  }

  updateCaroselCss = () => {
    const slidesDummy = document.querySelectorAll('.review-item');
    slidesDummy.forEach((slide) => {
      slide.classList.remove('active', 'prev', 'next');
    })
    slidesDummy[this.state.current].classList.add('active');
    slidesDummy[this.state.next].classList.add('next');
    slidesDummy[this.state.prev].classList.add('prev');
  }

  goToNum = (newCurrent) =>{
    const slidesDummy = document.querySelectorAll('.review-item');
    this.state.current = newCurrent;
    this.state.next =  (newCurrent < slidesDummy.length - 1) ? newCurrent + 1 : 0;
    this.state.prev =  (newCurrent > 0) ? newCurrent - 1 : slidesDummy.length - 1;
    this.updateCaroselCss();
  }

  goToNext = () => (this.state.current < this.state.slides - 1) ? this.goToNum(this.state.current + 1) : this.goToNum(0) ;
  goToPrev = () => (this.state.current > 0) ? this.goToNum(this.state.current - 1) : this.goToNum(this.state.slides - 1) ;
   
  render(){
    return(
      <div> 
        <section className="reviews">
          <div className="review-title">What People Say</div>
          <h2 className="header-md">Trusted by Clients</h2>
          <div className="review-carosel">
            <div className="review-item active">
              <div className="review-author">
                <div className="avatar">
                  <img src={logo}  alt="ava-1" />
                </div>
                <div className="details">
                  <div className="name">Alexa</div>
                  <div className="date">Aug 25, 2022</div>
                </div>
              </div>
              <div className="review-text">
                #1 Seller communicated very well throughout the entire process and made sure I gave the ok to everything before making it. Turned out just the way I imagined! There was a little bit of product build up at the end of the design, but other than that, I absolutely love it. Can’t wait to give it to my boyfriend for his bday!
              </div>
            </div>
            <div className="review-item next">
              <div className="review-author">
                <div className="avatar">
                  <img src={logo}  alt="ava-1" />
                </div>
                <div className="details">
                  <div className="name">Eddie</div>
                  <div className="date">Sep 2, 2022</div>
                </div>
              </div>
              <div className="review-text">
                #2 This is awesome to show off my cards on the page! The detail is amazing! Glad to have found such a great source!
              </div>
            </div>
            <div className="review-item">
              <div className="review-author">
                <div className="avatar">
                  <img src={logo}  alt="ava-1" />
                </div>
                <div className="details">
                  <div className="name">Sam</div>
                  <div className="date">Sep 4, 2022</div>
                </div>
              </div>
              <div className="review-text">
                #3 Great people to deal with! Very high quality, fast, and very fair prices.
              </div>
            </div>
            <div className="review-item prev">
              <div className="review-author">
                <div className="avatar">
                  <img src={logo}  alt="ava-1" />
                </div>
                <div className="details">
                  <div className="name">Kristi</div>
                  <div className="date">Jul 18, 2022</div>
                </div>
              </div>
              <div className="review-text">
                #4 10/10 would recommend!
              </div>
            </div>
          </div>
        
          <div className="slide-ctrl-container">
            <button onClick={(e)=>this.goToPrev()}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={(e)=>this.goToNext()}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default Reviews; 