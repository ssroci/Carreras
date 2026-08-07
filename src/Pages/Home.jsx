import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";

function Home() {
  const [universidades, setUniversidades] = useState(0);
  const [carreras, setCarreras] = useState(0);

  useEffect(() => {
    const uniTarget = 45;
    const carTarget = 500;

    let uniCount = 0;
    let carCount = 0;

    const intervalo = setInterval(() => {
      if (uniCount < uniTarget) {
        uniCount++;
        setUniversidades(uniCount);
      }

      if (carCount < carTarget) {
        carCount += 10;
        setCarreras(carCount);
      }

      if (uniCount >= uniTarget && carCount >= carTarget) {
        clearInterval(intervalo);
      }
    }, 30);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="home">

   <div className="hero">
  <div className="hero-content">
    <h1>
      <span className="titulo-principal">Guía de carreras</span>
      <span className="argentina">Argentina</span>
    </h1>
    <p className="subtitulo">
      Esta guía reúne información sobre carreras universitarias y universidades de Argentina.
      Explora qué estudiar, descubre en qué instituciones se dicta cada carrera y encuentra
      distintas modalidades de formación.
    </p>
  </div>

  <div className="hero-imagen">
    <img src="/logos/mapa.png" alt="Mapa de Argentina" />
  </div>
</div>


      {}
      <div className="stats">
        <div className="stat">
          <h2>+{universidades}</h2>
          <p>Universidades</p>
        </div>

        <div className="stat">
          <h2>+{carreras}</h2>
          <p>Carreras</p>
        </div>
      </div>

      {}
      <div className="seccion">
        <h2 className="seccion-titulo">Universidades</h2>
      
        <div className="tipos">
          <Link to="/universidades" className="card-link">
            <div className="card universidades">
              <div className="card-circle">
                <i className="bi bi-mortarboard-fill"></i>
              </div>
              <h3>Universidades de Argentina </h3>
             <p> Explorá las universidades y elegí la carrera de tus sueños.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* CARRERAS */}
      <div className="seccion">
        <h2 className="seccion-titulo">Carreras</h2>

        <div className="tipos">
          <Link to="/presencial" className="card-link">
            <div className="card presencial">
              <div className="card-circle">
                <i className="bi bi-person-fill"></i>
              </div>
              <h3>Presencial</h3>
              <p>Carreras en modalidad presencial</p>
            </div>
          </Link>

          <Link to="/virtual" className="card-link">
            <div className="card distancia">
              <div className="card-circle">
                <i className="bi bi-pc-display-horizontal"></i>
              </div>
              <h3>A distancia</h3>
              <p>Carreras online</p>
            </div>
          </Link>
        </div>
      </div>

      {}
      <div className="seccion">
        <h2 className="seccion-titulo">Cursos</h2>

        <div className="tipos">
          <Link to="/cursos" className="card-link">
            <div className="card cursos">
              <div className="card-circle">
                <i className="bi bi-book"></i>
              </div>
              <h3>Cursos</h3>
              <p>Capacitaciones y formación a corto plazo</p>
            </div>
          </Link>
        </div>
      </div>


    <Footer />




    </div>
  );
}

export default Home;