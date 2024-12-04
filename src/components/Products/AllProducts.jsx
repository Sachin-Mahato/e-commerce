import ByRatingButton from "./ByRatingButton.jsx";
import PriceFilter from "./PriceFilter.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import useGlobalContext from "../../context/globalContext.jsx";
import ProductsList from "./ProductsList.jsx";

function AllProducts() {
    var { products } = useGlobalContext();

    return (
        <section className="desktop:mb-8 desktop:mx-40">

            <article className=" desktop:grid desktop:grid-cols-10-90 desktop:gap-8">
                <div className=" desktop:w-64 desktop:flex desktop:flex-col desktop:gap-8">
                    <PriceFilter />
                    <CategoryFilter />
                </div>
                <div>
                    <div className=" desktop:flex justify-end items-center">
                        <ByRatingButton />
                    </div>
                    <section className=" grid grid-cols-2 gap-4 place-items-center  mt-6 desktop:grid-cols-4">
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
        </section>
    );
}

export default AllProducts;




