import { Logo } from "./Logo"
import HamburgerMenu from "./Accordion"
const Header = () => {
    return (
        <nav className="flex justify-between my-7 ">
            <Logo />
            <HamburgerMenu />
        </nav>
    )
}

export default Header;