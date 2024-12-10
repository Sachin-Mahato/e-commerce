/* eslint-disable no-var */
"use client";
import useGlobalContext from "@/context/useGlobalContext";
import Link from "next/link";

function ProductsLinks() {
  var { isMenuOpen } = useGlobalContext();
  return (
    <>
      {isMenuOpen && (
        <Link href={"/products"}>
          <div>
            <p>Products</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default ProductsLinks;
