import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIPreferences } from '@/apis/APIPreferences';

const initialState = {
  status: 'idle',
  message: '',
  data: [],
};

export const getPreferences = createAsyncThunk('preferences/getPreferences', APIPreferences.getPreferences);

const preferencesSlice = createSlice({
  name: 'get-preferences',
  initialState,
  reducers: {
    resetGetPreferencesState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPreferences.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(getPreferences.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.message = '';
        state.data = payload;
      })
      .addCase(getPreferences.rejected, (state, { error }) => {
        state.status = 'failed';
        state.message = error.message;
      });
  },
});

export const { resetGetPreferencesState } = preferencesSlice.actions;
export const selectPreferences = (state) => state.getPreferences;
export const preferencesReducer = preferencesSlice.reducer;
