/* eslint-disable react/prop-types */

import { useRecipeStore } from './recipeStore';
 import EditRecipeForm from './EditRecipeForm';
 import DeleteRecipeButton from './DeleteRecipeButton';
 DeleteRecipeButton

const RecipeDetails = ({ recipeId,  deleteRecipe }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>
        <li key={recipe.id} className={`flex items-center mb-2 p-2 rounded-md bg-gray-100`}>
      <h1>{recipe?.title}</h1>
      <p>{recipe?.description}</p>
      <EditRecipeForm recipeId={recipeId} />
      <DeleteRecipeButton recipeId={recipeId} />
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <button
              onClick={() => deleteRecipe(recipe.id)}
              className="bg-red-500 text-white rounded-md py-1 px-2 cursor-pointer"
            >
              Remove
            </button>

  </li>
    </div>
  );
}

export default RecipeDetails;