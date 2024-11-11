import footerImg from "../../img/Logo.png";

function FooterLogo() {
    return (
        <div className="mt-12 mobile:mt-0">
            <div className="flex justify-center mobile:justify-normal items-center filter-[invert(100%)]">
                <div  className="mt-12">

                    <img src={footerImg} alt="company logo" className="filter invert" />
                </div>
            </div>
            <p className="text-[#CFCFCF] mx-6 mt-4 mobile:mx-0 mobile:w-80">We area a online e-commerce site locate in nowhere. Out online e-commerce offers more than</p>
        </div>
    )
}

export default FooterLogo



