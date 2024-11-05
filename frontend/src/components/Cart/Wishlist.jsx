import useGlobalContext from "../../context/globalContext";
import id from "../../utils/generateRandomString";

function Wishlist() {
    const { wishlist } = useGlobalContext()
    return (
        <section>
            <h2 className="font-semibold text-3xl text-gray-900 mb-6 mt-4 tracking-wide">
                Wishlist
            </h2>

            {
                wishlist.length > 0 ? wishlist.map((item) => {
                    return (
                        <div key={id()} className=" flex flex-col gap-8 mt-8">
                            <div className="flex justify-between items-center ">
                                <div className="w-full flex flex-col ">

                                    <img className="w-16 h-16" src={item.image} alt={item.title} />
                                </div>
                                <section className="flex flex-col w-full">
                                    <p className="w-60 ">{item.title}</p>
                                    <p className="font-semibold text-xl mt-4">${item.price}</p>
                                </section>
                            </div>
                            <div className="mx-4">

                                <button type="button" className="bg-black text-white capitalize w-full py-2  rounded-md font-medium cursor-pointer">Buy Now</button>
                            </div>
                        </div>
                    )
                }) : <p className="text-center text-lg font-semibold text-gray-700 mt-10 mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 shadow-lg">
                    Your wishlist is empty. Start adding products you love! ❤️🛒
                </p>
            }
        </section>
    )
}

export default Wishlist;