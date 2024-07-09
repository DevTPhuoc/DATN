import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../reducer/authSlice.js";
import cartReducer from "../reducer/cartReducer.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  

});

export default store;