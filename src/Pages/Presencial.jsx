import { useState } from "react";
import { Link } from "react-router-dom";
import { unrnData } from "../Data/Presencial/Unrn";
import { ubaCarreras } from "../Data/Presencial/uba";
import { utnCarreras } from "../Data/Presencial/utn";
import { unrcCarreras } from "../Data/Presencial/unrc";
import { unluCarreras } from "../Data/Presencial/unlu";
import { unlpCarreras } from "../Data/Presencial/unlp";
import { uncomaData } from "../Data/Presencial/uncomaData";
import { ufloCarreras } from "../Data/Presencial/uflo";
import { ucasalCarreras } from "../Data/Presencial/ucasal";
import { us21Data } from "../Data/Presencial/siglo21";
import { uncCarreras } from "../Data/Presencial/unc";
import { unroData } from "../Data/Presencial/unro";
import { unslData } from "../Data/Presencial/sanluis";
import { umData } from "../Data/Presencial/um";
import { carrerasUCA } from "../Data/Presencial/uca";
import Buscador from "../Components/Buscador";

import "./Presencial.css";

const areasData = [
  ...unrnData, ...utnCarreras, ...unrcCarreras, ...unluCarreras,
  ...unlpCarreras, ...uncomaData, ...ufloCarreras, ...ucasalCarreras,
  ...ubaCarreras, ...uncCarreras, ...unroData, ...us21Data,
  ...unslData, ...umData, ...carrerasUCA,
];

function Presencial() {
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(null);

  const categorias = ["Licenciatura", "Tecnicatura", "Ingeniería", "Profesorado", "Otras"];

  const resultados = busqueda
    ? areasData
        .filter((c) => c.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
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
        <p className="contador">{resultados.length} carreras encontradas</p>
      )}

      {busqueda && resultados.length === 0 && (
        <p className="sin-resultados">No se encontraron carreras.</p>
      )}

      {/* RESULTADOS ACCORDION */}
      {busqueda && resultados.length > 0 && (
        <div className="accordion-lista">
          {resultados.map((c) => (
            <div
              className={`accordion-item ${abierto === c.nombre ? "abierto" : ""}`}
              key={c.nombre}
            >
              <button className="accordion-header" onClick={() => toggle(c.nombre)}>
                <div className="accordion-info">
                  <span className="accordion-nombre">{c.nombre}</span>
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
      )}

      {/* CATEGORÍAS */}
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
    </div>
  );
}

export default Presencial;