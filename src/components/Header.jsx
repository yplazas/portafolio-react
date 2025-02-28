import {
  PiHouseLineBold,
  PiBooksBold,
  PiDesktopBold,
  PiSunBold,
  PiMoonBold,
} from "react-icons/pi";
import NavEnlaces from "./NavEnlaces";

export default function Header({ darkMode, setDarkMode, hidden }) {
  const sizeIcon = "22px";
  return (
    <header>
      <nav className={`nav dark-theme ${hidden ? "hidden-nav" : ""}`}>
        <div className="nav__container">
          <div className="nav__logo">
            <a href="index.html" className="nav__logo-link">
              <span className="nav__logo-text dark-theme">Portafolio</span>
            </a>
          </div>
          <div className="nav__links">
            <NavEnlaces
              link={"#home"}
              textLink={"Inicio"}
              icon={PiHouseLineBold}
              sizeIcon={sizeIcon}
            />
            <NavEnlaces
              link={"#estudios"}
              textLink={"Estudios"}
              icon={PiBooksBold}
              sizeIcon={sizeIcon}
            />
            <NavEnlaces
              link={"#proyectos"}
              textLink={"Proyectos"}
              icon={PiDesktopBold}
              sizeIcon={sizeIcon}
            />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="toggle-btn dark-theme"
            >
              {darkMode ? <PiSunBold /> : <PiMoonBold />}
            </button>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
