import Content from "../Content";
import { certificados } from "../../data/db";
import Pagination from "../Pagination";
import useGlobalContext from "../../hooks/useGlobalContext";

export default function StudiesCertificates() {
  const { school, currentPageCerti, setCurrentPageCerti } = useGlobalContext();
  // Filtrar certificados por institución específica
  const filterCertifications = certificados.filter(
    (certificado) => certificado.institucion === school
  );

  const ITEMS_PER_PAGE = 6;
  const startIndex = (currentPageCerti - 1) * ITEMS_PER_PAGE;
  const selectedItems = filterCertifications.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filterCertifications.length / ITEMS_PER_PAGE);

  return (
    <section className="contenido__certificados">
      <Content>
        <h2 className="dark-theme">CERTIFICADOS</h2>
        <div className="contenido__certificados-cursos">
          {selectedItems.map((certificado) => (
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
                  <a
                    className="dark-theme"
                    href={certificado.credencial}
                    target="_blank"
                  >
                    Ver credencial
                  </a>
                </div>
              </div>
            </Content>
          ))}
        </div>
        {totalPages > 1 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPageCerti}
            setCurrentPage={setCurrentPageCerti}
          />
        ) : (
          <></>
        )}
      </Content>
    </section>
  );
}
