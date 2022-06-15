import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  msg: '',
};
export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState,
    getNotesStart: (state, action) => {
      state.isLoading = true;
    },
    getNotesSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.notes = action.payload;
    },
    getNotesFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },
  },
});
export const { reset, getNotesFailed, getNotesStart, getNotesSuccess } =
  noteSlice.actions;
export default noteSlice.reducer;
