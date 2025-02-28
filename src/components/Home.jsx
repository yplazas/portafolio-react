import HomeContenido from "./HomeContent";
import HomeInfo from "./HomeInfo";

export default function Home({darkMode}) {
  return (
    <section id="home" className="home__container">
      <HomeContenido />
      <HomeInfo darkMode={darkMode}/>
    </section>
  );
}
