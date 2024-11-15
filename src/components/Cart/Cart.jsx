import useGlobalContext from "../../context/globalContext.jsx"
import id from "../../utils/generateRandomString.js";
import randomNumbers from "../../utils/randomNumbers.js"
import {Minus, Plus, Close} from "../../img/icons/index.js";

function Cart() {
    var { cart } = useGlobalContext();
    let orderId =  randomNumbers();
    return (
        <>
            <section className="flex flex-col gap-4 justify-around">
                <h2 className="capitalize font-semibold text-2xl ml-4 mb-6">shopping cart</h2>
                {cart?.length > 0 ? (
                    cart.map((item) => (
                        <div key={id()} className="flex gap-4 justify-around items-center">
                            <div>
                                <img className="w-16 h-16" src={item.image} alt={item.title} />
                            </div>
                            <section className=" flex flex-col gap-2">
                                <h3 className="font-semibold w-60">{item.title}</h3>
                                <div className="font-normal">#{orderId}</div>
                                <div className="flex gap-2 justify-around items-center">
                                    <div className="flex justify-around items-center w-full">

                                        <Minus itemId={item.id} />
                                        <div className="border-solid h-6 w-6 text-center border-gray-400 border-2">
                                            <p className="font-semibold">{item.quantity}</p>
                                        </div>
                                        <Plus itemId={item.id} />
                                    </div>
                                    <div className=" flex gap-2 justify-around items-center w-full">
                                        <p className="text-[1.5rem]">${item.price}</p>
                                        <Close itemId={item.id} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-lg text-center my-4">
  🛒 Your cart is currently empty. Start shopping to find items you love! 🌟
</p>


                )}
            </section>
        </>
    );
}



export default Cart