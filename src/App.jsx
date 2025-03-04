import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [school, setSchool] = useState("Udemy");
  const [currentPageCerti, setCurrentPageCerti] = useState(1);
  const [currentPageProjec, setCurrentPageProjec] = useState(1);

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

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > lastScrollY ? setHidden(true) : setHidden(false);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setCurrentPageCerti(1);
  }, [school]);

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        hidden={hidden}
        setHidden={setHidden}
        lastScrollY={lastScrollY}
        setLastScrollY={setLastScrollY}
      />
      <Main
        school={school}
        setSchool={setSchool}
        darkMode={darkMode}
        currentPageCerti={currentPageCerti}
        setCurrentPageCerti={setCurrentPageCerti}
        currentPageProjec={currentPageProjec}
        setCurrentPageProjec={setCurrentPageProjec}
      />
      <Footer />
    </>
  );
}

export default App;
