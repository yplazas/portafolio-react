import StudiesCertificates from "./StudiesCertificates";
import StudiesSchools from "./StudiesSchools";

export default function Studies() {
  return (
    <section id="estudios" className="estudios__container">
      <StudiesSchools />
      <StudiesCertificates />
    </section>
  );
}
