import FooterLogo from "./FooterLogo"
import Services from "./Services"
import { SocialMedia } from "../../img/icons/index.js"
import Assistance from "./Assistance"

function Footer() {
    return (
        <footer className="bg-[#181313] ml-0 mr-0 pb-12">
            <div className="mobile:flex mobile:justify-between mobile:mx-40">

                <FooterLogo />
                <Services />
                <Assistance />
            </div>
            <SocialMedia />
        </footer>
    )
}

export default Footer