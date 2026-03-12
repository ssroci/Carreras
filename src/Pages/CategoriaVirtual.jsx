import { useParams } from "react-router-dom";
import { useState } from "react";
import { areasVirtual } from "../Data/CarrerasVirtual";
import Buscador from "../Components/Buscador";
import "./CategoriaVirtual.css";

function CategoriaVirtual() {
  const { categoria } = useParams();
  const [busqueda, setBusqueda] = useState("");
  const [carreraAbierta, setCarreraAbierta] = useState(null);

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

      const busquedaMatch = nombreLower.includes(busqueda.toLowerCase());
      return catMatch && busquedaMatch;
    });

  return (
    <div className="carreras-container">

      <h1 className="titulo-principal">
        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}{" "}
        <span style={{ color: "#4fc3f7", fontStyle: "italic" }}>A Distancia</span>
      </h1>

      <Buscador setBusqueda={setBusqueda} />

      <p className="contador">{carreras.length} carreras encontradas</p>

      {carreras.length === 0 && (
        <p className="sin-resultados">No se encontraron carreras.</p>
      )}

      <div className="carreras-grid">
        {carreras.map((c, i) => (
          <div className="carrera-card" key={i}>

            <h2>{c.nombre}</h2>
            <p className="descripcion">{c.descripcion}</p>
            <p className="duracion"><strong>Duración:</strong> {c.duracion} años</p>

            {c.universidades && c.universidades.length > 0 && (
              <div className="universidades-container">
                <button
                  className="toggle-universidades"
                  onClick={() => setCarreraAbierta(carreraAbierta === i ? null : i)}
                >
                  Universidades{" "}
                  <i className={`bi bi-chevron-${carreraAbierta === i ? "up" : "down"}`}></i>
                </button>
                {carreraAbierta === i && (
                  <div className="universidades">
                    {c.universidades.map((uni, j) => (
                      <a key={j} href={uni.link} target="_blank" rel="noopener noreferrer">
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