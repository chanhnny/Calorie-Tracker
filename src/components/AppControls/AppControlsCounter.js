import React from 'react';

const AppControlsCounter = ({totalCalories, totalProtein, totalCarbs, totalFats}) => {
  return (
    <div className = "app_controls_counter">
        <h2>Total Calories: <span id="counter">{totalCalories}</span> </h2>
        <h2>Total Proteins: <span id="counter">{totalProtein}</span> </h2>
        <h2>Total Carbs: <span id="counter">{totalCarbs}</span> </h2>
        <h2>Total Fats: <span id="counter">{totalFats}</span> </h2>
    </div>
  );
};

export default AppControlsCounter