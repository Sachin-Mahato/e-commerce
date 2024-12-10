/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
"use client";
import React, {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import reducer from "./reducer";
import fetchAllProducts from "@/service/fetchData";
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_ITEM_WISHLIST,
  WISHLIST,
  POPULARITY_SORT,
  SLICE_ITEMS,
  All,
  SELECT_CATEGORY,
} from "./actionTypes";
import { AppContextTypes, InitialStateTypes } from "../types/index.js";
var defaultAppContext: AppContextTypes = {
  loading: false,
  products: [],
  error: null,
  wishlist: [],
  filterItemsByPrice: [],
  filterCategory: [],
  isMenuOpen: false,
  selectValue: "",
  range: 0,

  toggleClickHandler: () => {},
  wishlistHandler: () => {},
  sortByPopularity: () => {},
  selectClickHandler: () => {},
  removeItemFromWishlist: () => {},
  sliceByPrice: () => {},
  selectCategory: () => {},

  selectRef: { current: null },
  wishlistRef: { current: null },
  priceRef: { current: null },
};

var AppContext = createContext<AppContextTypes>(defaultAppContext);

var initialState: InitialStateTypes = {
  loading: false,
  products: [],
  error: null,
  wishlist: JSON.parse(localStorage.getItem("wishlist") ?? "[]"),
  filterItemsByPrice: [],
  filterCategory: [],
};

function AppContextProvider({ children }: { children: React.ReactNode }) {
  var [state, dispatch] = useReducer(reducer, initialState);
  var [isMenuOpen, setIsMenuOpen] = useState(false);
  var [selectValue, setSelectValue] = useState("");
  var [range, setRange] = useState(5);
  var selectRef = useRef(null);
  var wishlistRef = useRef(null);
  var priceRef = useRef(5);

  function removeItemFromWishlist(id: number) {
    dispatch({ type: REMOVE_ITEM_WISHLIST, payload: id });
  }

  function toggleClickHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  function wishlistHandler(id: number) {
    dispatch({ type: WISHLIST, payload: id });
  }

  function sortByPopularity(value: string) {
    dispatch({ type: POPULARITY_SORT, payload: value });
  }

  function selectClickHandler(selectRef: React.RefObject<HTMLSelectElement>) {
    setSelectValue(selectRef.current.value);
  }

  function sliceByPrice(evt: React.ChangeEvent<HTMLInputElement>) {
    var selectVal = (evt.target as HTMLInputElement).value;
    setRange(Number(selectVal));
    dispatch({ type: SLICE_ITEMS, payload: Number(selectVal) });
  }

  function selectCategory(evt: React.ChangeEvent<HTMLSelectElement>) {
    const selectElement = evt.target; // This is already typed as HTMLSelectElement
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectCate = selectedOption?.textContent?.trim().toLowerCase();

    if (!selectCate) {
      console.error("No category selected or textContent is null.");
      return;
    }

    if (selectCate === All) {
      dispatch({ type: SELECT_CATEGORY, payload: All });
    } else {
      dispatch({ type: SELECT_CATEGORY, payload: selectCate });
    }
  }

  useEffect(() => {
    (async () => {
      dispatch({
        type: FETCH_PRODUCTS_START,
        payload: {
          loading: true,
          error: null,
        },
      });
      try {
        const getAllProducts = await fetchAllProducts();
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: {
            loading: false,
            error: null,
            products: getAllProducts,
            filterItemsByPrice: getAllProducts,
            filterCategory: getAllProducts,
          },
        });
      } catch (error) {
        dispatch({
          type: FETCH_PRODUCTS_ERROR,
          payload: {
            loading: false,
            error: error instanceof Error ? error.message : String(error), // Safely handle error
          },
        });
        console.error(`error in fetching all products ${error}`);
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        isMenuOpen,
        toggleClickHandler,
        wishlistHandler,
        sortByPopularity,
        selectValue,
        selectRef,
        selectClickHandler,
        removeItemFromWishlist,
        wishlistRef,
        sliceByPrice,
        priceRef,
        range,
        selectCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
