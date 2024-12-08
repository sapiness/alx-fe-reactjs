import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        const recipeData = data.find((recipe) => (recipe) === parseInt(id));
        setRecipe(recipeData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadRecipe();
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
export default RecipeDetail;