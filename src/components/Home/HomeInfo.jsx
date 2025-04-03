import Content from "../Content";
import { tegnologias, idiomas, skills } from "../../data/db";
import useGlobalContext from "../../hooks/useGlobalContext";

export default function HomeInfo() {
  const { darkMode } = useGlobalContext();
  return (
    <section className="home__info">
      <Content>
        <h2 className="dark-theme">TECNOLOGIAS</h2>
        <div className="info">
          {tegnologias.map((tegnologia) => (
            <div className="info-skill" key={tegnologia.id}>
              <img
                src={
                  darkMode && tegnologia.imageDark
                    ? tegnologia.imageDark
                    : tegnologia.image
                }
                alt={tegnologia.nombre}
                className="info-skill-image"
              />
              <p className="dark-theme">{tegnologia.nombre}</p>
            </div>
          ))}
        </div>
      </Content>

      <Content>
        <h2 className="dark-theme">IDIOMAS</h2>
        {idiomas.map((idioma) => (
          <div className="info__idioma" key={idioma.id}>
            <span className="dark-theme">{idioma.nombre}</span>
            <div className="info__idioma-bar">
              <div
                className="info__idioma-progress"
                style={{ width: idioma.porcentaje }}
              ></div>
            </div>
            <span className="info__idioma-percent dark-theme">
              {idioma.porcentaje}
            </span>
          </div>
        ))}
      </Content>
      <Content>
        <h2 className="dark-theme">SKILLS</h2>
        {skills.map((skill) => (
          <div className="info__idioma" key={skill.id}>
            <span className="dark-theme">{skill.nombre}</span>
            <div className="info__idioma-bar">
              <div
                className="info__idioma-progress"
                style={{ width: skill.porcentaje }}
              ></div>
            </div>
            <span className="info__idioma-percent dark-theme">
              {skill.porcentaje}
            </span>
          </div>
        ))}
      </Content>
    </section>
  );
}
