import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIPreferences } from '@/apis/APIPreferences';

const initialState = {
  status: 'idle',
  message: '',
  data: {},
};

export const getPreference = createAsyncThunk('preferences/getPreference', APIPreferences.getPreference);

const preferenceSlice = createSlice({
  name: 'get-preference',
  initialState,
  reducers: {
    resetGetPreferenceState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPreference.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(getPreference.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.message = '';
        state.data = payload;
      })
      .addCase(getPreference.rejected, (state, { error }) => {
        state.status = 'failed';
        state.message = error.message;
      });
  },
});

export const { resetGetPreferenceState } = preferenceSlice.actions;
export const selectPreference = (state) => state.getPreference;
export const preferenceReducer = preferenceSlice.reducer;
