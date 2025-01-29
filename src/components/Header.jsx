
import { PiHouseLineBold, PiBooksBold, PiDesktopBold } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
import NavEnlaces from "./NavEnlaces";
import { Link } from "react-router";

export default function Header() {

    let sizeIcon = "22px";

    return (
        <header>
            <nav className="nav">
                <div className="nav__container">
                    <div className="nav__logo">
                        <Link to="/">
                            <a href="index.html" className="nav__logo-link">
                                <span className="nav__logo-text">Portafolio</span>
                            </a>
                        </Link>
                    </div>
                    <div className="nav__links">
                        <NavEnlaces
                            link={"/"}
                            textLink={"Inicio"}
                            icon={PiHouseLineBold}
                            sizeIcon={sizeIcon}
                        />
                        <NavEnlaces
                            link={"/academia"}
                            textLink={"Academia"}
                            icon={PiBooksBold}
                            sizeIcon={sizeIcon}
                        />
                        <NavEnlaces
                            link={"/proyectos"}
                            textLink={"Proyectos"}
                            icon={PiDesktopBold}
                            sizeIcon={sizeIcon}
                        />
                        <NavEnlaces
                            link={"/contacto"}
                            textLink={"Contacto"}
                            icon={RiContactsBook3Line}
                            sizeIcon={sizeIcon}
                        />
                    </div>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
