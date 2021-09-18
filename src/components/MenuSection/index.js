import "./index.scss";
import React, { Component } from "react";
import verified from "../../assets/verified.svg";
import DateSection from "../../components/DateSection";
import MealItem from "../../components/MealItem";
import { Button } from "antd";
import { mealsList } from "../../utils/constants";

const MenuSection = () => {
  return (
    <div className="menu-section-parent">
      <div className="button-section">
        <Button className="menu-button">
          <img src={verified} />
          Choose Default Menu
        </Button>
      </div>
      <div className="menu-section">
        <DateSection />
        {mealsList.map((meal) => {
          return <MealItem meal={meal} />;
        })}
      </div>
      <Button className="proceed-button">Proceed</Button>
    </div>
  );
};

export default MenuSection;
