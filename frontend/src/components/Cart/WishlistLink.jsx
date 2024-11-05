import useGlobalContext from "../../context/globalContext"
import { Link } from "react-router-dom"
function WishlistLink() {
    const { isMenuOpen } = useGlobalContext()

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