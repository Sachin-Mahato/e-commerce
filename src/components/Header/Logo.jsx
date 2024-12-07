import { useNavigate } from "react-router-dom"
import LogoImage from "../../img/Logo.png"

export function Logo() {
    var navigate = useNavigate()
    return (
        <div onClick={() => navigate("/")}>
            <img src={LogoImage} alt="company logo" />
        </div>
    )
}
