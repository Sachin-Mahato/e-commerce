import useGlobalContext from "../../context/globalContext.jsx";
import id from "../../utils/generateRandomString.js";
import { Trash } from "../../img/icons/index.js";
import { Link } from "react-router-dom";

function Wishlist() {
    var { wishlist, removeItemFromWishlist } = useGlobalContext();
    return (
        <section className="my-8">
            <h2 className="font-semibold text-3xl text-gray-900 mb-6 mt-4 tracking-wide">
                Wishlist
            </h2>

            {
                wishlist.length > 0 ? wishlist.map((item) => {
                    return (
                        <article key={id()} className=" flex flex-col gap-8 mt-8 desktop:mx-40 desktop:flex-row desktop:justify-between desktop:border-b-2 desktop:border-t-2 desktop:border-solid desktop:border-[#e6e6e6]">   
                            <div className="flex justify-between items-center desktop:gap-8 desktop:my-4">
                                <div className="w-full flex flex-col ">

                                    <img className="w-16 h-16 desktop:w-32 desktop:h-32" src={item.image} alt={item.title} />
                                </div>
                                <section className="flex flex-col w-full">
                                    <p className="w-60 ">{item.title}</p>
                                    <p className="font-semibold text-xl mt-4">${item.price}</p>
                                </section>
                            </div>
                            <div className="mx-4 desktop:flex desktop:justify-center desktop:items-center desktop:gap-4  desktop:mb-4">
                                <Link to={"/cart"}>
                                    <button type="button" className="bg-black text-white capitalize w-full rounded-md font-medium cursor-pointer desktop:w-40 desktop:h-10">add to cart</button>
                                </Link>
                                <button type="button" onClick={() => removeItemFromWishlist(item.id)} className="cursor-pointer">

                                    <Trash />
                                </button>
                            </div>
                        </article>
                    )
                }) : <p className="text-center text-lg font-semibold text-gray-700 mt-10 mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 shadow-lg">
                    Your wishlist is empty. Start adding products you love! ❤️🛒
                </p>
            }
        </section>
    )
}

export default Wishlist;