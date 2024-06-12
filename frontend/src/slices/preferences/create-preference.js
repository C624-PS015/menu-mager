import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIPreferences } from '@/apis/APIPreferences';

const initialState = {
  status: 'idle',
  message: '',
  data: {},
};

export const createPreference = createAsyncThunk('preferences/createPreference', APIPreferences.createPreference);

const createPreferenceSlice = createSlice({
  name: 'create-preference',
  initialState,
  reducers: {
    resetCreatePreferenceState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPreference.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(createPreference.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.message = 'Preference created successfully';
        state.data = payload;
      })
      .addCase(createPreference.rejected, (state, { error }) => {
        state.status = 'failed';
        state.message = error.message;
      });
  },
});

export const { resetCreatePreferenceState } = createPreferenceSlice.actions;
export const selectCreatePreference = (state) => state.createPreference;
export const createPreferenceReducer = createPreferenceSlice.reducer;
