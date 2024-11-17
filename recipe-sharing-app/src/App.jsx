import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/RecipeList'
import AddRecipeForm from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/AddRecipeForm'
import RecipeDetails from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/RecipeDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <div>
      <AddRecipeForm />
      <RecipeList />
      <RecipeDetails />
      </div>
    </>
  )
}

export default App
