import { configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  allergiesReducer,
  allergyReducer,
  createAllergyReducer,
  createIngredientReducer,
  createPlanReducer,
  createPreferenceReducer,
  createRecipeReducer,
  deleteAllergyReducer,
  deleteIngredientReducer,
  deletePlanReducer,
  deletePreferenceReducer,
  deleteRecipeReducer,
  ingredientReducer,
  ingredientsReducer,
  planReducer,
  plansReducer,
  preferenceReducer,
  preferencesReducer,
  recipeReducer,
  recipesReducer,
  updateAllergyReducer,
  updateIngredientReducer,
  updatePlanReducer,
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

    plans: plansReducer,
    plan: planReducer,
    'create-plan': createPlanReducer,
    'delete-plan': deletePlanReducer,
    'update-plan': updatePlanReducer,
  },
});

export default store;
