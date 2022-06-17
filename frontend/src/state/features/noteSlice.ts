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

    createNotesStart: (state, action) => {
      console.log('starti', action);
      state.isLoading = true;
    },
    createNotesSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.notes.push(action.payload);
    },
    createNotesFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },
  },
});
export const {
  createNotesFailed,
  createNotesStart,
  createNotesSuccess,
  reset,
  getNotesFailed,
  getNotesStart,
  getNotesSuccess,
} = noteSlice.actions;
export default noteSlice.reducer;
