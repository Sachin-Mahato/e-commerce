/* eslint-disable prefer-const */
import {
  ADD_TO_CART,
  CLEAR_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  TOTAL,
  REMOVE_ITEM,
} from "./actionTypes";
import { CartStateTypes, ProductsTypes, CartReducerTypes } from "@/types";

const cartReducer: CartReducerTypes = (state, action): CartStateTypes => {
  // add to cart
  if (action.type == ADD_TO_CART) {
    action["payload"]["quantity"] = 1;
    let { title, id, image, price, quantity } = action.payload;

    let cartItems = {
      title,
      id,
      image,
      price,
      quantity,
    };
    let findItems = state["cart"]?.find((item: ProductsTypes) => {
      // console.log(item)
      if (item.id == id) {
        return item;
      }
    });
    if (!findItems) {
      return {
        ...state,
        cart: [...state["cart"], cartItems],
      };
    }
  }

  // remove single item
  if (action.type == REMOVE_ITEM) {
    return {
      ...state,
      cart: state["cart"].filter(
        (item: ProductsTypes) => item.id !== action.payload
      ),
    };
  }

  // remove all items from the cart
  if (action.type == CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // Increase Quantity
  if (action.type == INCREASE_QUANTITY) {
    let temp = state.cart.map((item: ProductsTypes) => {
      if (item.id == action.payload) {
        return { ...item, quantity: (item.quantity ?? 0) + 1 };
      }
      return item;
    });

    return {
      ...state,
      cart: [...temp],
    };
  }
  // Decrease Quantity
  if (action.type == DECREASE_QUANTITY) {
    let temp = state.cart
      .map((item: ProductsTypes) => {
        if (item.id == action.payload) {
          return { ...item, quantity: (item.quantity ?? 0) - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return {
      ...state,
      cart: [...temp],
    };
  }
  // Total Amount
  if (action.type == TOTAL) {
    let { total, quantity } = state.cart.reduce(
      (acc, currItem) => {
        const { price, quantity } = currItem;
        const itemTotal = price * (quantity ?? 0);
        acc.total += itemTotal;
        acc.quantity += quantity ?? 0;
        return acc;
      },
      {
        total: 0,
        quantity: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return {
      ...state,
      total: total,
      quantity: quantity,
    };
  }

  return state;
};

export default cartReducer;
