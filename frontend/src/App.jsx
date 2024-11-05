import { Header, Category, Products, Footer, Cart, OrderSummary, Wishlist } from "./components/index.js"
import { Route, Routes } from "react-router-dom"
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

        </Routes>
    )
}

export default App
