import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  msg: '',
};
export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.msg = '';
    },
    createTicketStart: (state, action) => {
      state.isLoading = true;
    },
    createTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.ticket = action.payload;
    },
    createTicketFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },
  },

  // logoutStart: (state) => {
  //   state.isLoading = true;
  // },
  // logoutSuccess: (state) => {
  //   state.isLoading = false;
  //   state.isSuccess = true;
  //   state.user = null;
  // },
  // logoutFailed: (state, action) => {
  //   state.isLoading = false;
  //   state.isError = true;
  //   state.msg = action.payload;
  // },
});
export const {
  createTicketFailed,
  createTicketStart,
  createTicketSuccess,
  reset,
} = ticketSlice.actions;
export default ticketSlice.reducer;
