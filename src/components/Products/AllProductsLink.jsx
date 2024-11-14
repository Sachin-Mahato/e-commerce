import useGlobalContext from "../../context/globalContext.jsx";
import { Link } from "react-router-dom";

function AllProductsLink() {
    var {isMenuOpen} = useGlobalContext();
    return (
        <>

            {isMenuOpen && (
                <Link to="/products">
                    <div>
                        <p>Products</p>
                    </div>
                </Link>
            )}
        </>
    )
}

export default AllProductsLink;