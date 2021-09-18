import React, { Component, useState } from "react";

const withMealOption = (WrappedComponent, incrementNumber) => {
  const WithMealOption = (props) => {
    const [activeOption, setActiveOption] = useState("A");
    const { meal } = props;
    const handleClick = (e) => {
      setActiveOption(e.target.value);
    };
    return (
      <WrappedComponent
        activeOption={activeOption}
        handleClick={(e) => handleClick}
        meal={meal}
      />
    );
  };
  return WithMealOption;
};

export default withMealOption;
