/* eslint-disable prefer-const */
/* eslint-disable no-var */
"use client";
import { useEffect, useState } from "react";
import { ProductsTypes } from "../types/index";
import ProductsList from "./ProductsList";

function Products() {
  var [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://fakestoreapi.com/products?limit=8";
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`error in getting response ${response}`);
        }
        let data = await response.json();
        setListProducts(data);
      } catch (error) {
        console.log(`error in fetching Homepage products: ${error}`);
      }
    })();
  }, []);

  return (
    <div className="font-[sans-serif] bg-white my-4 lg:mx-40">
      <section className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {listProducts.map((product: ProductsTypes, idx) => (
            <div key={idx}>
              <ProductsList item={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
