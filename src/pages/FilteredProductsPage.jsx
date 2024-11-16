import { Header, Footer } from "../components/index.js";
import FilterByPrice from "../components/Products/FilterByPrice.jsx";

function FilteredProductsPage() {
    return (
        <>
            <Header /> 
            <FilterByPrice />
            <Footer />
        </>
    )
}

export default FilteredProductsPage;