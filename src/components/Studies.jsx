import StudiesCertificates from "./StudiesCertificates";
import StudiesSchools from "./StudiesSchools";

export default function Studies({school, setSchool}) {
  
  const handleInstitucionChange = (institucion) => {
    setSchool(institucion);
  };

  return (
    <section id="estudios" className="estudios__container">
      <StudiesSchools handleInstitucionChange={handleInstitucionChange} />
      <StudiesCertificates school={school} />
    </section>
  );
}
