import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  REMOVE_ITEM_WISHLIST,
  WISHLIST,
  POPULARITY_SORT,
  SLICE_ITEMS,
  SELECT_CATEGORY,
  All,
} from "./actionTypes";
import { Reducer, StateTypes } from "@/types/index";

const reducer: Reducer = (state, action): StateTypes => {
  if (action.type == FETCH_PRODUCTS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type == FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      loading: true,
      products: action.payload.products,
      filterItemsByPrice: action.payload.filterItemsByPrice,
      filterCategory: action.payload.filterCategory,
      error: null,
    };
  }

  if (action.type == FETCH_PRODUCTS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  }

  // remove item from wishlist
  if (action.type == REMOVE_ITEM_WISHLIST) {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id != action.payload),
    };
  }

  // Wishlist

  if (action.type == WISHLIST) {
    const findWishlistItems = state["products"].find((item) => {
      if (item.id == Number(action.payload)) {
        return item;
      }
    });

    if (findWishlistItems) {
      return {
        ...state,
        products: [...state["products"]],
        wishlist: [...state["wishlist"], findWishlistItems],
      };
    }

    return state;
  }

  // sort by popularity

  if (action.type == POPULARITY_SORT) {
    if (action.payload == "popularity") {
      state["products"].sort((x, y) => {
        const rateX = x?.rating?.rate ?? 0;
        const rateY = y?.rating?.rate ?? 0;
        return rateY - rateX;
      });
    }
    if (action.payload == "relevance") {
      state["products"].sort((x, y) => {
        const rateX = x?.rating?.rate ?? 0;
        const rateY = y?.rating?.rate ?? 0;
        return rateY - rateX;
      });
    }
    if (action.payload == "") {
      state["products"].sort((x, y) => {
        const rateX = x?.rating?.rate ?? 0;
        const rateY = y?.rating?.rate ?? 0;
        return rateY - rateX;
      });
    }
    if (action.payload == "low-to-high") {
      state["products"].sort((x, y) => x.price - y.price);
    }
    if (action.payload == "high-to-low") {
      state["products"].sort((x, y) => y.price - x.price);
    }
  }
  // slice item by price

  if (action.type == SLICE_ITEMS) {
    const filterItems = state.filterItemsByPrice.filter((item) => {
      const price = Number(action.payload);

      if (price == 20) {
        return item.price >= 5 && item.price <= 20;
      } else if (price == 40) {
        return item.price >= 20 && item.price <= 40;
      } else if (price == 60) {
        return item.price > 40 && item.price <= 60;
      } else if (price == 1000) {
        return item.price > 61 && item.price <= 1000;
      }

      return true;
    });
    return {
      ...state,
      products: filterItems,
    };
  }
  // filter items by category

  if (action.type == SELECT_CATEGORY) {
    let filterCate;
    if (action.payload.toLowerCase() == All) {
      filterCate = state.filterCategory;
    } else {
      filterCate = state.filterCategory.filter((item) => {
        return item.category?.toLowerCase() == action.payload.toLowerCase();
      });
    }

    return {
      ...state,
      products: filterCate,
    };
  }

  return state;
};

export default reducer;
