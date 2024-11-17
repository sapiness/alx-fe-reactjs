 import { useRecipeStore }  from './recipeStore';
 import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
       
        {recipes.map(recipe => (
          <div key={(recipe.id)}>
             <h3>{recipe.title}</h3>
             <p>{recipe.description}</p>
            <Link to={`/recipes/${(recipe.id)}`}>
            </Link>
          </div>
        ))}
    
      <Link to="/add-recipe">Add Recipe</Link>
      </div>
    );
  };

export default RecipeList;