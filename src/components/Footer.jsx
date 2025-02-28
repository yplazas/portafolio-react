import RedSocial from "./RedSocial";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <RedSocial />
        <div className="footer__copyright">
          <div className="copyrightIcon dark-theme">
            <FaRegCopyright />
          </div>
          <p className="copyright dark-theme">
            Todos los derechos reservados - Yeison Plazas
          </p>
        </div>
      </div>
    </footer>
  );
}
