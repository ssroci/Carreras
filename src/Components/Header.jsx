
import { Link } from "react-router-dom";
import "./Header.css"; 


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Estudiá en Argentina</Link>
        <i className="bi bi-geo-alt-fill"></i>
      </div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/virtual">Virtual</Link>
        <Link to="/presencial">Presencial</Link>
        <Link to="/cursos">Cursos</Link>
      </nav>
    </header>
  );
}

export default Header;