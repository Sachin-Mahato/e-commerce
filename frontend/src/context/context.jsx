import { createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const storeItems = JSON.parse(localStorage.getItem('cart')) || [];
    const [isMenuOpen, SetIsMenuOpen] = useState(false);
    const [cart, setCart] = useState(storeItems);


    const toggleClickHandler = () => {
        SetIsMenuOpen((current) => !current);
    }


    const addToCart = (item) => {
        console.log(item)
        setCart((prevCart) => {
            const itemExist = prevCart.filter((product) => product.id === item.id);
            if (!itemExist) {
                const updatedCart = [...prevCart, item];

                // Update localStorage with the new cart
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                console.log(updatedCart)
                return updatedCart; // Return the updated cart
            }
            return prevCart;
        })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



    return <AppContext.Provider value={{ isMenuOpen, toggleClickHandler, cart, addToCart }}>
        {children}
    </AppContext.Provider>
}

// custom hook



export { AppContext, AppContextProvider }