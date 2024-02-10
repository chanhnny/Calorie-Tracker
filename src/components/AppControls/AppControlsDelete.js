import React from 'react'

const AppControlsDelete = ({deleteAllMeals}) => {
  return (
    <div className = "app_controls_delete">
        <button className = "delete_all_button" onClick = {() => deleteAllMeals()}>DELETE ALL</button>
    </div>
  )
}

export default AppControlsDelete