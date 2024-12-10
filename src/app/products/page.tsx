"use client";
/* eslint-disable no-var */
import SortByOptions from "@/components/filters/SortByOptions";
import PriceFilter from "@/components/filters/filterByPrice";
import CategoryFilter from "@/components/filters/FilterProductsCategory";
import ProductsList from "@/components/ProductsList";
import useGlobalContext from "@/context/useGlobalContext";
function Products() {
  var { products } = useGlobalContext();

  return (
    <section className="lg:mb-8 lg:mx-40">
      <div className=" lg:grid lg:grid-cols-10-90 lg:gap-8">
        <div className=" lg:w-64 lg:flex lg:flex-col lg:gap-8">
          <PriceFilter />
          <CategoryFilter />
        </div>
        <div>
          <div className=" lg:flex justify-end items-center">
            {/* <ByRatingButton /> */}
            <SortByOptions />
          </div>
          <section className=" grid grid-cols-2 gap-4 place-items-center  mt-6 lg:grid-cols-4">
            {products.length > 0 ? (
              products.map((item, idx) => (
                <div key={idx}>
                  <ProductsList item={item} />
                </div>
              ))
            ) : (
              <p>No products available</p> // Fallback message if no items
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

export default Products;
