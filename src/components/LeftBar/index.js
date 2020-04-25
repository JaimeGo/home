import React from "react";
import "./styles.css";

const LeftBar = () => {
  return (
    <div className="left-bar-area">
      <div className="logo">
        <h2>
          <a href="index.html">
            <img src="assets/img/icon/favicon.png" />
          </a>
        </h2>
      </div>
      <div className="main-menu">
        <div className="menu-switch">
          <span className="menu-bar-one"></span>
          <span className="menu-bar-two"></span>
          <span className="menu-bar-three"></span>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                data-toggle="tooltip"
                data-placement="right"
                title="Home"
              >
                <i className="fa fa-home fa-2x"></i>
              </a>
            </li>
            <br />
            <li>
              <a
                href="#about"
                data-toggle="tooltip"
                data-placement="right"
                title="About"
              >
                <i className="fa fa-user fa-2x"></i>
              </a>
            </li>
            <br />
            <li>
              <a
                href="#work"
                data-toggle="tooltip"
                data-placement="right"
                title="Work"
              >
                <i className="fa fa-th fa-2x"></i>
              </a>
            </li>
            <br />
            <li>
              <a
                href="#contact"
                data-toggle="tooltip"
                data-placement="right"
                title="Contact"
              >
                <i className="fa fa-phone fa-2x"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social">
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
        <a
          href="https://stackoverflow.com/users/10369155/jaimego?tab=profile"
          target="_blank"
        >
          <i className="fab fa-stack-overflow"></i>
        </a>
      </div>
    </div>
  );
};

export default LeftBar;
