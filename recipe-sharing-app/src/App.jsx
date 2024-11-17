import './App.css'
import RecipeList from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/RecipeList'
import AddRecipeForm from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/AddRecipeForm'
import RecipeDetails from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/RecipeDetails'
// import DeleteRecipeButton from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/DeleteRecipeButton'
// import EditRecipeForm from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/EditRecipeForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RecipeApp from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/recipe-sharing-app/src/components/RecipeApp';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
    </BrowserRouter>
      <div>
      <AddRecipeForm />
      <RecipeList />
      <RecipeDetails />
      
      </div>
    </>
  )
}

export default App
