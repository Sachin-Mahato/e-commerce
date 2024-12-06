import { createContext, useReducer, useEffect } from "react";
import cartReducer from './cartReducer';
import { ADD_TO_CART, CLEAR_CART, REMOVE, TOTAL, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";

var CartContext = createContext();
var initialState = {
    cart: [],
    total: 0,
    quantity: 0
}
function CartContextProvider( {children}) {
    var [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(item) {
        dispatch({type: ADD_TO_CART, payload: item })
    }

    function clearCart() {
        dispatch({ type: CLEAR_CART})
    }
    function removeItem(id) {
        dispatch({ type: REMOVE, payload: id })
    }

    function increaseQuantity(id) {
        dispatch({ type: INCREASE_QUANTITY, payload: id })
    }

    function decreaseQuantity(id) {
        dispatch({ type: DECREASE_QUANTITY , payload: id })
    }

    useEffect(() => {
        dispatch({ type: TOTAL })
    }, [state.cart])

    return <CartContext.Provider value={{...state, addToCart, clearCart, removeItem, increaseQuantity, decreaseQuantity}}>
        {children}
    </CartContext.Provider>
}

export {
    CartContext,
    CartContextProvider
}