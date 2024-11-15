import FilterButton from "./FilterButton.jsx";
import ByRatingButton from "./ByRatingButton.jsx";
import PriceFilter from "./PriceFilter.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import useGlobalContext from "../../context/globalContext.jsx"
import ProductsList from "./ProductsList.jsx";

function AllProducts() {
    var {products} = useGlobalContext();

    return (
        <article className="desktop:mb-8 desktop:mx-40">
            <div className=" grid grid-cols-2 gap-4 mx-2 desktop:hidden ">
                <FilterButton />
                <ByRatingButton />
            </div>
            <article className="grid grid-cols-10-90 gap-8">
                <div className="w-64 flex flex-col gap-8">
                    <PriceFilter />
                    <CategoryFilter />
                </div>
                <div>
                    <div className="flex justify-end items-center">

                        <ByRatingButton />
                    </div>
                    <section className="grid grid-cols-2 place-items-center gap-4 mt-6 desktop:grid-cols-4">
                        {products.length > 0 ? (
                            products.map((item, idx) => (
                                <ProductsList key={idx} idx={idx} item={item} />

                            ))
                        ) : (
                            <p>No products available</p> // Fallback message if no items
                        )}
                    </section>

                </div>
            </article>
        </article>
    );

}



export default AllProducts;