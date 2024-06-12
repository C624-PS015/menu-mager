import { configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  createPreferenceReducer,
  deletePreferenceReducer,
  preferenceReducer,
  preferencesReducer,
  updatePreferenceReducer,
} from './slices';

const store = configureStore({
  reducer: {
    admin: adminReducer,

    getPreferences: preferencesReducer,
    getPreference: preferenceReducer,
    createPreference: createPreferenceReducer,
    deletePreference: deletePreferenceReducer,
    updatePreference: updatePreferenceReducer,
  },
});

export default store;
