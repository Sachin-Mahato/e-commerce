import { Route, Routes } from "react-router-dom"
import { Header, Category, Products, Footer, Cart, OrderSummary, Wishlist, AllProducts } from "./components/index.js"
import FilterByPrice from "./components/Products/FilterByPrice.jsx"

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <>

                    <Header />
                    <Category />
                    <Products />
                    <Footer />
                </>
            }
            />

            <Route path="/cart" element={
                <>
                    <Header />
                    <Cart />
                    <OrderSummary />
                    <Footer />
                </>
            } />

            <Route path="/wishlist" element={
                <>
                    <Header />
                    <Wishlist />
                    <Footer />
                </>
            } />

            <Route path="/products" element={
                <>
                    <Header />
                    <AllProducts />
                    <Footer />
                </>
            } />

            <Route path="/products/:filter" element={<>

                <Header />
                <FilterByPrice />
                <Footer />
            </>} />

        </Routes>
    )
}



export default App
