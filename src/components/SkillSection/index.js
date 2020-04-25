import React from "react";
import "./styles.css";

const SkillSection = () => {
  return (
    <div id="about" className="section-padding gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <div className="skill-img">
              <img src="assets/img/skill/skill-man.png" alt="" />
            </div>
          </div>
          <div className="col-md-7 col-sm-6">
            <div className="section-title skill-title">
              <h2>
                My <span>Abilities</span>
              </h2>
            </div>
            <div className="my-skill">
              <div className="skill wow fadeInUp">
                <div className="progress">
                  <div className="lead">HTML | CSS</div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>95%</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="lead">Go</div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>90%</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="lead">Python, R</div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>90%</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="lead">Javascript</div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>90%</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="lead">Frontend: React Framework</div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>90%</span>
                  </div>
                </div>

                <div className="progress">
                  <div className="lead">Mobile: React Native</div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>90%</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="lead">
                    Others: Git, Sass, Pug, Docker, Linux
                  </div>
                  <div className="progress-bar" style={{ width: "99%" }}>
                    <span>80%</span>
                  </div>
                </div>
                <a href="#contact" className="cv-btn btn-active">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
