import React from "react";
import "./styles.css";

const ServicesSection = () => {
  return (
    <section className="section-padding" id="service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="section-title">
              <h2>
                My <span>Services</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sx-6">
            <div className="single-service sbg-1 wow fadeInUp">
              <i className="fas fa-code fa-2x"></i>
              <h2>Web development</h2>
              <p>
                I can help you bring to life beatiful applications with Golang
                and it's standard libray, optimized for concurrency and speed. I
                also work with React on the frontend.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sx-6">
            <div className="single-service sbg-2 wow fadeInUp">
              <i className="fas fa-mobile-alt fa-2x"></i>
              <h2>Cross platform mobile apps</h2>
              <p>
                I can craft mobile apps for all the major platforms that will
                satisfy all your requirements and look great, using the React
                Native framework.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sx-6">
            <div className="single-service sbg-3 wow fadeInUp">
              <i className="fas fa-pen-fancy fa-2x"></i>
              <h2>Web design</h2>
              <p>
                I love to make responsive, esthetically pleasing websites that
                follow good UI/UX principles. The structure of the websites I
                make will be easy to understand and expand if necessary.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sx-6">
            <div className="single-service sbg-3 wow fadeInUp">
              <i className="fas fa-search-plus fa-2x"></i>
              <h2>Data Science</h2>
              <p>
                I can extract insight from data using modern techniques and
                algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
