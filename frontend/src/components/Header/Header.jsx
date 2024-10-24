import { Logo } from "./Logo"
import Accordion from "./Accordion"

const Header = () => {
    return (
        <nav className="flex justify-between my-7 ">
            <Logo />
            <Accordion />
        </nav>
    )
}

export default Header;