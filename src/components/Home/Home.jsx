import "./home.css"
import HomeContenido from "./HomeContent";
import HomeInfo from "./HomeInfo";

export default function Home() {
  return (
    <section id="home" className="home__container">
      <HomeContenido />
      <HomeInfo />
    </section>
  );
}
