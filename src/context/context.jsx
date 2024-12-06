import { createContext, useEffect, useReducer, useRef, useState } from "react";
import reducer from "./reducer.js";
import fetchAllProducts from "../service/fetchData.js";
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS,REMOVE_ITEM_WISHLIST, WISHLIST, POPULARITY_SORT, SLICE_ITEMS, All, SELECT_CATEGORY} from "./actionTypes.js";

var AppContext = createContext();

var initialState = {
    loading: false,
    products: [],
    error: null,
    wishlist: [],
    filterItemsByPrice: [],
    filterCategory: [],
}

function AppContextProvider({ children }) {
    var [state, dispatch] = useReducer(reducer, initialState);
    var [isMenuOpen, setIsMenuOpen] = useState(false);
    var [selectValue, setSelectValue] = useState("");
    var [range, setRange] = useState(5)
    var selectRef = useRef();
    var wishlistRef = useRef();
    var priceRef = useRef(5)

    function removeItemFromWishlist(id) {
        dispatch({ type: REMOVE_ITEM_WISHLIST, payload: id })
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

    function selectClickHandler(selectRef) {
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




    return <AppContext.Provider value={{ ...state,isMenuOpen, toggleClickHandler,wishlistHandler, sortByPopularity, selectValue, selectRef, selectClickHandler, removeItemFromWishlist, wishlistRef, sliceByPrice, priceRef, range, selectCategory }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppContextProvider }