import "./index.scss";
import React, { Component } from "react";
import middleImage from "../../assets/middleImage.svg";
import MenuSection from "../../components/MenuSection";

const SelectPlan = () => {
  return (
    <div className="select-plan-parent">
      <div className="top-heading">Choose Your Dishes</div>
      <img src={middleImage} />
      <div className="middle-heading">
        As per your recomented calorie, choose your dishes from below
      </div>
      <MenuSection />
    </div>
  );
};

export default SelectPlan;
