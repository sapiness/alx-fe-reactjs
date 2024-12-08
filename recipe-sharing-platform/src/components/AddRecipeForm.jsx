/* eslint-disable react/prop-types */
import React, { useState } from 'react';
function AddRecipeForm({ handleAddRecipe }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};
    if (!title) {
      errors.title = 'Title is required';
    }
    if (!image) {
      errors.image = 'Image is required';
    }
    if (ingredients.length === 0) {
      errors.ingredients = 'At least one ingredient is required';
    }
    if (!steps) {
      errors.steps = 'Instructions are required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
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
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Add Recipe</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className={`block w-full p-2 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Image
        </label>
        <input
          className={`block w-full p-2 border rounded ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
          type="text"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients
        </label>
        <input
          className={`block w-full p-2 border rounded ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
          type="text"
          id="ingredients"
          value={ingredients[ingredients.length - 1]}
          onChange={(event) => {
            const newIngredient = event.target.value;
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
          }}
          placeholder="Add ingredient"
        />
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className={`block w-full p-2 border rounded ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
          id="instructions"
          value={steps}
          onChange={(event) => setInstructions(event.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
}
export default AddRecipeForm;