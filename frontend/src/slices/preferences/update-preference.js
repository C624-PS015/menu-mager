import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIPreferences } from '@/apis/APIPreferences';

const initialState = {
  status: 'idle',
  message: '',
  data: {},
};

export const updatePreference = createAsyncThunk('preferences/updatePreference', APIPreferences.updatePreference);

const updatePreferenceSlice = createSlice({
  name: 'update-preference',
  initialState,
  reducers: {
    resetUpdatePreferenceState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePreference.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(updatePreference.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.message = 'Preference updated successfully';
        state.data = payload;
      })
      .addCase(updatePreference.rejected, (state, { error }) => {
        state.status = 'failed';
        state.message = error.message;
      });
  },
});

export const { resetUpdatePreferenceState } = updatePreferenceSlice.actions;
export const selectUpdatePreference = (state) => state.updatePreference;
export const updatePreferenceReducer = updatePreferenceSlice.reducer;
