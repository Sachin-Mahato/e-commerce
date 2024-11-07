import useGlobalContext from "../../context/globalContext"
import { HeartIcon } from "../../img/icons/index.js"
import BuyButton from "./BuyButton.jsx"

function Products() {
    const { cart, loading } = useGlobalContext()

    if (loading) {
        return <p>Loading products...</p>; // Loading state
    }

    return (
        <section className="grid grid-cols-2 place-items-center gap-4 mt-[7.5em]">
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
                        <BuyButton itemId={item.id} />
                    </div>
                ))
            ) : (
                <p>No products available</p> // Fallback message if no items
            )}
        </section>
    );

}



export default Products;