import footerImg from "../../img/Logo.png";

const FooterLogo = () => {
    return (
        <div className="mt-12">
            <div className="flex justify-center items-center filter-[invert(100%)]">
                <div  className="mt-12">

                    <img src={footerImg} alt="company logo" className="filter invert" />
                </div>
            </div>
            <p className="text-[#CFCFCF] mx-6 mt-4">We area a online e-commerce site locate in nowhere. Out online e-commerce offers more than</p>
        </div>
    )
}

export default FooterLogo



