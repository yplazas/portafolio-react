import "./projects.css"
import { Fragment } from "react";
import { proyectos } from "../../data/db";
import { FaGithub, FaFigma, FaCirclePlay } from "react-icons/fa6";
import Content from "../Content";
import Pagination from "../Pagination";
import useGlobalContext from "../../hooks/useGlobalContext";

export default function Projects() {
  const { currentPageProjec, setCurrentPageProjec } = useGlobalContext();

  const ITEMS_PER_PAGE = 3;
  const startIndex = (currentPageProjec - 1) * ITEMS_PER_PAGE;
  const selectedItems = proyectos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(proyectos.length / ITEMS_PER_PAGE);

  return (
    <section id="proyectos">
      <Content>
        <h2 className="dark-theme">PROYECTOS</h2>

        <div className="proyectos__container">
          {selectedItems.map((proyecto) => (
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
                      className="icon-project dark-theme"
                    >
                      <FaGithub style={{ width: "27px", height: "27px" }} />
                    </a>

                    {proyecto.urlFigma ? (
                      <a
                        target="_blank"
                        href={proyecto.urlFigma}
                        className="icon-project dark-theme"
                      >
                        <FaFigma style={{ width: "27px", height: "27px" }} />
                      </a>
                    ) : (
                      <></>
                    )}

                    {proyecto.urlDemo ? (
                      <a
                        target="_blank"
                        href={proyecto.urlDemo}
                        className="icon-project dark-theme"
                      >
                        <FaCirclePlay style={{ width: "27px", height: "27px" }} />
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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPageProjec}
          setCurrentPage={setCurrentPageProjec}
        />
      </Content>
    </section>
  );
}
