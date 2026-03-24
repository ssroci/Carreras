
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Guía de Carreras</h3>
          <p>
            Información sobre carreras
            <br/> universitarias y cursos en Argentina.
          </p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
             <li>
              <a href="/universidades">Universidades de Argentina</a>
            </li>
            <li>
              <a href="/presencial">Carreras Presenciales</a>
            </li>
             <li>
              <a href="/virtual">Carreras a distancia </a>
            </li>
            <li>
              <a href="/cursos">Cursos</a>
            </li>
          
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: carrerasargstudio@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Guía de Carreras
      </div>
    </footer>
  );
}

export default Footer;