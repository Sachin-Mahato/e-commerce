import { createContext, useReducer, useState } from "react";
import reducer from "./reducer.js";
import fetchAllProducts from "../utils/fetchData.js";
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: await fetchAllProducts(),
    items: [],
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

    const toggleClickHandler = () => {
        setIsMenuOpen((prev) => !prev)
    }


    return <AppContext.Provider value={{ ...state, clearCart, removeItem, addToCart, isMenuOpen, toggleClickHandler }}>
        {children}
    </AppContext.Provider>
}

// custom hook



export { AppContext, AppContextProvider }