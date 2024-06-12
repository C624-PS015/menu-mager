import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIPreferences } from '@/apis/APIPreferences';

const initialState = {
  status: 'idle',
  message: '',
  data: {},
};

export const deletePreference = createAsyncThunk('preferences/createPreference', APIPreferences.deletePreference);

const deletePreferenceSlice = createSlice({
  name: 'delete-preference',
  initialState,
  reducers: {
    resetDeletePreferenceState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePreference.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(deletePreference.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.message = 'Preference deleted successfully';
        state.data = payload;
      })
      .addCase(deletePreference.rejected, (state, { error }) => {
        state.status = 'failed';
        state.message = error.message;
      });
  },
});

export const { resetDeletePreferenceState } = deletePreferenceSlice.actions;
export const selectDeletePreference = (state) => state.deletePreference;
export const deletePreferenceReducer = deletePreferenceSlice.reducer;
