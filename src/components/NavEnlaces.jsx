import { Link } from "react-router";

export default function NavEnlaces({ link, textLink, icon: Icon, sizeIcon }) {
    return (
        <>
            <Link to={link}>
                <a className="nav__link">
                    <Icon style={{ width: sizeIcon, height: sizeIcon }}/>
                    <span className="nav__link-text">{textLink}</span>
                </a>
            </Link>
        </>
    )
}
