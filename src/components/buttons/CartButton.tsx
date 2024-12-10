/* eslint-disable no-var */
"use client";
import { ProductsTypes } from "@/types";
import useCartContext from "@/context/useCartContext";

function CartButton({ item }: { item: ProductsTypes }) {
  var { addToCart } = useCartContext();

  return (
    <>
      <button
        onClick={() => addToCart(item)}
        type="button"
        className="
                relative bg-black text-white capitalize w-32 h-12 rounded-md font-medium cursor-pointer 
                before:absolute before:bg-gray-300 before:bg-opacity-80 before:rounded-md before:bottom-[-0.1em] before:left-[0.1em] before:right-[0.1em] before:top-[0.5em] before:z-[-1]
                after:absolute after:bg-black after:rounded-md after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[-1]
                hover:scale-105 hover:before:translate-y-[0.1em] hover:after:bg-gray-900 
                active:scale-100 active:transition-none
                transition-transform duration-300 ease-in-out
                before:transition-all before:duration-500 before:ease-[cubic-bezier(0,1,.3,1)] 
                after:transition-all after:duration-500 after:ease-[cubic-bezier(0,1,.3,1)]"
      >
        Add to cart
      </button>
    </>
  );
}

export default CartButton;
