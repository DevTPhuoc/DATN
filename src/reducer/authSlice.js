import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    checkAuth: (state) => {
      // Do something meaningful with state.isAuthenticated and state.user
      // For example, log them or use them in a conditional statement
      if (state.isAuthenticated) {
        console.log('User is authenticated');
      } else {
        console.log('User is not authenticated');
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
