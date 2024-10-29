import useGlobalContext from "../../context/globalContext"
const Cart = () => {
    const {cart}  = useGlobalContext();
    
    return (
        <>
            <div>
                <h2>Welcome to cart page</h2>
                <div>
                    {
                        cart.length > 0 ? <div>price: {cart.price} </div> : <div> something wrong the cart functionality</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart