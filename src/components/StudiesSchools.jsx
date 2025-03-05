import { estudios } from "../data/db";
import Content from "./Content";
import useGlobalContext from "../hooks/useGlobalContext";

export default function StudiesSchools() {
  const { handleInstitucionChange } = useGlobalContext();
  return (
    <section className="contenido__estudios">
      <Content>
        <h2 className="dark-theme">ESTUDIOS</h2>
        <div className="contenido__estudios-cursos">
          {estudios.map((estudio) =>
            estudio.institucion === "Universidad de la Guajira" ? (
              <div
                className="contenido__estudios-curso dark-theme"
                style={{ cursor: "auto", transform: "scale(1)" }}
                key={estudio.id}
              >
                <div className="estudios-curso__logo dark-theme">
                  <img src={estudio.imagen} alt={estudio.institucion} />
                </div>
                <div className="estudios-curso__descripcion">
                  <h3 className="dark-theme">{estudio.institucion}</h3>
                  <p className="dark-theme">{estudio.titulo}</p>
                  <span className="dark-theme">{estudio.duracion}</span>
                </div>
              </div>
            ) : (
              <div
                className="contenido__estudios-curso dark-theme"
                key={estudio.id}
                onClick={() => handleInstitucionChange(estudio.institucion)}
              >
                <div className="estudios-curso__logo dark-theme">
                  <img src={estudio.imagen} alt={estudio.institucion} />
                </div>
                <div className="estudios-curso__descripcion">
                  <h3 className="dark-theme">{estudio.institucion}</h3>
                  <p className="dark-theme">{estudio.titulo}</p>
                  <span className="dark-theme">{estudio.duracion}</span>
                </div>
              </div>
            )
          )}
        </div>
      </Content>
    </section>
  );
}
