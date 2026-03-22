import { useState } from "react";
import cursosData from "../Data/CursosData";
import Buscador from "../Components/Buscador";
import "./Cursos.css";

function Cursos() {
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(null);

  const cursos = cursosData
    .flatMap((area) => area.cursos)
    .filter((curso) =>
      curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

  const toggle = (i) => setAbierto(abierto === i ? null : i);

  return (
    <div className="cursos-container">

      <div className="cursos-hero">
        <h1>Cursos / <span className="acento-naranja">Capacitaciones</span></h1>
      </div>

      <div className="cursos-search-area">
        <Buscador setBusqueda={setBusqueda} />
      </div>

      <p className="cursos-contador">{cursos.length} cursos encontrados</p>

      {cursos.length === 0 && (
        <p className="cursos-sin-resultados">No se encontraron cursos.</p>
      )}

      <div className="cursos-acc-lista">
        {cursos.map((curso, i) => (
          <div
            className={`cursos-acc-item ${abierto === i ? "abierto" : ""}`}
            key={i}
          >
            <button className="cursos-acc-header" onClick={() => toggle(i)}>
              <div className="cursos-acc-info">
                <span className="cursos-acc-nombre">{curso.nombre}</span>
                {curso.duracion && (
                  <span className="cursos-acc-duracion">{curso.duracion}</span>
                )}
              </div>
              <span className="cursos-acc-flecha">
                {abierto === i ? "↑" : "→"}
              </span>
            </button>

            {abierto === i && (
              <div className="cursos-acc-body">
                {curso.descripcion && (
                  <p className="cursos-acc-desc">{curso.descripcion}</p>
                )}
                {curso.universidades && curso.universidades.length > 0 && (
                  <div className="cursos-acc-unis">
                    <h4>Instituciones</h4>
                    {curso.universidades.map((uni, j) => (
                      <a
                        key={j}
                        href={uni.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursos-acc-uni-link"
                      >
                        {uni.nombre}
                      </a>
                    ))}
                  </div>
                )}
                {curso.link && !curso.universidades && (
                  <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursos-acc-uni-link"
                  >
                    {curso.institucion} - Ver curso
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Cursos;