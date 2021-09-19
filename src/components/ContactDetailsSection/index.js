import "./index.scss";
import React, { Component } from "react";
import logo from "../../assets/logo.JPG";
import { address, phoneNumber } from "../../utils/constants";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import whatsapp from "../../assets/whatsapp.svg";
import youtube from "../../assets/youtube.svg";

const ContactDetailsSection = () => {
  return (
    <div className="contact-detail-section-parent">
      <img src={logo} className="logo" />
      <div className="content">
        <span className="label">ADDRESS</span>
        <p>{address}</p>
      </div>
      <div className="content">
        <span className="label">PHONE</span>
        <p>{phoneNumber}</p>
      </div>
      <div className="content">
        <span className="label">QUICK LINKS</span>
        <ul
          style={{
            listStyleType: "none",
            paddingTop: "10px",
            paddingLeft: "0px",
          }}
        >
          <li>My Account</li>
          <li>About Us</li>
          <li>Keto Plans</li>
          <li>Our Dishes</li>
        </ul>
      </div>
      <div className="content">
        <span className="label">FOLLOW US</span>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={facebook} />
          <img src={whatsapp} />
          <img src={twitter} />
          <img src={insta} />
          <img src={youtube} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSection;
