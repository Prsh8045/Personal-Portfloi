import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>RZK-2/377 Nihal Vihar.</p>
              <p>New Delhi India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +919041546975
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              prashantprs12@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
        <h4>About the company</h4>
        <p>
          This is me Prashant  Kumar.CEO & Founder Techking . I enjoy discussing
          new projects and design challenge.
        </p>
        <div className="Social">
          <FaFacebook
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaLinkedin
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
