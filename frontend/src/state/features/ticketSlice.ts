import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientTicket, DatabaseTicket } from '../../interfaces/Ticket';
interface InitialState {
  tickets: DatabaseTicket[];
  ticket: ClientTicket;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  msg: string;
}

const initialState: InitialState = {
  tickets: [],
  ticket: {
    issue: '',
    description: '',
  },
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
    createTicketStart: (
      state,
      action: PayloadAction<{ ticketFormData: ClientTicket; token: string }>
    ) => {
      state.isLoading = true;
    },
    createTicketSuccess: (state, action: PayloadAction<DatabaseTicket>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.ticket = action.payload;
    },
    createTicketFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    getTicketsStart: (state, action: PayloadAction<{ token: string }>) => {
      state.isLoading = true;
    },
    getTicketsSuccess: (state, action: PayloadAction<DatabaseTicket[]>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tickets = action.payload;
    },
    getTicketsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    getTicketStart: (
      state,
      action: PayloadAction<{ token: string; id: string }>
    ) => {
      state.isLoading = true;
    },
    getTicketSuccess: (state, action: PayloadAction<DatabaseTicket>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.ticket = action.payload;
    },
    getTicketFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    closeTicketStart: (
      state,
      action: PayloadAction<{ token: string; id: string }>
    ) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action: PayloadAction<DatabaseTicket>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.ticket = action.payload;
      state.tickets.find((ticket) =>
        ticket._id === action.payload._id ? (ticket.status = 'closed') : ticket
      );
    },
    closeTicketFailed: (state, action: PayloadAction<string>) => {
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
