import CartLink from "../Cart/CartLink.jsx";
import useGlobalContext from "../../context/globalContext.jsx";
import {HamburgerIcon} from "../../img/icons/index.js";
import WishlistLink from "../Cart/WishlistLink.jsx";
import AllProductsLink from "../Products/AllProductsLink.jsx";

function HamburgerMenu() {
    const { isMenuOpen, toggleClickHandler } = useGlobalContext()

    return (
        <div className="relative">
            <button type="button" className="absolute right-4 z-50" onClick={toggleClickHandler}>
                <HamburgerIcon />
            </button>
            <div
                className={`fixed top-0 right-0 h-full w-[60vw] bg-[#181313] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div href="/cart" className=" flex flex-col justify-center items-center gap-4 text-xl p-4 mt-20 text-white font-semibold">
                    <CartLink />
                    <WishlistLink />
                    <AllProductsLink />
                </div>
            </div>
        </div>
    );
};




export default HamburgerMenu;
