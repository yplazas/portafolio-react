import Home from "./Home";
import Studies from "./Studies";
import Projects from "./Projects";

export default function Main({school, setSchool, darkMode}) {
  return (
    <main className="container">
      <Home darkMode={darkMode}/>
      <Studies school={school} setSchool={setSchool}/>
      <Projects />
    </main>
  );
}
