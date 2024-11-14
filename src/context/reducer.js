/**
 *
 * @param {Object} state
 * @param {Object} action
 * @returns  {Object}
 */
function reducer(state, action) {
    // remove all items from the cart
    if (action.type == "CLEAR_CART") {
        return { ...state, cart: [] };
    }
    // remove single item
    if (action.type == "REMOVE") {
        return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload),
        };
    }
    // remove item from wishlist
    if (action.type == "REMOVE_ITEM_WISHLIST") {
        return {
            ...state,
            wishlist: state.wishlist.filter((item) => item.id != action.payload)
        }
    }
    // Add to cart
    if (action.type == "ADD_TO_CART") {
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
    if (action.type == "INCREASE_QUANTITY") {
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
            state["cart"].sort((x, y) => y.rating?.rate - x.rating?.rate)
        }
        if (action.payload == "relevance") {
            state["cart"].sort((x, y) => x.rating?.rate - y.rating?.rate)
        }
        if (action.payload == "") {
            state["cart"].sort((x, y) => x.rating?.rate - y.rating?.rate)
        }
        if (action.payload == "low-to-high") {
            state["cart"].sort((x, y) => x.price - y.price)
        }
        if (action.payload == "high-to-low") {
            state["cart"].sort((x, y) => y.price - x.price)
        }
    }
    // slice item by price 

    if (action.type == "SLICE_ITEMS") {
        let filterItems = state.filterAllItems.filter((item) => {
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
            cart: filterItems,
        }

    }
    // filter items by category

    if (action.type == "SELECT_CATEGORY") {
        let filterCate;
        if (action.payload.toLowerCase() == "all") {
            filterCate = state.filterCategory;
        } else {

            filterCate = state.filterCategory.filter((item) => {
               return item.category.toLowerCase() == action.payload.toLowerCase();
            })

        }

        return {
            ...state,
            cart: filterCate,
        }
    }

    return state;
}

export default reducer;
