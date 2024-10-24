import Category from "./components/Category/Category"
import { Header } from "./components/Header"
import Products from "./components/Products/Products"

function App() {
    return (
        <main className="mx-4">
            <Header />
            <Category />
            <Products />
        </main>
    )
}

export default App
