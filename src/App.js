import React, {useState, useEffect} from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppControlsDelete from './components/AppControls/AppControlsDelete';
import AppControlsInputs from './components/AppControls/AppControlsInputs';
import AppMealsList from './components/AppMealsList/AppMealsList';
import AppModel from './components/AppModel/AppModel';
import AppMealsFilter from './components/AppMealsFilter/AppMealsFilter';
import img1 from './images/saitama.jpg';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbohydrates, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal ={
      mealName,
      calories,
      protein,
      carbohydrates,
      fats,
      id: Math.floor(Math.random() * 1000),
    };
    const newMeals = oldMeals.concat(meal);
  
    if (calories <= 0 || mealName === "") {
      setOpenModel(true);
    } else {
      setMeals(newMeals);
      localStorage.setItem("meals", JSON.stringify(newMeals));
    }
  
    setMealName("");
    setCalories(0);
    setProtein(0);
    setCarbs(0);
    setFats(0);
  };

const deleteMealHandler = (id) => {
  const oldMeals = [...meals];
  const newMeals = oldMeals.filter((meal) => meal.id !== id);

  setMeals(newMeals);
  localStorage.setItem("meals", JSON.stringify(newMeals));
}

const deleteAllMeals = () => {
  setMeals ([]);
  localStorage.clear();
}

const totalCalories = meals !== null  
            ? meals.map((meal) => meal.calories).reduce((acc, value) => acc + +value, 0) : 0;
      useEffect(() => {
        const oldState = [...meals]
        if(selectedFilter === "Ascending") {
          const ascendingMeals = oldState.sort((a, b) => a.calories - b.calories);
          setMeals(ascendingMeals);
        }else if(selectedFilter === "Descending") {
          const descendingMeals = oldState.sort((a, b) => b.calories - a.calories);
          setMeals(descendingMeals);
        }
      }, [selectedFilter]);

      useEffect(()=> {
        const localStorageMeals = JSON.parse(localStorage.getItem('meals'));
        setMeals(localStorageMeals);
      }, [setMeals]);

      const totalProtein = meals !== null  
            ? meals.map((meal) => meal.protein).reduce((acc, value) => acc + +value, 0) : 0;
      const totalCarbs = meals !== null  
            ? meals.map((meal) => meal.carbohydrates).reduce((acc, value) => acc + +value, 0) : 0;
      const totalFats = meals !== null  
            ? meals.map((meal) => meal.fats).reduce((acc, value) => acc + +value, 0) : 0;
  return (
    <div className="App">
      <AppBar />
      { openModel ?  <AppModel setOpenModel = {setOpenModel}/> : ""}
      <AppControlsCounter totalCalories = {totalCalories} totalProtein = {totalProtein}
                          totalCarbs = {totalCarbs} totalFats = {totalFats} />
      <AppControlsDelete deleteAllMeals = {deleteAllMeals}/>
      <AppControlsInputs 
        addMealsHandler = {addMealsHandler} 
        mealName = {mealName} 
        calories = {calories}
        protein = {protein}
        carbohydrates = {carbohydrates}
        fats = {fats} 
        setMealName = {setMealName} 
        setCalories = {setCalories}
        setProtein = {setProtein}
        setCarbs = {setCarbs}
        setFats = {setFats}/>
      <div className = "app_meals_container">
      <AppMealsFilter selectedFilter = {selectedFilter} setSelectedFilter = {setSelectedFilter}/>
       <AppMealsList 
          meals = {meals}
          deleteMealHandler = {deleteMealHandler}/>
      </div>
      </div>
  );
};

export default App;
