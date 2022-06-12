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
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    registerStart: (state, action) => {
      state.isLoading = true;
    },
    registerFailed: (state, action) => {
      console.log(action.payload);
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
    login: (state, action) => {
      console.log('login', action.payload);
    },
    loginRequest: (state, action) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {},
});
export const { registerSuccess, registerStart, loginRequest, login, reset } =
  authSlice.actions;
export default authSlice.reducer;
