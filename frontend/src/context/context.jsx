import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer.js";
import fetchAllProducts from "../utils/fetchData.js";
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: await fetchAllProducts(),
    items: [],
    wishlist: [],
    total: 0,
    quantity: 0
}

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        dispatch({type: "WISHLIST", payload: id})
    }

    useEffect(() => {
        dispatch({type: 'TOTAL'})
    }, [state.items])

    return <AppContext.Provider value={{ ...state, clearCart, removeItem, addToCart, isMenuOpen, toggleClickHandler , increaseQuantity, decreaseQuantity , wishlistHandler}}>
        {children}
    </AppContext.Provider>
}

// custom hook



export { AppContext, AppContextProvider }