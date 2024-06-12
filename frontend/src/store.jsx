import { configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  allergiesReducer,
  allergyReducer,
  createAllergyReducer,
  createPreferenceReducer,
  deleteAllergyReducer,
  deletePreferenceReducer,
  preferenceReducer,
  preferencesReducer,
  updateAllergyReducer,
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
  },
});

export default store;
