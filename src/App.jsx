import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  //estado para cambiar el tema del portafolio
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  //estados para ocultar barra de navegacion
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  //estados para cambiar institucion y paginaciones
  const [school, setSchool] = useState("Udemy");
  const [currentPageCerti, setCurrentPageCerti] = useState(1);
  const [currentPageProjec, setCurrentPageProjec] = useState(1);

  //funcion para cambiar el estado school, cuando se de click en el componente StudiesSchools
  const handleInstitucionChange = (institucion) => {
    setSchool(institucion);
  };

  //ejecutar el modo oscuro cuando se cambie el estado de cada dependencia
  useEffect(() => {
    const elements = document.querySelectorAll(".dark-theme");
    elements.forEach((element) => {
      if (darkMode) {
        element.classList.add("dark-mode");
      } else {
        element.classList.remove("dark-mode");
      }
    });
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, school, currentPageCerti, currentPageProjec, hidden]);

  //ejecutar el ocultado de header cuando se cambien el estado del scroll con respecto al eje Y
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > lastScrollY ? setHidden(true) : setHidden(false);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  //ejecutar el reseteo de la paginacion cuando se cambie el estado de school
  useEffect(() => {
    setCurrentPageCerti(1);
  }, [school]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          darkMode,
          setDarkMode,
          hidden,
          setHidden,
          lastScrollY,
          setLastScrollY,
          school,
          setSchool,
          currentPageCerti,
          setCurrentPageCerti,
          currentPageProjec,
          setCurrentPageProjec,
          handleInstitucionChange,
        }}
      >
        <Header />
        <Main />
        <Footer />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
