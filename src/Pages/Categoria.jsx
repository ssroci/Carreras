import { useParams } from "react-router-dom";
import { useState } from "react";
import { todasPresenciales } from "../Data/Presencial/todasPresenciales";
import Buscador from "../Components/Buscador";
import { unificarCarreras } from "../utils/unificarCarreras";
import "./Categoria.css";

const areasData = unificarCarreras(todasPresenciales);

function Categoria() {
  const { tipo } = useParams();
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(null);

  const carreras = areasData
    .filter((c) => c.tipo.toLowerCase() === tipo.toLowerCase())
    .filter((c) =>
      c.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .includes(busqueda.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    )
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  const toggle = (nombre) => {
    setAbierto(abierto === nombre ? null : nombre);
  };

  return (
    <div className="categoria-container">

      <div className="categoria-hero">
        <h1 className="categoria-titulo">
          {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        </h1>
      </div>

      <div className="categoria-search-area">
        <Buscador setBusqueda={setBusqueda} />
      </div>

      <p className="categoria-contador">{carreras.length} carreras encontradas</p>

      {carreras.length === 0 && (
        <p className="categoria-sin-resultados">No se encontraron carreras.</p>
      )}

      <div className="accordion-lista">
        {carreras.map((c) => (
          <div
            className={`accordion-item ${abierto === c.nombre ? "abierto" : ""}`}
            key={c.nombre}
          >
            <button className="accordion-header" onClick={() => toggle(c.nombre)}>
              <div className="accordion-info">
                <span className="accordion-nombre">{c.nombre}</span>
                <span className="accordion-duracion">{c.duracion} años</span>
              </div>
              <span className="accordion-flecha">
                {abierto === c.nombre ? "↑" : "↓"}
              </span>
            </button>

            {abierto === c.nombre && (
              <div className="accordion-body">
                {c.descripcion && <p className="accordion-desc">{c.descripcion}</p>}
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
                        {uni.nombre} – {uni.ciudad}, {uni.provincia}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Categoria;