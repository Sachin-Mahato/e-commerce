import useGlobalContext from "../../context/globalContext"
import { HeartIcon } from "../../img/icons/index.js"
const Products = () => {
    const { cart, loading, addToCart } = useGlobalContext()

    if (loading) {
        return <p>Loading products...</p>; // Loading state
    }

    return (
        <section className="grid grid-cols-2 gap-4 mt-[7.5em]">
            {cart.length > 0 ? (
                cart.slice(0, 8).map((item, idx) => (

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
                        <button onClick={() => addToCart(item.id)} type="button"
                            className="
    relative bg-black text-white capitalize w-32 h-12 rounded-md font-medium cursor-pointer 
    before:absolute before:bg-gray-300 before:bg-opacity-80 before:rounded-md before:bottom-[-0.1em] before:left-[0.1em] before:right-[0.1em] before:top-[0.5em] before:z-[-1]
    after:absolute after:bg-black after:rounded-md after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[-1]
    hover:scale-105 hover:before:translate-y-[0.1em] hover:after:bg-gray-900 
    active:scale-100 active:transition-none
    transition-transform duration-300 ease-in-out
    before:transition-all before:duration-500 before:ease-[cubic-bezier(0,1,.3,1)] 
    after:transition-all after:duration-500 after:ease-[cubic-bezier(0,1,.3,1)]
  "
                        >
                            Buy Now</button>
                    </div>
                ))
            ) : (
                <p>No products available</p> // Fallback message if no items
            )}
        </section>
    );

}




export default Products;
