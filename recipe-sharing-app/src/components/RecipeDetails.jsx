/* eslint-disable react/prop-types */

import { useRecipeStore } from './recipeStore';


const RecipeDetails = ({ recipeId, deleteRecipe }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>

      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      
      <button
              onClick={() => deleteRecipe(recipe.id)}
              className="bg-red-500 text-white rounded-md py-1 px-2 cursor-pointer"
            >
              Remove
            </button>
    </div>
    
  );
};

export default RecipeDetails;

