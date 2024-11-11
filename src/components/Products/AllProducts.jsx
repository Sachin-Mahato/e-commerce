import {   useState } from "react";
import useGlobalContext from "../../context/globalContext.jsx"
import { HeartIcon } from "../../img/icons/index.js"
import BuyButton from "./BuyButton.jsx"
import FilterButton from "./FilterButton.jsx";
import ByRatingButton from "./ByRatingButton.jsx";
import { ChevronDownIcon } from "../../img/icons/index.js";

function AllProducts() {
    var {range, priceRef, cart, sliceByPrice } = useGlobalContext();
    var [toggle, setToggle] = useState(false);

    function toggleClickHandler() {
        setToggle((prev) => !prev)
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
                            <form action="" >
                                <div className="flex gap-4 items-center">
                                    <label className="">{range}</label>
                                    <input
                                        ref={priceRef}
                                        type="range"
                                        min="5"
                                        max="200"
                                        onChange={sliceByPrice}
                                        value={range}
                                        className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </form>
                        )}

                    </div>
                    <div className="desktop:w-full desktop:flex desktop:gap-4">
                        <p className="capitalize font-semibold">

                            category
                        </p>
                        <div>
                            <ChevronDownIcon />
                        </div>
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