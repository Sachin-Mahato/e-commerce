import { createContext, useEffect, useReducer, useRef, useState } from "react";
import reducer from "./reducer.js";
import fetchAllProducts from "../service/fetchData.js";
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, TOTAL, CLEAR_CART, REMOVE, REMOVE_ITEM_WISHLIST, ADD_TO_CART, INCREASE_QUANTITY,  WISHLIST, POPULARITY_SORT, SLICE_ITEMS, All, SELECT_CATEGORY, DECREASE_QUANTITY } from "./actionTypes.js";

var AppContext = createContext();

var initialState = {
    loading: false,
    products: [],
    error: null,
    cart: [],
    wishlist: [],
    filterItemsByPrice: [],
    filterCategory: [],
    total: 0,
    quantity: 0
}

function AppContextProvider({ children }) {
    var [state, dispatch] = useReducer(reducer, initialState);
    var [isMenuOpen, setIsMenuOpen] = useState(false);
    var [selectValue, setSelectValue] = useState("");
    var [range, setRange] = useState(5)
    var selectRef = useRef();
    var wishlistRef = useRef();
    var priceRef = useRef(5)

    function clearCart() {
        dispatch({ type: CLEAR_CART})
    }

    function removeItem(id) {
        dispatch({ type: REMOVE, payload: id })
    }

    function removeItemFromWishlist(id) {
        dispatch({ type: REMOVE_ITEM_WISHLIST, payload: id })
    }

    function addToCart(id) {
        dispatch({ type: ADD_TO_CART, payload: id })

    }

    function increaseQuantity(id) {
        dispatch({ type: INCREASE_QUANTITY, payload: id })
    }

    function decreaseQuantity(id) {
        dispatch({ type: DECREASE_QUANTITY , payload: id })
    }

    function toggleClickHandler() {
        setIsMenuOpen((prev) => !prev)
    }

    function wishlistHandler(id) {
        dispatch({ type: WISHLIST, payload: id })
    }

    function sortByPopularity(value) {
        dispatch({ type:POPULARITY_SORT, payload: value })
    }

    function selectClickHandler() {
        setSelectValue(selectRef.current.value)
    }

    function sliceByPrice(evt) {
        var selectVal = evt.target.value;
        setRange(selectVal)
        dispatch({ type: SLICE_ITEMS, payload: selectVal })
    }

    function selectCategory(evt) {
        var selectCate = evt.target.textContent.trim().toLowerCase();
        if (selectCate == All) {
            dispatch({ type: SELECT_CATEGORY, payload: All})
        } else {

            dispatch({ type: SELECT_CATEGORY, payload: selectCate })
        }
    }


    useEffect(() => {
        ; (async () => {
            dispatch({
                type: FETCH_PRODUCTS_START, payload: {
                    loading: true,
                    error: null,
                }
            })
            try {
                const getAllProducts = await fetchAllProducts()
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS, payload: {
                        loading: false,
                        error: null,
                        products: getAllProducts,
                        filterItemsByPrice: getAllProducts,
                        filterCategory: getAllProducts,
                    }
                })
            } catch (error) {
                dispatch({
                    type: FETCH_PRODUCTS_ERROR, payload: {
                        loading: false, error: error.message, products: []
                    }
                })
                console.error(`error in fetching all products ${error.message}`)
            }
        })()
    }, [])


    useEffect(() => {
        dispatch({ type: TOTAL })
    }, [state.cart])

    return <AppContext.Provider value={{ ...state, clearCart, removeItem, addToCart, isMenuOpen, toggleClickHandler, increaseQuantity, decreaseQuantity, wishlistHandler, sortByPopularity, selectValue, selectRef, selectClickHandler, removeItemFromWishlist, wishlistRef, sliceByPrice, priceRef, range, selectCategory }}>
        {children}
    </AppContext.Provider>
}




export { AppContext, AppContextProvider }