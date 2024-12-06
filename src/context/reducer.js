/**
 *
 * @param {Object} state
 * @param {Object} action
 * @returns  {Object}
 * 
 */
import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, REMOVE_ITEM_WISHLIST, ADD_TO_CART, WISHLIST, POPULARITY_SORT, SLICE_ITEMS, SELECT_CATEGORY, All } from "./actionTypes.js";

function reducer(state, action) {

    if (action.type == FETCH_PRODUCTS_START) {
        return {
            ...state,
            loading:action.payload.loading,
            error:action.payload.error
        }
    }

    if (action.type == FETCH_PRODUCTS_SUCCESS) {
        return {
            ...state,
            loading: action.payload.loading,
            products: action.payload.products,
            filterItemsByPrice: action.payload.filterItemsByPrice,
            filterCategory: action.payload.filterCategory,
            error: action.payload.error
        }
    }

    if (action.type == FETCH_PRODUCTS_ERROR) {
        return {
            ...state,
            loading: action.payload.loading,
            error: action.payload.error,
            products: action.payload.products
        }
    }


    // remove item from wishlist
    if (action.type == REMOVE_ITEM_WISHLIST) {
        return {
            ...state,
            wishlist: state.wishlist.filter((item) => item.id != action.payload)
        }
    }
    // Add to cart
    if (action.type == ADD_TO_CART) {
        let findItem = state["products"]?.find((item) => {
            item["quantity"] = 1;
            if (item.id == action.payload) {
                return item;
            }
        });


        if (findItem) {
            return {
                ...state,
                products: [...state["products"]],
                cart: [...state["cart"], findItem],
            };
        }
        return state;
    }


    // Wishlist

    if (action.type == WISHLIST) {
        let findWishlistItems = state["products"].find((item) => {
            if (item.id == action.payload) {
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

        return state["wishlist"];
    }

    // sort by popularity

    if (action.type == POPULARITY_SORT) {
        if (action.payload == "popularity") {
            state["products"].sort((x, y) => y.rating?.rate - x.rating?.rate)
        }
        if (action.payload == "relevance") {
            state["products"].sort((x, y) => x.rating?.rate - y.rating?.rate)
        }
        if (action.payload == "") {
            state["products"].sort((x, y) => x.rating?.rate - y.rating?.rate)
        }
        if (action.payload == "low-to-high") {
            state["products"].sort((x, y) => x.price - y.price)
        }
        if (action.payload == "high-to-low") {
            state["products"].sort((x, y) => y.price - x.price)
        }
    }
    // slice item by price 

    if (action.type == SLICE_ITEMS) {
        let filterItems = state.filterItemsByPrice.filter((item) => {
            let price = Number(action.payload)

            if (price == 20) {
                return item.price >= 5 && item.price <= 20;
            } else if (price == 40) {
                return item.price >= 20 && item.price <= 40;
            } else if (price == 60) {
                return item.price > 40 && item.price <= 60
            } else if (price == 1000) {
                return item.price > 61 && item.price <= 1000;
            }

            return true;
        });
        return {
            ...state,
            products: filterItems,
        }

    }
    // filter items by category

    if (action.type == SELECT_CATEGORY) {
        let filterCate;
        if (action.payload.toLowerCase() == All) {
            filterCate = state.filterCategory;
        } else {

            filterCate = state.filterCategory.filter((item) => {
               return item.category.toLowerCase() == action.payload.toLowerCase();
            })

        }

        return {
            ...state,
            products: filterCate,
        }
    }

    return state;
}

export default reducer;
