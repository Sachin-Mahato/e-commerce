"use client";
import Image from "next/image.js";
import { HeartIcon } from "@/components/icons/index";
import CartButton from "./buttons/CartButton";
import { ProductsTypes } from "@/types/index";
type ProductsListProps = {
  item: ProductsTypes;
};

export default function ProductsList({ item }: ProductsListProps) {
  return (
    <div className="flex flex-col justify-around items-center lg:w-full  w-[162px] h-[352px] bg-[#F6F6F6] lg:h-[400]">
      <div className="w-full flex justify-end mr-4 cursor-pointer">
        <HeartIcon itemId={item.id} />
      </div>
      {item.image ? (
        <div className="bg-[#F6F6F6]">
          <Image
            src={item.image}
            alt={`${item.title}`}
            className="w-24 h-28  block mix-blend-darken"
            width={300}
            height={300}
            priority
          />
        </div>
      ) : (
        <p>No image available</p>
      )}
      <p className="lg:text-center">{item.title}</p>
      <p>${item.price}</p>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
