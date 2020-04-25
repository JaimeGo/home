import React from "react";
import "./styles.css";

const IntroductionSection = () => {
  return (
    <div id="home" className="home2 slider-area">
      <div className="particles-js" id="particles-js"></div>
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="slider-content">
                <div className="slider-title">
                  <h2 style={{ display: "inline-block" }}>Jaime González</h2>
                  <h4>Full Stack Developer</h4>
                  <br />
                  <h5>Python, Go, Javascript, Ruby</h5>
                </div>

                <h3>About me</h3>
                <p>
                  I am a passionate and well rounded developer with a keen
                  interest in all aspects of tecnology. My main focus is on data
                  science with Python and R, as well as web development with
                  Golang and React, and mobile development with React Native.
                </p>
                <br />
                <p>
                  I currently live in Chile, and in the past I have lived in
                  Spain and the Dominican Republic.
                </p>
                <br />

                <p>
                  I'm always looking to improve my skills in the field of web
                  development (frontend and backend) and cross-platform mobile
                  development.
                </p>
                <br />
                <p>
                  Send me a message if you would like me to colaborate with you
                  on your project.
                </p>
                <br />
                <p>
                  Below I provide download buttons for my cv (currently in
                  spanish) as well as the certificates I have acquired in
                  different courses, both in pdf.
                </p>
                <p></p>
                <a
                  href="assets/cv/cv.pdf"
                  className="cv-btn"
                  download
                  target="_blank"
                >
                  <i className="fa fa-download"></i>Download CV
                </a>
                <a
                  href="assets/certificates/certificates.pdf"
                  className="cv-btn"
                  download
                  target="_blank"
                  style={{ marginLeft: "25px" }}
                >
                  <i className="fa fa-download"></i>Download Certificates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
