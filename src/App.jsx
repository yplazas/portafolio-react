import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { certificados } from "./data/db";

function App() {
  const [certificates] = useState(certificados);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [school, setSchool] = useState("Udemy");

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

    const handleScroll = () => {
      window.scrollY > lastScrollY ? setHidden(true) : setHidden(false);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [darkMode, school, hidden, lastScrollY, certificates]);

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
      <Main school={school} setSchool={setSchool} darkMode={darkMode} />
      <Footer />
    </>
  );
}

export default App;
