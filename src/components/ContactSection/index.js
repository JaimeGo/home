import React from "react";
import "./styles.css";

const ContactSection = () => {
  return (
    <div>
      <div id="contact" className="section-padding contact-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>
                  Get in <span>Contact</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-box">
                <h4>Send me a message</h4>
                <form
                  id="contact-form"
                  className="form-group"
                  method="POST"
                  action="mail.php"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Write your message"
                    required
                  ></textarea>
                  <button className="submit" type="submit">
                    Send Message
                  </button>
                </form>
                <p className="form-messege"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-area">
                <div id="map"></div>
              </div>
              <div className="getIn-tuchBox wow swing">
                <h4>Contact</h4>
                <p>
                  <i className="fa fa-home"></i> Santiago de Chile
                </p>
                <p>
                  <i className="fa fa-phone"></i>
                  <a href="tel:56971417389">+56971417389</a>
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:jaimegoweb@gmail.com">jaimegoweb@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
