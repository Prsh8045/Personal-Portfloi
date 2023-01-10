import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/Reactjs12.png";
import pic2 from "../assets/Reactjs2.png";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am ?</h1>
        <p>
          In a React front-end developer.I create responsive secure Website for
          myclients.
        </p>
        <Link to="/Contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pic1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={pic2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
