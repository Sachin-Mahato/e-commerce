import { useState } from "react";
import useGlobalContext from "../../context/globalContext.jsx"
import { HeartIcon } from "../../img/icons/index.js"
import BuyButton from "./BuyButton.jsx"
import FilterButton from "./FilterButton.jsx";
import ByRatingButton from "./ByRatingButton.jsx";
import { ChevronDownIcon } from "../../img/icons/index.js";

function AllProducts() {
    var { priceRef, cart, sliceByPrice, selectCategory } = useGlobalContext();
    var [toggle, setToggle] = useState(false);
    var [cateToggle, setCatToggle] = useState(false)

    function toggleClickHandler() {
        setToggle((prev) => !prev)
    }

    function cateToggleClickHandler() {
        setCatToggle((prev) => !prev)
    }

    return (
        <article className="desktop:mb-8 desktop:mx-40">
            <div className=" grid grid-cols-2 gap-4 mx-2 desktop:hidden ">
                <FilterButton />
                <ByRatingButton />
            </div>
            <article className="grid grid-cols-10-90 gap-8">
                <div className="w-64 flex flex-col gap-8">
                    <div>

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
                                            onChange={sliceByPrice} // This will dispatch the action to show all items
                                            defaultChecked
                                            className="h-6 w-6 border-2 border-gray-300 rounded-full text-blue-500 focus:ring-2 focus:ring-blue-400"
                                        />
                                        <label htmlFor="rangeAll" className="text-lg font-semibold"> Show All </label>
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
                                        <label htmlFor="range1" className="text-lg font-semibold"> $5 - $20 </label>
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
                                        <label htmlFor="range2" className="text-lg font-semibold"> $20 - $40 </label>
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
                                        <label htmlFor="range3" className="text-lg font-semibold"> $40 - $60 </label>
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
                                        <label htmlFor="range4" className="text-lg font-semibold"> Above $60 </label>
                                    </div>
                                </section>
                            </form>



                        )}

                    </div>
                    <div className="desktop:w-full desktop:flex desktop:flex-col desktop:gap-4">
                        <div className="desktop:flex desktop:gap-4">

                            <p className="capitalize font-semibold">

                                category
                            </p>
                            <div className="cursor-pointer" onClick={cateToggleClickHandler}>
                                <ChevronDownIcon />
                            </div>
                        </div>
                        {(cateToggle &&

                            <section className="">
                                <div className="grid sm:grid-cols-5 gap-4">
                                    {/* All Category */}
                                    <div className="flex flex-col items-start" onClick={selectCategory}>
                                        <p className="text-sm font-semibold text-gray-800">All</p>
                                    </div>

                                    {/* Electronics Category */}
                                    <div className="flex flex-col items-start" onClick={selectCategory}>
                                        <p className="text-sm font-semibold text-gray-800">Electronics</p>
                                    </div>

                                    {/* Jewelry Category */}
                                    <div className="flex flex-col items-start" onClick={selectCategory}>
                                        <p className="text-sm font-semibold text-gray-800">Jewelery</p>
                                    </div>

                                    {/* Men's Clothing Category */}
                                    <div className="flex flex-col items-start" onClick={selectCategory}>
                                        <p className="text-sm font-semibold text-gray-800">Men&apos;s Clothing</p>
                                    </div>

                                    {/* Women's Clothing Category */}
                                    <div className="flex flex-col items-start" onClick={selectCategory}>
                                        <p className="text-sm font-semibold text-gray-800">Women&apos;s Clothing</p>
                                    </div>
                                </div>
                            </section>

                        )
                        }



                    </div>

                </div>
                <div>
                    <div className="flex justify-end items-center">

                        <ByRatingButton />
                    </div>
                    <section className="grid grid-cols-2 place-items-center gap-4 mt-6 desktop:grid-cols-4">
                        {cart.length > 0 ? (
                            cart.map((item, idx) => (

                                <div key={idx} className="flex flex-col justify-around items-center desktop:w-[60%]  w-[162px] h-[352px] bg-[#F6F6F6] desktop:h-[400]">
                                    <div className="w-full flex justify-end mr-4 cursor-pointer">
                                        <HeartIcon itemId={item.id} />
                                    </div>
                                    {item.image ? (
                                        <div className="bg-[#F6F6F6]">
                                            <img src={item.image} alt={`${item.title}`} className="w-24 h-28  block mix-blend-darken" />
                                        </div>
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                    <div>

                                        <BuyButton itemId={item.id} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products available</p> // Fallback message if no items
                        )}
                    </section>

                </div>
            </article>
        </article>
    );

}



export default AllProducts;