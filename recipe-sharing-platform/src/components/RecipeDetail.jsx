/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => (recipe) === parseInt(id));
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