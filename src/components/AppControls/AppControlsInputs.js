import React from 'react'

const AppControlsInputs = ({addMealsHandler, calories, mealName, setCalories, setMealName, protein, setProtein, 
                            carbohydrates, setCarbs, fats, setFats}) => {

    const onAddMealsClick = () => {
      addMealsHandler();
    }
  return (
    <div className = "app_controls">
        <div className = "app_controls_inputs">
            <input type = "text"
                   placeholder = "Meal"
                   value = {mealName}
                   onChange = {(e) => setMealName(e.target.value)}>
                   </input>
                  <div className = "nutrition">
                   <input className ="nutrition_input"
                          type = "number"
                          placeholder = "Calories"
                          value={calories !== 0 ? calories : ''}
                          onChange = {(e) => setCalories(e.target.value)}
                          min = {0}>
                          </input>
                          <input className ="nutrition_input"
                                 type = "number"
                                 placeholder = "Protein"
                                 value={protein !== 0 ? protein : ''}
                                 onChange = {(e) => setProtein(e.target.value)}
                                 min = {0}>
                                </input>
                          <input className ="nutrition_input"
                                  type = "number"
                                  placeholder = "Carbs"
                                  value={carbohydrates !== 0 ? carbohydrates : ''}
                                  onChange = {(e) => setCarbs(e.target.value)}
                                  min = {0}>
                          </input>
                          <input className ="nutrition_input"
                                  type = "number"
                                  placeholder = "Fats"
                                  value={fats !== 0 ? fats : ''}
                                  onChange = {(e) => setFats(e.target.value)}
                                  min = {0}>
                          </input>
                          </div>
        </div>
        <button id = "add_button" className = "app_controls, app_controls_inputs" onClick = {onAddMealsClick}>Add Meal</button>
    </div>
  )
}

export default AppControlsInputs