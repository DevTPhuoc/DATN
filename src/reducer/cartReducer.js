import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    // You can add more actions like removeFromCart, updateQuantity, etc.
  },
  addToCart: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.items.push({ ...item, quantity: 1 });
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
