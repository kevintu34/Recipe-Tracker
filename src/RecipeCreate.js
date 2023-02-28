import React, { useState } from "react";

function RecipeCreate( {addRecipe} ) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //create intitial state of form to reset to and create useState off of
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  //create state based off of initial form state
  const [formData, setFormData] = useState(initialFormState)

  //change handler function, sets state when a change is made
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  //handles form submission, prevents default, calls addRecipe on the current formData, and resets formData to its initial
  const handleSubmit = event => {
    event.preventDefault()
    addRecipe(formData)
    setFormData({...initialFormState})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <td><input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name}/></td>
            <td><input type="text" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}/></td>
            <td><input type="url" name="photo" placeholder="URL" onChange={handleChange} value={formData.photo}/></td>
            <td><textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></td>
            <td><textarea name="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </thead>
      </table>
    </form>
  );
}

export default RecipeCreate;
