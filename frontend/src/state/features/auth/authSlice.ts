import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
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
    },
    registerStart: (state, action) => {
      state.isLoading = true;
    },
    registerFailed: (state, action) => {
      state.isLoading = false;
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
export const { registerSuccess, registerStart, loginRequest, login } =
  authSlice.actions;
export default authSlice.reducer;
