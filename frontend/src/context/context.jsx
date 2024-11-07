import { createContext, useEffect, useReducer, useRef, useState } from "react";
import reducer from "./reducer.js";
import fetchAllProducts from "../utils/fetchData.js";


var AppContext = createContext();

var initialState = {
    loading: false,
    cart: await fetchAllProducts(),
    items: [],
    wishlist: [],
    total: 0,
    quantity: 0
}

function AppContextProvider  ({ children })  {
    var [state, dispatch] = useReducer(reducer, initialState);
    var [isMenuOpen, setIsMenuOpen] = useState(false);
    var [isSet, setIsSet] = useState(false);
    var [selectValue, setSelectValue] = useState("");
    var selectRef = useRef();

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const addToCart = (id) => {
        dispatch({ type: 'ADD_TO_CART', payload: id })

    }

    const increaseQuantity = (id) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: id })
    }

    const decreaseQuantity = (id) => {
        dispatch({type: 'DECREASE_QUANTITY', payload: id })
    }
    const toggleClickHandler = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const wishlistHandler = (id) => {
        setIsSet((prev) => !prev)
        dispatch({type: "WISHLIST", payload: id})
    }

    const sortByPopularity = (value) => {
        dispatch({type: "POPULARITY_SORT", payload: value} )
    }

    function selectClickHandler() {
        setSelectValue(selectRef.current.value)
    }

    useEffect(() => {
        dispatch({type: 'TOTAL'})
    }, [state.items])

    return <AppContext.Provider value={{ ...state, clearCart, removeItem, addToCart, isMenuOpen,isSet, toggleClickHandler , increaseQuantity, decreaseQuantity , wishlistHandler, sortByPopularity, selectValue, selectRef, selectClickHandler}}>
        {children}
    </AppContext.Provider>
}




export { AppContext, AppContextProvider }