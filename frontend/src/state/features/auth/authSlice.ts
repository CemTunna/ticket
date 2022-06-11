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
    register: (state, action) => {
      console.log('from reducer');
    },
    registerRequest: (state, action) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {},
});
export const { register, registerRequest } = authSlice.actions;
export default authSlice.reducer;
