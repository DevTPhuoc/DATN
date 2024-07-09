import {SET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY } from "../constants/actionTypes";
export const setCartItems = (items) => ({
  type: SET_CART_ITEMS,
  payload: items,
});
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});