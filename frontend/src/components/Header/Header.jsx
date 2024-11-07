import { Logo } from "./Logo"
import HamburgerMenu from "./HamburgerMenu"
function Header() {
    return (
        <nav className="flex justify-between my-7 ">
            <Logo />
            <HamburgerMenu />
        </nav>
    )
}

export default Header;