import { Link } from "react-router-dom";
import useGlobalContext from "../../context/globalContext"

const AddToCart = () => {
    const { isMenuOpen } = useGlobalContext();

    return (
        <>
            {isMenuOpen && (
                <Link to="/cart">
                    <div>
                        <span>Cart</span>
                    </div>
                </Link>
            )}

        </>
    )
}

export default AddToCart