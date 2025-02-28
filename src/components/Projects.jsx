import { Fragment } from "react";
import { proyectos } from "../data/db";
import { FaGithub } from "react-icons/fa6";
import Content from "./Content";

export default function Projects() {
  return (
    <section id="proyectos">
      <Content>
        <h2 className="dark-theme">PROYECTOS</h2>

        <div className="proyectos__container">
          {proyectos.map((proyecto) => (
            <Content key={proyecto.id}>
              <div className="card-proyecto">
                <div className="card-proyecto-image">
                  <img src={proyecto.imagen} alt={proyecto.titulo} />
                </div>
                <h3 className="dark-theme">{proyecto.titulo}</h3>
                <p className="dark-theme">{proyecto.descripcion}</p>
                <div className="card-proyecto__footer">
                  <div className="card-proyecto__link">
                    <a
                      target="_blank"
                      href={proyecto.urlGitHub}
                      className="icon-github dark-theme"
                    >
                      <FaGithub style={{ width: "30px", height: "30px" }} />
                    </a>
                    {proyecto.urlDemo ? (
                      <a
                        target="_blank"
                        href={proyecto.urlGitHub}
                        className="button-demo"
                      >
                        <span className="card-proyecto__link-text dark-theme">
                          Demo
                        </span>
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="tecnologias">
                    {proyecto.tecnologias.map((tecnologia) => (
                      <Fragment key={tecnologia}>
                        <img
                          src={`img/logos/${tecnologia.toLowerCase()}.svg`}
                          alt={tecnologia}
                        />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Content>
          ))}
        </div>
      </Content>
    </section>
  );
}
