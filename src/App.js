import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //call setter function to clone recipe state and add new recipe
  const addRecipe = (recipeToAdd) => {
    setRecipes([...recipes, recipeToAdd])
  }

  //define new variable to filter off of and filter out the recipe that matches the one we want to delete
  const deleteRecipe = (recipeToDelete) => {
    const newRecipes = recipes
    setRecipes(newRecipes.filter(recipe=>recipe !== recipeToDelete))
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
