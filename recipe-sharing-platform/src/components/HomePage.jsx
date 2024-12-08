import React, { useState, useEffect } from 'react';
function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const response = await fetch('./alx-fe-reactjs/recipe-sharing-platform/src/data.json', {headers : {'Content-Type': 'application/json', 'Accept': 'application/json'}});
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadRecipes();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <h1>Recipe Sharing Platform</h1>
      <card className='rounded-lg shadow-lg hover:bg-blue-700 text-black'>
      <ul>
        {recipes.map((recipe) => (
          <li key={(recipe.id)}>
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
           
          </li>
        ))}
      </ul>
      </card>
    </div>
  );
}
export default HomePage;
      