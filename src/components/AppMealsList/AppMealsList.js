
const AppMealsList = ({ meals, deleteMealHandler }) => {
  
  
  return (
    
    <div className="app_meals_container_wrapper">
      {meals?.map((meal, index) => (
          <div key = {index} className = "app_meals_container_wrapper_inner">
            <div>{`${meal.mealName} : ${meal.calories} Calories ${meal.protein}g Protein ${meal.carbohydrates}g Carbs ${meal.fats}g Fats`}</div>
            <div>
            <button className="btn_delete_meal" onClick={() => deleteMealHandler(meal.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppMealsList;