import React from "react";

function RecipeRow ( {recipe, deleteRecipe} ) {
    const {name, cuisine, photo, ingredients, preparation} = recipe

    //handles click of delete button to prevent reload and call deleteRecipe function
    const deleteHandler = event => {
        event.preventDefault()
        deleteRecipe(recipe)
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img className="fit" src={photo}/></td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td><button name="delete" type="submit" onClick={deleteHandler}>Delete</button></td>
        </tr>
    )
}

export default RecipeRow