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

  // Todas las carreras a distancia filtradas por búsqueda
  const carreras = areasVirtual
    .flatMap(area => area.carreras)
    .filter(c => c.nombre.toLowerCase().includes(busqueda.toLowerCase()));

 

  return (
    <div className="carreras-container">

      <h1 className="titulo-principal">
        Carreras <span className="modalidad-azul">A Distancia</span>
      </h1>

      <Buscador setBusqueda={setBusqueda} />

      <p className="contador">{carreras.length} carreras encontradas</p>

      <div className="categorias">
        {categorias.map((cat, idx) => (
          <Link
            to={`/virtual/${cat.toLowerCase()}`}
            key={idx}
            className="categoria-card-link"
          >
            <div className="categoria-card">
              {cat} 
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Virtual;