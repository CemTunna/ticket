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
    registerSuccess: (state, action) => {
      console.log('register', action.payload);
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    registerStart: (state, action) => {
      state.isLoading = true;
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
    logoutStart: (state) => {
      state.isLoading = true;
    },

    login: (state, action) => {
      console.log('login', action.payload);
    },
    loginRequest: (state, action) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  registerSuccess,
  registerStart,
  loginRequest,
  login,
  reset,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
