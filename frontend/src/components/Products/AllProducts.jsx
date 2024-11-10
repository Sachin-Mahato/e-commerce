
import useGlobalContext from "../../context/globalContext.jsx"
import { HeartIcon } from "../../img/icons/index.js"
import BuyButton from "./BuyButton.jsx"
import FilterButton from "./FilterButton.jsx";
import ByRatingButton from "./ByRatingButton.jsx";
import { ChevronDownIcon } from "../../img/icons/index.js";
import { useState } from "react";

function AllProducts() {
    var { cart, loading } = useGlobalContext()
    var [toggle, setToggle] = useState(false);

    function toggleClickHandler() {
        setToggle((prev) => !prev)
    }

    if (loading) {
        return <p>Loading products...</p>; // Loading state
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
                            <form action="">
                                <div>
                                    <input type="radio" id="price1" name="priceRange" />
                                    <label htmlFor="price1">$10-20</label>
                                </div>
                                <div>
                                    <input type="radio" id="price2" name="priceRange" />
                                    <label htmlFor="price2">$20-40</label>
                                </div>
                                <div>
                                    <input type="radio" id="price3" name="priceRange" />
                                    <label htmlFor="price3">$40-60</label>
                                </div>
                                <div>
                                    <input type="radio" id="price4" name="priceRange" />
                                    <label htmlFor="price4">More than $60</label>
                                </div>
                            </form>
                        )}

                    </div>
                    <div className="w-full flex gap-4">
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
                                    <BuyButton itemId={item.id} />
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