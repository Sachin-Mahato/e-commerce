/* eslint-disable no-var */
"use client";
import { useState } from "react";
import useGlobalContext from "../../context/useGlobalContext";
import { ChevronDownIcon } from "../icons/index";

export default function PriceByFilter() {
  var { sliceByPrice, priceRef } = useGlobalContext();
  var [toggle, setToggle] = useState(false);

  function toggleClickHandler() {
    setToggle((prev) => !prev);
  }
  return (
    <div className="hidden lg:block">
      <div className="w-full flex gap-12">
        <p className=" capitalize font-semibold">price</p>
        <div onClick={toggleClickHandler}>
          <ChevronDownIcon />
        </div>
      </div>
      {toggle && (
        <form className="space-y-4 mt-4">
          <section className="flex flex-col gap-4">
            {/* Show All Items */}
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="rangeAll"
                name="priceRange"
                value="all"
                ref={priceRef}
                onChange={sliceByPrice}
                defaultChecked
                className="h-6 w-6 border-2 border-gray-300 rounded-full text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="rangeAll" className="text-lg font-semibold">
                {" "}
                Show All{" "}
              </label>
            </div>

            {/* $5 - $20 Range */}
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="range1"
                name="priceRange"
                value="20"
                ref={priceRef}
                onChange={sliceByPrice}
                className="h-6 w-6 border-2 border-gray-300 rounded-full text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="range1" className="text-lg font-semibold">
                {" "}
                $5 - $20{" "}
              </label>
            </div>

            {/* $20 - $40 Range */}
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="range2"
                name="priceRange"
                value="40"
                ref={priceRef}
                onChange={sliceByPrice}
                className="h-6 w-6 border-2 border-gray-300 rounded-full text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="range2" className="text-lg font-semibold">
                {" "}
                $20 - $40{" "}
              </label>
            </div>

            {/* $40 - $60 Range */}
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="range3"
                name="priceRange"
                value="60"
                ref={priceRef}
                onChange={sliceByPrice}
                className="h-6 w-6 border-2 border-gray-300 rounded-full text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="range3" className="text-lg font-semibold">
                {" "}
                $40 - $60{" "}
              </label>
            </div>

            {/* Above $60 Range */}
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="range4"
                name="priceRange"
                value="1000"
                ref={priceRef}
                onChange={sliceByPrice}
                className="h-6 w-6 border-2 border-gray-300 rounded-full text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="range4" className="text-lg font-semibold">
                {" "}
                Above $60{" "}
              </label>
            </div>
          </section>
        </form>
      )}
    </div>
  );
}
