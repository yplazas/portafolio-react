import Content from "./Content";
import PortadaSvg from "./PortadaSvg";
import RedSocial from "./RedSocial";

export default function HomeContenido() {
  return (
    <section className="home__contenido">
      <Content>
        <div className="contenido__inicio-portada">
          <PortadaSvg />
          <div className="inicio-imagen-perfil">
            <img src="img/me.jpeg" alt="imagen de perfil" />
          </div>
        </div>

        <div className="contenido__inicio-info">
          <div className="inicio-info-text">
            <h1 className="dark-theme">Ing. Yeison Plazas</h1>
            <p className="dark-theme">Ingeniero de Sistemas | Desarrollador Front-end</p>
            <RedSocial />
          </div>
          <div className="inicio-info-image">
            <img src="img/webDevices.png" alt="devices" />
          </div>
        </div>
      </Content>
      <Content>
        <h2 className="dark-theme">SOBRE MI</h2>
        <p className="dark-theme">
          Me considero una persona persistente, responsable, colaborativa y
          organizada, comprometida a dar siempre el 100% de mi esfuerzo para
          alcanzar los mejores resultados en cualquier labor que desempeñe.
        </p>
        <br />
        <p className="dark-theme">
          Actualmente, estoy concentrado en ampliar mis habilidades en el ámbito
          de la programación, especialmente en el desarrollo web. Me encuentro
          aprendiendo HTML, CSS, JavaScript, Typescript, Node.js, React y Git,
          junto con otras tecnologías pertinentes. Este enfoque tiene como
          objetivo complementar y enriquecer mi perfil profesional,
          permitiéndome estar preparado para desafíos más amplios y contribuir
          de manera más integral en proyectos futuros.
        </p>
      </Content>
    </section>
  );
}
