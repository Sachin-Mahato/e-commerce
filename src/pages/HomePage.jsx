import { Header, Category, Products, Footer } from "../components/index.js"
function HomePage() {
    return (
            <div className="mx-4">
                <Header />
                <Category />
                <Products />
                <Footer />
            </div>
    )
}

export default HomePage;