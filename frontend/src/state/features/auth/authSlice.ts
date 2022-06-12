import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user')!);

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  msg: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerStart: (state, action) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    registerFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },

    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.msg = '';
    },
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = null;
    },
    logoutFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },
    loginStart: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },

    loginFailed: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  registerSuccess,
  registerStart,
  loginStart,
  loginSuccess,
  loginFailed,
  reset,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
