import Content from "./Content";
import { certificados } from "../data/db";

export default function StudiesCertificates({ school }) {
  // Filtrar certificados por institución específica
  const filterCertifications = certificados.filter(
    (certificado) => certificado.institucion === school
  );

  return (
    <section className="contenido__certificados">
      <Content>
        <h2 className="dark-theme">CERTIFICADOS</h2>
        <div className="contenido__certificados-cursos">
          {filterCertifications.map((certificado) => (
            <Content key={certificado.id}>
              <div className="contenido__certificados-curso">
                <div className="certificados-curso__logo dark-theme">
                  <img src={certificado.imagen} alt={certificado.institucion} />
                </div>
                <div className="certificados-curso__descripcion">
                  <h3 className="certificado-titulo dark-theme">
                    {certificado.titulo}
                  </h3>
                  <p className="dark-theme">{certificado.institucion}</p>
                  <a className="dark-theme" href={certificado.credencial} target="_blank">
                    Ver credencial
                  </a>
                </div>
              </div>
            </Content>
          ))}
        </div>
      </Content>
    </section>
  );
}
