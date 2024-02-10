import React from 'react'

const AppModel = ({setOpenModel}) => {
  return (
    <div className = "app_model">
        <h3>Please enter your meals for the day and it's nutrition facts.</h3>
        <button className = "btn_close_model" onClick = {() => setOpenModel (false)}>Close</button>
    </div>
  )
}

export default AppModel