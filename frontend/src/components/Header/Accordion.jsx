import AddToCart from "../Cart/AddToCart";
import useGlobalContext from "../../context/globalContext";

const HamburgerMenu = () => {
    const { isMenuOpen, toggleClickHandler } = useGlobalContext()

    return (
        <div className="relative">
            <button type="button" className="absolute top-4 right-4 z-50" onClick={toggleClickHandler}>
                <HamburgerIcon />
            </button>
            <div
                className={`fixed top-0 right-0 h-full w-[60vw] bg-[#181313] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div href="/cart" className="block text-xl p-4 mt-20 text-white font-semibold">
                    <AddToCart />
                </div>
            </div>
        </div>
    );
};


function HamburgerIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    )
}

export default HamburgerMenu;
