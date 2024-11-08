/**
 *
 * @param {Object} state
 * @param {Object} action
 * @returns  {Object}
 */
function reducer(state, action) {
    // remove all items from the cart
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] };
    }
    // remove single item
    if (action.type === "REMOVE") {
        return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload),
        };
    }
    // Add to cart
    if (action.type === "ADD_TO_CART") {
        let findItem = state["cart"]?.find((item) => {
            item["quantity"] = 1;
            if (item.id == action.payload) {
                return item;
            }
        });

        if (findItem) {
            return {
                ...state,
                cart: [...state["cart"]],
                items: [...state["items"], findItem],
            };
        }
        return state;
    }
    // Increase Quantity
    if (action.type === "INCREASE_QUANTITY") {
        let temp = state.items.map((item) => {
            if (item.id == action.payload) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        return {
            ...state,
            cart: [...state["cart"]],
            items: [...temp],
        };
    }
    // Decrease Quantity
    if (action.type == "DECREASE_QUANTITY") {
        let temp = state.items
            .map((item) => {
                if (item.id == action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
            .filter((item) => item.quantity !== 0);

        return {
            ...state,
            cart: [...state["cart"]],
            items: [...temp],
        };
    }
    // Total Amount
    if (action.type == "TOTAL") {
        let { total, quantity } = state.items.reduce(
            (acc, currItem) => {
                const { price, quantity } = currItem;
                const itemTotal = price * quantity;
                acc.total += itemTotal;
                acc.quantity += quantity;
                return acc;
            },
            {
                total: 0,
                quantity: 0,
            }
        );

        total = parseFloat(total.toFixed(2));

        return {
            ...state,
            total: total,
            quantity: quantity,
        };
    }

    // Wishlist

    if (action.type == "WISHLIST") {
        let findWishlistItems = state["cart"].find((item) => {
            if (item.id == action.payload) {
                return item;
            }
        });

        if (findWishlistItems) {
            return {
                ...state,
                cart: [...state["cart"]],
                wishlist: [...state["wishlist"], findWishlistItems],
            };
        }

        return state["wishlist"];
    }

    // sort by popularity

    if (action.type == "POPULARITY_SORT") {
        if (action.payload == "popularity") {
            state["cart"].sort((x,y) => y.rating?.rate - x.rating?.rate)
        }
        if (action.payload == "relevance") {
            state["cart"].sort((x,y) => x.rating?.rate - y.rating?.rate)
        }
        if (action.payload == "") {
            state["cart"].sort((x,y) => x.rating?.rate - y.rating?.rate)
        }
    }

    return state;
}

export default reducer;
