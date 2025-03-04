import Home from "./Home";
import Studies from "./Studies";
import Projects from "./Projects";

export default function Main({
  school,
  setSchool,
  darkMode,
  currentPageCerti,
  setCurrentPageCerti,
  currentPageProjec,
  setCurrentPageProjec,
}) {
  return (
    <main className="container">
      <Home darkMode={darkMode} />
      <Studies
        school={school}
        setSchool={setSchool}
        currentPage={currentPageCerti}
        setCurrentPage={setCurrentPageCerti}
      />
      <Projects
        currentPage={currentPageProjec}
        setCurrentPage={setCurrentPageProjec}
      />
    </main>
  );
}
