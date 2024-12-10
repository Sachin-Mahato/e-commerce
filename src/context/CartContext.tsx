/* eslint-disable no-var */
"use client";
import React, { createContext, useReducer, useEffect } from "react";
import cartReducer from "./cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  TOTAL,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";
import { CartContextTypes, ProductsTypes, CartStateTypes } from "@/types";

const defaultValue: CartContextTypes = {
  state: {
    cart: [],
    total: 0,
    quantity: 0,
  },
  dispatch: () => {},
  addToCart: () => {},
  clearCart: () => {},
  removeItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
};

var CartContext = createContext<CartContextTypes>(defaultValue);
var initialState: CartStateTypes = {
  cart: JSON.parse(localStorage.getItem("cart") ?? "[]"),
  total: 0,
  quantity: 0,
};

function CartContextProvider({ children }: { children: React.ReactNode }) {
  var [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(item: ProductsTypes) {
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }
  function removeItem(id: number | string) {
    dispatch({ type: REMOVE_ITEM, payload: id });
  }

  function increaseQuantity(id: number) {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  }

  function decreaseQuantity(id: number) {
    dispatch({ type: DECREASE_QUANTITY, payload: id });
  }
  useEffect(() => {
    dispatch({ type: TOTAL });
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        clearCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
