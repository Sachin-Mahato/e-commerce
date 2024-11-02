/**
 *
 * @param {Object} state
 * @param {Object} action
 * @returns  {Object}
 */
const reducer = (state, action) => {
    // switch(action.type) {
    //     case "CLEAR_CART":
    //     return {...state, cart:[]}

    //     case "REMOVE":
    //         return {
    //             ...state,
    //             cart: state["cart"].filter((item) => item.id !== action.payload)
    //         }

    //     case "ADD_TO_CART":
    //         return {
    //             ...state,
    //             cart: [...state["cart"].find((item) => item.id === action.payload)]
    //         }
    //     default:
    //         return state;
    // }
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] };
    }
    if (action.type === "REMOVE") {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }

    if (action.type === "ADD_TO_CART") {

        const findItem = state["cart"]?.find((item) => {
            item["quantity"] = 1;
            if (item.id == action.payload) {
                return item;
            }
        });

        if (findItem) {
            return {
                ...state,
                cart: [...state["cart"]],
                items: [...state["items"], findItem]
            }
        }
        return state;
    }

    return state;
};

export default reducer;
