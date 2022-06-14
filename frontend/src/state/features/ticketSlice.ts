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

    getTicketsStart: (state, action) => {
      state.isLoading = true;
    },
    getTicketsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tickets = action.payload;
    },
    getTicketsFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    getTicketStart: (state, action) => {
      state.isLoading = true;
    },
    getTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.ticket = action.payload;
    },
    getTicketFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    closeTicketStart: (state, action) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.ticket = action.payload;
      state.tickets.find((ticket) =>
        ticket._id === action.payload._id ? (ticket.status = 'closed') : ticket
      );
    },
    closeTicketFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },
  },
});
export const {
  getTicketsFailed,
  getTicketsStart,
  getTicketsSuccess,
  createTicketFailed,
  createTicketStart,
  createTicketSuccess,
  reset,
  getTicketFailed,
  getTicketStart,
  getTicketSuccess,
  closeTicketFailed,
  closeTicketStart,
  closeTicketSuccess,
} = ticketSlice.actions;
export default ticketSlice.reducer;
