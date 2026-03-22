import { useState } from "react";
import { Link } from "react-router-dom";
import { areasVirtual } from "../Data/CarrerasVirtual";
import Buscador from "../Components/Buscador";
import "./Virtual.css";

function Virtual() {
  const [busqueda, setBusqueda] = useState("");

  const categorias = [
    "Licenciatura",
    "Tecnicatura",
    "Ingeniería",
    "Profesorado",
    "Otras"
  ];

  const carreras = areasVirtual
    .flatMap(area => area.carreras)
    .filter(c => c.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="virtual-container">

      <div className="virtual-hero">
        <h1 className="virtual-titulo">
          Carreras <span>A Distancia</span>
        </h1>
      </div>

      <div className="virtual-search-area">
        <Buscador setBusqueda={setBusqueda} />
      </div>

      <p className="virtual-contador">{carreras.length} carreras encontradas</p>

      <div className="virtual-categorias">
        {categorias.map((cat, idx) => (
          <Link
            to={`/virtual/${cat.toLowerCase()}`}
            key={idx}
            className="virtual-categoria-link"
          >
            <div className="virtual-categoria-card">
              {cat}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Virtual;