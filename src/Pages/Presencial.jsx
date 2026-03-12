import { useState } from "react";
import { Link } from "react-router-dom";
import { areasData } from "../Data/Carreras";
import Buscador from "../Components/Buscador";
import "./Presencial.css";

function Presencial() {
  const [busqueda, setBusqueda] = useState("");

  const categorias = ["Licenciatura", "Tecnicatura", "Ingeniería", "Profesorado", "Otras"];

  const resultados = busqueda
    ? areasData
        .filter((c) => c.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
    : [];

  return (
    <div className="presencial-container">
      <h1 className="titulo">Carreras <span>Presenciales</span></h1>

      <Buscador setBusqueda={setBusqueda} />

      {busqueda && (
        <p className="contador">{resultados.length} carreras encontradas</p>
      )}

      {/* Si hay búsqueda, mostrar resultados */}
      {busqueda && resultados.length === 0 && (
        <p className="sin-resultados">No se encontraron carreras.</p>
      )}

      {busqueda && resultados.length > 0 && (
        <div className="carreras-grid">
          {resultados.map((c) => (
            <div className="carrera-card" key={c.nombre}>
              <h2>{c.nombre}</h2>
              <p className="descripcion">{c.descripcion}</p>
              <p className="duracion"><strong>Duración:</strong> {c.duracion} años</p>
              {c.universidades && (
                <div className="universidades">
                  <h4>Universidades</h4>
                  {c.universidades.map((uni, i) => (
                    <a
                      key={i}
                      href={uni.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="universidad-link"
                    >
                      {uni.nombre} – {uni.ciudad}, {uni.provincia}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Si no hay búsqueda, mostrar categorías */}
      {!busqueda && (
        <div className="categorias">
          {categorias.map((cat) => (
            <Link key={cat} to={`/presencial/${cat.toLowerCase()}`} className="categoria-card">
              {cat}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Presencial;