import React, { useState } from 'react';
function AddRecipeForm({ handleAddRecipe }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [ steps, setInstructions] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    const ingredient = event.target.value;
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      title,
      image,
      ingredients,
      steps,
    };
    handleAddRecipe(newRecipe);
    setTitle('');
    setImage('');
    setIngredients([]);
    setInstructions('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={handleImageChange} />
      </label>
      <label>
        Ingredients:
        <input
          type="text"
          value={ingredients[ingredients.length - 1]}
          onChange={handleIngredientsChange}
          placeholder="Add ingredient"
        />
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </label>
      <label>
        Instructions:
        <textarea value={ steps} onChange={handleInstructionsChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
export default AddRecipeForm;