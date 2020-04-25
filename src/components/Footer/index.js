import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer-social">
                <div className="socials-icons">
                  <a href="https://github.com/JaimeGo" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.kaggle.com/jaimego" target="_blank">
                    <i className="fab fa-kaggle"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaime-gonz%C3%A1lez-ortega-a48353a3/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://stackoverflow.com/users/10369155/jaimego?tab=profile">
                    <i className="fab fa-stack-overflow" target="_blank"></i>
                  </a>
                </div>
              </div>
              <div className="footer-copywrite">
                <p>@2018 Jaime González Ortega</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
