import React from 'react'

const AppMealsFilter = ({setSelectedFilter, selectedFilter}) => {
  return (
    <div className = "app_meals_filter_select">
        <select defaultValue = {selectedFilter}
                onChange = {(e) => setSelectedFilter(e.target.value)}>
            <option value = ""></option>
            <option value = "Ascending">Lowest</option>
            <option value = "Descending">Highest</option>
        </select>
    </div>
  )
}

export default AppMealsFilter