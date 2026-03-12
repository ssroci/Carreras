import { useState } from "react";
import cursosData from "../Data/CursosData";
import Buscador from "../Components/Buscador";
import "./Cursos.css";

function Cursos() {
  const [busqueda, setBusqueda] = useState("");

  const cursos = cursosData
    .flatMap((area) => area.cursos)
    .filter((curso) =>
      curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

  return (
    <div className="carreras-container">

      <h1>Cursos / <span className="acento-naranja">Capacitaciones</span></h1>

      <Buscador setBusqueda={setBusqueda} />

      <p className="contador">{cursos.length} cursos encontrados</p>

      <div className="cursos-grid">
        {cursos.map((curso, index) => (
          <div className="carrera-card" key={index}>

            <h2>{curso.nombre}</h2>

            {curso.duracion && (
              <p className="duracion">
                <strong>Duracion:</strong> {curso.duracion}
              </p>
            )}

            {curso.link && (
              <a
                href={curso.link}
                target="_blank"
                rel="noopener noreferrer"
                className="universidad-link"
              >
                {curso.institucion} - Ver curso
              </a>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Cursos;