import React from "react";
import "./styles.css";

const PortfolioSection = () => {
  return (
    <div id="work" className="section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>
                My <span>Portfolio</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-menu text-center mb-50">
            <button className="active" data-filter="*">
              All
            </button>
            <button data-filter=".go" className="">
              Go
            </button>
            <button data-filter=".python" className="">
              Python
            </button>
            <button data-filter=".rlang" className="">
              R
            </button>
            <button data-filter=".js" className="">
              Javascript
            </button>
            <button data-filter=".react" className="">
              React
            </button>
            <button data-filter=".react-native" className="">
              React Native
            </button>
            <button data-filter=".data-science" className="">
              Data Science
            </button>
          </div>
          <div className="row portfolio-style">
            <div className="grid">
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat1">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Art Work</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat2">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat1 cat2">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat3">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat1 cat3">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/5.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Art Work</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat3">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/6.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat3">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/6.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat3">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/6.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 grid-item cat3">
                <div className="portfolio hover-style">
                  <div className="portfolio-img">
                    <img src="assets/img/portfolio/6.jpg" alt="" />
                    <div className="portfolio-link">
                      <a
                        className="mfp-img portfolio-popup"
                        href="assets/img/portfolio/1.jpg"
                      >
                        <i className="fas fa-expand-arrows-alt fa-2x"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fas fa-external-link-alt fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-title">
                    <h3>
                      <a href="#">TITLE GOES HERE</a>
                    </h3>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more text-center">
            <a href="https://github.com/JaimeGo" target="_blank">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
