/* eslint-disable no-var */
"use client";
import useGlobalContext from "../../context/useGlobalContext";
import Link from "next/link";
function WishlistLink() {
  var { isMenuOpen } = useGlobalContext();

  return (
    <>
      {isMenuOpen && (
        <Link href="/wishlist">
          <div>
            <p>Wishlist</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default WishlistLink;
