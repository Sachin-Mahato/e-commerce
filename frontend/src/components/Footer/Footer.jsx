import FooterLogo from "./FooterLogo"
import Services from "./Services"
import SocialMedia from "./socialMedia/socialMedia"
import Assistance from "./Assistance"

const Footer = () => {
    return (
        <footer className="bg-[#181313] ml-0 mr-0 pb-12">
            <FooterLogo />
            <Services />
            <Assistance />
            <SocialMedia />
        </footer>
    )
}

export default Footer