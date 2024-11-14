import useGlobalContext from "../../context/globalContext.jsx"
import { Link } from "react-router-dom"
function WishlistLink() {
    var { isMenuOpen } = useGlobalContext()

    return (
        <>

            {isMenuOpen && (
                <Link to="/wishlist">
                    <div>
                        <p>Wishlist</p>
                    </div>
                </Link>
            )}
        </>

    )
}


export default WishlistLink;