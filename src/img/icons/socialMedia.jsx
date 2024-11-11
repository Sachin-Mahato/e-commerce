import Twitter from "./Twitter"
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import Tiktok from "./Tiktok"

const SocialMedia = () => {
    return (
        <div className="flex justify-center mobile:justify-start mobile:ml-40 items-center gap-4 mt-8 mb-12">
            <Twitter />
            <Facebook />
            <Instagram />
            <Tiktok />
        </div>
    )
}

export default SocialMedia