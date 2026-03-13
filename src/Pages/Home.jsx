import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1>
        Guía de carreras <span className="argentina">Argentina</span>
      </h1>

      <p className="subtitulo">
       Esta guía reúne información sobre carreras universitarias y universidades de Argentina. Explora qué estudiar, descubre en qué instituciones se dicta cada carrera y encuentra distintas modalidades de formación para elegir el camino académico que mejor se adapte a ti.
      </p>


      {/* UNIVERSIDADES */}

      <div className="seccion">
        <h2 className="seccion-titulo">Universidades</h2>

        <div className="tipos">

          <Link to="/universidades">
            <button className="universidades">
              <i className="bi bi-mortarboard-fill"></i>
              Universidades en Argentina
            </button>
          </Link>

        </div>
      </div>


      {/* CARRERAS */}

      <div className="seccion">
        <h2 className="seccion-titulo">Carreras</h2>

        <div className="tipos">

          <Link to="/presencial">
            <button className="presencial">
              <i className="bi bi-person-fill"></i>
              Presencial
            </button>
          </Link>

          <Link to="/virtual">
            <button className="distancia">
              <i className="bi bi-pc-display-horizontal"></i>
              A distancia
            </button>
          </Link>

        </div>
      </div>


      {/* CURSOS */}

      <div className="seccion">
        <h2 className="seccion-titulo">Cursos</h2>

        <div className="tipos">

          <Link to="/cursos">
            <button className="cursos">
              <i className="bi bi-book"></i>
              Cursos / Capacitaciones
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Home;
