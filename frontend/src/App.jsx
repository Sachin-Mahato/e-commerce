import { Header, Category, Products, Footer, Cart } from "./components/index.js"
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
                    <Footer />
                </>
            } />

        </Routes>
    )
}

export default App
