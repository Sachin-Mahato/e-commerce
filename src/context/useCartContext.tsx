"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function useCartContext() {
  return useContext(CartContext);
}

export default useCartContext;
