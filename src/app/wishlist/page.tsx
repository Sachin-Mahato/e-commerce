/* eslint-disable no-var */
"use client";
import Link from "next/link";
import Image from "next/image";
import useGlobalContext from "@/context/useGlobalContext";
import { Trash } from "@/components/icons/index";
import Footer from "@/components/footer/Footer";

function Wishlist() {
  var { wishlist, removeItemFromWishlist } = useGlobalContext();
  return (
    <>
      <section className="my-8 lg:mx-40">
        <h2 className="font-semibold text-3xl text-gray-900 mb-6 mt-4 tracking-wide">
          Wishlist
        </h2>

        {wishlist.length > 0 ? (
          wishlist.map((item, idx) => {
            return (
              <article
                key={idx}
                className=" flex flex-col gap-8 mt-8 lg:mx-40 lg:flex-row lg:justify-between lg:border-b-2 lg:border-t-2 lg:border-solid lg:border-[#e6e6e6]"
              >
                <div className="flex justify-between items-center lg:gap-8 lg:my-4">
                  <div className="w-full flex flex-col ">
                    <Image
                      className="w-16 h-16 desktop:w-32 lg:h-32"
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                    />
                  </div>
                  <section className="flex flex-col w-full">
                    <p className="w-60 ">{item.title}</p>
                    <p className="font-semibold text-xl mt-4">${item.price}</p>
                  </section>
                </div>
                <div className="mx-4 lg:flex lg:justify-center lg:items-center lg:gap-4  lg:mb-4">
                  <Link href={"/cart"}>
                    <button
                      type="button"
                      className="bg-black text-white capitalize w-full rounded-md font-medium cursor-pointer lg:w-40 lg:h-10"
                    >
                      add to cart
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeItemFromWishlist(item.id)}
                    className="cursor-pointer"
                  >
                    <Trash />
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <p className="text-center text-lg font-semibold text-gray-700 mt-10 mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 shadow-lg">
            Your wishlist is empty. Start adding products you love! ❤️🛒
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Wishlist;
