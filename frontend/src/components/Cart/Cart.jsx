import useGlobalContext from "../../context/globalContext"
import id from "../../utils/generateRandomString";
import randomNumbers from "../../utils/randomNumbers";
import Minus from "./Minus";
import Plus from "./Plus"
import Close from "./Close";

const Cart = () => {
    const { items } = useGlobalContext();
    const orderId = randomNumbers();
    console.log(items)
    return (
        <>
            <section>
                <h2 className="capitalize font-semibold text-2xl mb-10">shopping cart</h2>
                {items?.length > 0 ? (
                    items.map((item) => (
                        <div key={id()} className="flex gap-4 justify-around items-center">
                            <div>
                                <img className="w-16 h-16" src={item.image} alt={item.title} />
                            </div>
                            <section className=" flex flex-col gap-2">
                                <h3 className="font-semibold">{item.title}</h3>
                                <div className="font-normal">#{orderId}</div>
                                <div className="flex gap-2 justify-around items-center">
                                    <div className="flex justify-around items-center w-full">

                                        <Minus />
                                        <div className="border-solid h-6 w-6 text-center border-gray-400 border-2">
                                            <p className="font-semibold">{item.quantity}</p>
                                        </div>
                                        <Plus />
                                    </div>
                                    <div className=" flex gap-2 justify-around items-center w-full">
                                        <p className="text-[1.5rem]">${item.price}</p>
                                        <Close />
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                ) : (
                    <p>No cart items available</p>
                )}
            </section>
        </>
    );
}



export default Cart