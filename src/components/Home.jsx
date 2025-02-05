import Footer from "./Footer";
import Header from "./Header";
import HomeContenido from "./HomeContenido";
import HomeInfo from "./HomeInfo";
import MainContainer from "./MainContainer";
export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>

          <main className="home__container">
            <HomeContenido />
            <HomeInfo />
          </main>

      </MainContainer>
      <Footer />

    </>
  );
}
