import { Route, Routes } from "react-router-dom"
import {HomePage, CartPage, WishlistPage, ProductsPage, FilteredProductsPage} from "./pages/index.js"
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/cart" element={<CartPage />} />

            <Route path="/wishlist" element={<WishlistPage />} />

            <Route path="/products" element={<ProductsPage />} />

            <Route path="/products/:filter" element={<FilteredProductsPage />} />

        </Routes>
    )
}



export default App
