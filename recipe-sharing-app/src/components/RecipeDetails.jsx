/* eslint-disable react/prop-types */

import { useRecipeStore } from './recipeStore';
 import EditRecipeForm from './EditRecipeForm';
 import DeleteRecipeButton from './DeleteRecipeButton';
 import { Link } from 'react-router-dom';


const RecipeDetails = ({ recipeId}) => {
  const recipe = useRecipeStore(state =>
    state.recipes?.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>
       
      <h1>{recipe?.title}</h1>
      <p>{recipe?.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <EditRecipeForm recipeId={recipeId} />
      <DeleteRecipeButton recipeId={recipeId} />
      <Link to="/recipes">Back to Recipe List</Link>

    </div>
  );
}

export default RecipeDetails;