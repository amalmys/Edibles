import "./basicLayout.scss";
import React, { Component } from "react";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import ContactDetailsSection from "../components/ContactDetailsSection";
import SelectPlan from "../pages/SelectPlan";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import DietPlans from "../pages/DietPlans";
import { copyRightMessage } from "../utils/constants";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

const basicLayout = () => {
  return (
    <div className="basic-component">
      <Header />
      <div>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/select-plan" />} />
          <Route path="/select-plan" component={SelectPlan} />
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/diet-plans" component={DietPlans} />
        </Switch>
      </div>
      <ContactSection />
      <ContactDetailsSection />
      <div className="copyright-section">{copyRightMessage}</div>
    </div>
  );
};

export default basicLayout;
