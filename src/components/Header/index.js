import "./index.scss";
import React, { Component } from "react";
import logo from "../../assets/logo.JPG";
import { NavLink, withRouter, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section-parent">
      <header>
        <div className="header-section">
          <NavLink
            to="/home"
            className="navigation"
            activeClassName="selected-nav"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="navigation"
            activeClassName="selected-nav"
          >
            About us
          </NavLink>
          <NavLink
            to="/diet-plans"
            className="navigation"
            activeClassName="selected-nav"
          >
            Diet Plans
          </NavLink>
          <NavLink
            to="/select-plan"
            className="navigation"
            activeClassName="selected-nav"
          >
            Select your plans
          </NavLink>
          <img src={logo} className="logo"/>
        </div>
      </header>
    </div>
  );
};

export default Header;
