/* eslint-disable no-var */
"use client";
import useGlobalContext from "../../context/useGlobalContext";
// import { HamburgerIcon } from "../../../public/icons/index";
import CartLink from "./CartLink";
import WishlistLink from "./WishlistLink";
import ProductsLinks from "./ProductsLink";

function HamburgerMenu() {
  var { isMenuOpen, toggleClickHandler } = useGlobalContext();

  return (
    <div className="relative ">
      <button
        type="button"
        className="absolute right-4 z-50"
        onClick={toggleClickHandler}
      >
        <HamburgerIcon />
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-[60vw] bg-[#181313] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div className=" flex flex-col justify-center items-center gap-4 text-xl p-4 mt-20 text-white font-semibold z-50">
          <CartLink />
          <WishlistLink />
          <ProductsLinks />
        </div>
      </div>
    </div>
  );
}

function HamburgerIcon() {
  const { isMenuOpen } = useGlobalContext();
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-8 ${isMenuOpen ? "stroke-white" : ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}

export default HamburgerMenu;
