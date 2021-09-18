import "./index.scss";
import React, { Component } from "react";
import withMealOption from "../../components/withMealOption";
import salad from "../../assets/salad.png";
import mozaralla from "../../assets/mozaralla.JPG";
import { Radio } from "antd";
import { toggleOptions } from "../../utils/constants";

const MealItem = (props) => {
  const { meal, activeOption, handleClick } = props;
  return (
    <div className="meal-item">
      {meal}
      <div
        style={{
          backgroundImage:
            activeOption === "B" ? `url(${salad})` : `url(${mozaralla})`,
          backgroundSize: "cover",
        }}
        className="meal-options"
      >
        <div className="toggle-button">
          <Radio.Group
            options={toggleOptions}
            onChange={handleClick()}
            value={activeOption}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      </div>
      <div style={{ paddingTop: "22px", color: "var(--black)" }}>
        {activeOption === "B" ? "Asian Beef Salad" : "Beef Salad-Mozzarela"}
      </div>
    </div>
  );
};

export default withMealOption(MealItem);
