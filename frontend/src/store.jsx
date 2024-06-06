import { configureStore } from '@reduxjs/toolkit';
import { adminReducer, preferencesReducer } from './slices';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    preferences: preferencesReducer,
  },
});

export default store;
