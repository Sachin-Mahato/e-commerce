import { Header, Category, Products } from "../index.js"
function Home() {
    return (
            <div className="mx-4">
                <Header />
                <Category />
                <Products />
            </div>
    )
}

export default Home