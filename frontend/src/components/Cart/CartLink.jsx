import { Link } from "react-router-dom";
import useGlobalContext from "../../context/globalContext"
import { CartIcon } from "../../img/icons/index.js";

function CartLink() {
    var { isMenuOpen } = useGlobalContext();

    return (
        <>
            {isMenuOpen && (
                <Link to="/cart">
                    <div className="flex gap-4 items-center">
                        <p>Cart</p>
                        <CartIcon />
                    </div>
                </Link>
            )}

        </>
    )
}

export default CartLink