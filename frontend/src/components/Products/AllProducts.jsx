
import useGlobalContext from "../../context/globalContext.jsx"
import { HeartIcon } from "../../img/icons/index.js"
import BuyButton from "./BuyButton.jsx"
import FilterButton from "./FilterButton.jsx";
import ByRatingButton from "./ByRatingButton.jsx";

function AllProducts() {
    const { cart, loading } = useGlobalContext()

    if (loading) {
        return <p>Loading products...</p>; // Loading state
    }

    return (
        <article>
            <div className=" grid grid-cols-2 gap-4 mx-2 ">
                <FilterButton />
                <ByRatingButton />
            </div>
            <section className="grid grid-cols-2 place-items-center gap-4 mt-6">

                {cart.length > 0 ? (
                    cart.map((item, idx) => (

                        <div key={idx} className="flex flex-col justify-around items-center  w-[162px] h-[352px] bg-[#F6F6F6]">
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

        </article>
    );

}



export default AllProducts;