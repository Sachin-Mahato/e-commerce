"use client";
/* eslint-disable no-var */
import Link from "next/link";
import useGlobalContext from "../../context/useGlobalContext";
import { CartIcon } from "../icons/index";

function CartLink() {
  var { isMenuOpen } = useGlobalContext();

  return (
    <>
      {isMenuOpen && (
        <Link href={"/cart"}>
          <div className="flex gap-4 items-center">
            <p>Cart</p>
            <CartIcon />
          </div>
        </Link>
      )}
    </>
  );
}

export default CartLink;
