import { configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  allergiesReducer,
  allergyReducer,
  createAllergyReducer,
  createIngredientReducer,
  createPreferenceReducer,
  deleteAllergyReducer,
  deleteIngredientReducer,
  deletePreferenceReducer,
  ingredientReducer,
  ingredientsReducer,
  preferenceReducer,
  preferencesReducer,
  updateAllergyReducer,
  updateIngredientReducer,
  updatePreferenceReducer,
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
  },
});

export default store;
