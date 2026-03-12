import { useParams } from "react-router-dom";
import { useState } from "react";

// Importar todos los arrays de universidades
import { unrnData } from "../Data/Presencial/Unrn";
import { utnCarreras } from "../Data/Presencial/utn";
import { unrcCarreras } from "../Data/Presencial/unrc";
import { unluCarreras } from "../Data/Presencial/unlu";
import { unlpCarreras } from "../Data/Presencial/unlp";
import { uncomaData } from "../Data/Presencial/uncomaData";
import { ufloCarreras } from "../Data/Presencial/uflo";
import { ucasalCarreras } from "../Data/Presencial/ucasal";
import { ubaCarreras } from "../Data/Presencial/uba";
import { uncCarreras } from "../Data/Presencial/unc";

import Buscador from "../Components/Buscador";
import { unificarCarreras } from "../utils/unificarCarreras";

import "./Categoria.css";

// Unificar todos los arrays
const todasCarreras = [
  ...unrnData,
  ...utnCarreras,
  ...unrcCarreras,
  ...unluCarreras,
  ...unlpCarreras,
  ...uncomaData,
  ...ufloCarreras,
  ...ucasalCarreras,
  ...ubaCarreras,
  ...uncCarreras
];

const areasData = unificarCarreras(todasCarreras);

function Categoria() {
  const { tipo } = useParams();
  const [busqueda, setBusqueda] = useState("");

  const carreras = areasData
    .filter((c) => c.tipo.toLowerCase() === tipo.toLowerCase())
    .filter((c) => c.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <div className="categoria-container">
      <h1 className="titulo">{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h1>

      <Buscador setBusqueda={setBusqueda} />

      <p className="contador">{carreras.length} carreras encontradas</p>

      {carreras.length === 0 && <p className="sin-resultados">No se encontraron carreras.</p>}

      <div className="carreras-grid">
        {carreras.map((c) => (
          <div className="carrera-card" key={c.nombre}>
            <h2>{c.nombre}</h2>
            <p>{c.descripcion}</p>
            <p><strong>Duración:</strong> {c.duracion} años</p>

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
    </div>
  );
}

export default Categoria;