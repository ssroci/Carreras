import { useState } from "react";
import { Link } from "react-router-dom";
import { todasPresenciales } from "../Data/Presencial/todasPresenciales";
import Buscador from "../Components/Buscador";
import "./Presencial.css";

const areasData = todasPresenciales;

function Presencial() {
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(null);

  const categorias = [
    "Licenciatura",
    "Tecnicatura",
    "Ingeniería",
    "Profesorado",
    "Otras"
  ];


  const carrerasDestacadas = [
    {
      nombre: "Medicina",
      universidad: "Universidad Nacional de Córdoba",
      link: "/presencial/carrera/medicina",
      imagen: "/logos/medicina.png"
    },
    {
      nombre: "Ingeniería en Sistemas",
      universidad: "Universidad Tecnológica Nacional",
      link: "/presencial/carrera/ingenieria-en-sistemas",
      imagen: "/logos/ingsistemas.png"
    },
    {
      nombre: "Psicología",
      universidad: "Universidad de Buenos Aires",
      link: "/presencial/carrera/psicologia",
      imagen: "/logos/psicologia.png"
    },
    {
      nombre: "Tecnico en Seguridad e Higiene",
      universidad: "Universidad Nacional del Comahue",
      link: "/presencial/carrera/seguridad-e-higiene",
      imagen: "/logos/seh.png"
    }
  ];


  const resultados = busqueda
    ? Object.values(
        areasData
          .filter((c) =>
            c.nombre
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                busqueda
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
          )
          .reduce((acc, carrera) => {
            const nombre = carrera.nombre;

            if (!acc[nombre]) {
              acc[nombre] = {
                ...carrera,
                universidades: [...(carrera.universidades || [])]
              };
            } else {
              acc[nombre].universidades.push(
                ...(carrera.universidades || [])
              );
            }

            return acc;
          }, {})
      ).sort((a, b) => a.nombre.localeCompare(b.nombre))
    : [];

  const toggle = (nombre) => {
    setAbierto(abierto === nombre ? null : nombre);
  };

  return (
    <div className="presencial-container">

      <div className="presencial-hero">
        <h1 className="titulo-presencial">
          Carreras <span className="color">Presenciales</span>
        </h1>

        <p className="presencial-subtitulo">
          Buscá por nombre de carrera o explorá por categoría. Encontrá en qué
          universidades se dicta y dónde cursarla.
        </p>
      </div>

      <div className="presencial-search-area">
        <Buscador setBusqueda={setBusqueda} />
      </div>

      {busqueda && (
        <p className="contador">
          {resultados.length} carreras encontradas
        </p>
      )}

      {busqueda && resultados.length === 0 && (
        <p className="sin-resultados">
          No se encontraron carreras.
        </p>
      )}

      {}
      {busqueda && resultados.length > 0 && (
        <div className="accordion-lista">
          {resultados.map((c) => (
            <div
              className={`accordion-item ${
                abierto === c.nombre ? "abierto" : ""
              }`}
              key={c.nombre}
            >
              <button
                className="accordion-header"
                onClick={() => toggle(c.nombre)}
              >
                <div className="accordion-info">
                  <span className="accordion-nombre">
                    {c.nombre}
                  </span>

                  <span className="accordion-duracion">
                    {c.duracion} años
                  </span>
                </div>

                <span className="accordion-flecha">
                  {abierto === c.nombre ? "↑" : "↓"}
                </span>
              </button>

              {abierto === c.nombre && (
                <div className="accordion-body">

                  {c.descripcion && (
                    <p className="accordion-desc">
                      {c.descripcion}
                    </p>
                  )}

                  {c.universidades && (
                    <div className="accordion-unis">
                      <h4>Universidades</h4>

                      {c.universidades.map((uni, i) => (
                        <a
                          key={i}
                          href={uni.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="accordion-uni-link"
                        >
                          {uni.nombre} – {uni.ciudad},{" "}
                          {uni.provincia}
                        </a>
                      ))}

                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {}
      {!busqueda && (
        <div className="categorias">
          {categorias.map((cat) => (
            <Link
              key={cat}
              to={`/presencial/${cat.toLowerCase()}`}
              className="categoria-card"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      {}
      {!busqueda && (
        <div className="carreras-destacadas">

          <h2>Carreras destacadas</h2>

          <div className="cards-destacadas">

            {carrerasDestacadas.map((carrera, i) => (
              <Link
                key={i}
                to={carrera.link}
                className="card-destacada"
              >

                <img
                  src={carrera.imagen}
                  alt={carrera.nombre}
                  className="imagen-carrera"
                />

                <h3>{carrera.nombre}</h3>

                <p>{carrera.universidad}</p>

                <span className="ver-mas">
                  Ver carrera
                </span>

              </Link>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}

export default Presencial;