import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(newRecipe => newRecipe.id !== id) })),
  // updateRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));


export default useRecipeStore;