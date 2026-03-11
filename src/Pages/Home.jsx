import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1>Guía de carreras <span className="argentina">Argentina</span></h1>
      <p className="subtitulo">
        Esta guía reúne información sobre carreras universitarias e instituciones educativas de Argentina. Busca tu carrera, explora universidades y encuentra la modalidad de estudio que mejor se adapte a ti.
      </p>

     
      <div className="seccion">
        <h2 className="seccion-titulo">Carreras</h2>
        <div className="tipos">

          <Link to="/presencial">
            <button>
              Presencial
              <i className="bi bi-person-fill"></i>
            </button>
          </Link>

          <Link to="/virtual">
            <button>
              A distancia
              <i className="bi bi-pc-display-horizontal"></i>
            </button>
          </Link>

        </div>
      </div>

      
      <div className="seccion">
        <h2 className="seccion-titulo">Cursos</h2>
        <div className="tipos">

          <Link to="/cursos">
            <button>
              Cursos / Capacitaciones a distancia
              <i className="bi bi-book"></i>
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Home;