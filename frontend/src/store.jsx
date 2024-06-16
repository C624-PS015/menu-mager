import { configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  allergiesReducer,
  allergyReducer,
  createAllergyReducer,
  createIngredientReducer,
  createPreferenceReducer,
  createRecipeReducer,
  deleteAllergyReducer,
  deleteIngredientReducer,
  deletePreferenceReducer,
  deleteRecipeReducer,
  ingredientReducer,
  ingredientsReducer,
  preferenceReducer,
  preferencesReducer,
  recipeReducer,
  recipesReducer,
  updateAllergyReducer,
  updateIngredientReducer,
  updatePreferenceReducer,
  updateRecipeReducer,
} from './slices';

const store = configureStore({
  reducer: {
    admin: adminReducer,

    preferences: preferencesReducer,
    preference: preferenceReducer,
    'create-preference': createPreferenceReducer,
    'delete-preference': deletePreferenceReducer,
    'update-preference': updatePreferenceReducer,

    allergies: allergiesReducer,
    allergy: allergyReducer,
    'create-allergy': createAllergyReducer,
    'delete-allergy': deleteAllergyReducer,
    'update-allergy': updateAllergyReducer,

    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    'create-ingredient': createIngredientReducer,
    'delete-ingredient': deleteIngredientReducer,
    'update-ingredient': updateIngredientReducer,

    recipes: recipesReducer,
    recipe: recipeReducer,
    'create-recipe': createRecipeReducer,
    'delete-recipe': deleteRecipeReducer,
    'update-recipe': updateRecipeReducer,
  },
});

export default store;
