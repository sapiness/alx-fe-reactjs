import { create } from 'zustand';

 export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
 },
  deleteRecipe: (id) => {
    set(state => ({ recipes: state.recipes.filter(newRecipe => newRecipe.id !== id) }));
},
  toggleTask: (id) => {
    set((state) => ({recipes: state.recipes.map(newRecipe =>newRecipe.id === id ? { ...newRecipe, completed: !newRecipe.completed } : newRecipe)}));
  },
  updateRecipe: (id) => {
    set(state => ({recipes: state.recipes.map(newRecipe =>newRecipe.id === id ?{...newRecipe, updated: !newRecipe.updated } : newRecipe)}));
  },
  setRecipes: (recipes) => set({ recipes })
}));



