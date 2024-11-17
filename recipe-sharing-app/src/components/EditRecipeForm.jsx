/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
const EditRecipeForm = ({ recipeId }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const recipe = useRecipeStore(state => state.recipes.find(recipe => (recipe.id) === recipeId));
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  useEffect(() => {
    setTitle(recipe?.title || '');
    setDescription(recipe?.description || '');
  }, [recipe]);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipeId, { title, description });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};
export default EditRecipeForm;