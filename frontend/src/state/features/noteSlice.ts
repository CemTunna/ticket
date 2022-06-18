import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientNote, DatabaseNote } from '../../interfaces/Note';
interface InitialState {
  notes: DatabaseNote[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  msg: string;
}

const initialState: InitialState = {
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
    getNotesStart: (
      state,
      action: PayloadAction<{ id: string; token: string }>
    ) => {
      state.isLoading = true;
    },
    getNotesSuccess: (state, action: PayloadAction<DatabaseNote[]>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.notes = action.payload;
    },
    getNotesFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    createNotesStart: (
      state,
      action: PayloadAction<{ noteText: ClientNote; id: string; token: string }>
    ) => {
      console.log('start create note', action);
      state.isLoading = true;
    },
    createNotesSuccess: (state, action: PayloadAction<DatabaseNote>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.notes.push(action.payload);
    },
    createNotesFailed: (state, action: PayloadAction<string>) => {
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
