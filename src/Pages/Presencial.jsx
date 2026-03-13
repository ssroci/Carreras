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
import {unroData} from "../Data/Presencial/unro"
import { iupaData } from "../Data/Presencial/iupa";
import { unslData } from "../Data/Presencial/sanluis";
import { umData } from "../Data/Presencial/um";
import { carrerasUCA } from "../Data/Presencial/uca";
import Buscador from "../Components/Buscador";

import "./Presencial.css";


// Unificamos todos los arrays en uno solo
const areasData = [
  ...unrnData,
  ...utnCarreras,
  ...unrcCarreras,
  ...unluCarreras,
  ...unlpCarreras,
  ...uncomaData,
  ...ufloCarreras,
  ...ucasalCarreras,
  ...ubaCarreras,
  ...uncCarreras, 
  ...unroData,
  ...us21Data,
  ...iupaData,
  ...unslData,
  ...umData,
  ...carrerasUCA
];

function Presencial() {
  const [busqueda, setBusqueda] = useState("");
console.log("UCA cargado:", carrerasUCA.length);
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