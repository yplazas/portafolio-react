import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function RedSocial() {
    let sizeIcon = "30px";
    return (
        <div className="redes-sociales">
            <a className="redes-sociales__link" href="https://github.com/yplazas" target="_blank">
                <FaGithub style={{ width: sizeIcon, height: sizeIcon }} />
            </a>
            <a className="redes-sociales__link" href="https://www.linkedin.com/in/yeison-plazas-viloria-971439205/" target="_blank">
                <FaLinkedin style={{ width: sizeIcon, height: sizeIcon }} />
            </a>
            <a className="redes-sociales__link" href="https://twitter.com/YeiAlexPlazas/">
                <FaXTwitter style={{ width: sizeIcon, height: sizeIcon }} />
            </a>
        </div>
    )
}
