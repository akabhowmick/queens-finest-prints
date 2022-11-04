import React from 'react';
import "./Contact.css";

class Contact extends React.Component{
  render(){
    return(
      <div className="container contact-page" id='contact'>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Fill out the form and we will get back to you as soon as possible</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row mb-5 contact-links">
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center" onClick={event =>  window.location.href='https://www.etsy.com/shop/se3Deezprints'}>
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text">
                          <p><span>Etsy</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center" onClick={event => window.location.href='tel://9176864435'}>
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text">
                          <p><span>Phone</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center" onClick={event => window.location.href='mailto:christiancardenas13@gmail.com'} >
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text">
                          <p><span>Email</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center" onClick={event => window.location.href='https://www.instagram.com/queensfinestcards/'} >
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text">
                          <p><span>Instagram</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-section row no-gutters">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Contact Us</h3>
                        <div id="form-message-warning" className="mb-4"></div> 
                          <form action="https://formsubmit.co/akabhowmick@gmail.com" method="POST" id="contactForm" name="contactForm" className="contactForm" encType="multipart/form-data">
                            <input type="hidden" name="_subject" value="Inquiry for Queens Finest Prints!" />
                            <input type="hidden" name="_template" value="table" />
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required/>
                              </div>
                            </div>
                            <div className="col-md-6"> 
                              <div className="form-group">
                                <label className="label" htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="designs">Inquire about a design:</label>
                                <select name="designs" id="designs" className="form-control">
                                  <option value="Funko Pop Stand">Funko Pop Stand</option>
                                  <option value="City Skyline">City Skyline</option>
                                  <option value="Video Game Stand">Video Game Stand</option>
                                  <option value="Sports/Trading Card Stand">Sports/Trading Card Stand</option>
                                  <option value="Box Organizer">Box Organizer</option>
                                  <option value="Upload Your Own Design">Upload Your Own Design</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">Upload Image *optional</label>
                                <input type="file" id="myFile" name="filename" accept="image/png, image/jpeg" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="message">Message</label>
                                <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" required></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <button type="submit" className="btn btn-primary round-pill">Send!</button>
                                {/* <div class="cont">  
                                  <button type="submit" className="btn btn-primary round-pill"><span>Send!</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62"/></button>
                                </div> */}
                              </div>
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact; 