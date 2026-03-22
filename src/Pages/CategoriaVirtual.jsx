import { useParams } from "react-router-dom";
import { useState } from "react";
import { areasVirtual } from "../Data/CarrerasVirtual";
import Buscador from "../Components/Buscador";
import "./CategoriaVirtual.css";

function CategoriaVirtual() {
  const { categoria } = useParams();
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(null);

  const tiposConocidos = ["licenciatura", "tecnicatura", "ingeniería", "ingenieria", "profesorado"];

  const carreras = areasVirtual
    .flatMap(area => area.carreras)
    .filter(c => {
      const nombreLower = c.nombre.toLowerCase();
      const catLower = categoria.toLowerCase();
      let catMatch;
      if (catLower === "otras") {
        catMatch = !tiposConocidos.some(t => nombreLower.startsWith(t));
      } else {
        catMatch = nombreLower.startsWith(catLower);
      }
      return catMatch && nombreLower.includes(busqueda.toLowerCase());
    });

  const toggle = (i) => setAbierto(abierto === i ? null : i);

  return (
    <div className="cat-virtual-container">

      <div className="cat-virtual-hero">
        <h1 className="cat-virtual-titulo">
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}{" "}
          <span>A Distancia</span>
        </h1>
      </div>

      <div className="cat-virtual-search-area">
        <Buscador setBusqueda={setBusqueda} />
      </div>

      <p className="cat-virtual-contador">{carreras.length} carreras encontradas</p>

      {carreras.length === 0 && (
        <p className="cat-virtual-sin-resultados">No se encontraron carreras.</p>
      )}

      <div className="accordion-lista">
        {carreras.map((c, i) => (
          <div
            className={`accordion-item ${abierto === i ? "abierto" : ""}`}
            key={i}
          >
            <button className="accordion-header" onClick={() => toggle(i)}>
              <div className="accordion-info">
                <span className="accordion-nombre">{c.nombre}</span>
                <span className="accordion-duracion">{c.duracion} años</span>
              </div>
              <span className="accordion-flecha">
                {abierto === i ? "↑" : "↓"}
              </span>
            </button>

            {abierto === i && (
              <div className="accordion-body">
                {c.descripcion && <p className="accordion-desc">{c.descripcion}</p>}
                {c.universidades && c.universidades.length > 0 && (
                  <div className="accordion-unis">
                    <h4>Universidades</h4>
                    {c.universidades.map((uni, j) => (
                      <a
                        key={j}
                        href={uni.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accordion-uni-link"
                      >
                        {uni.nombre}
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

export default CategoriaVirtual;