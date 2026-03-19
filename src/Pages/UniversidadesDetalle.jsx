import { useParams } from "react-router-dom";
import { useState } from "react";

import { carrerasUNRN } from "../Data/CarrerasUni/unrndata";
import { carrerasUNCOMA } from "../Data/CarrerasUni/uncomadata";
import { carrerasUNLP } from "../Data/CarrerasUni/unlpdata";
import { carrerasUBA } from "../Data/CarrerasUni/ubadata";
import { carrerasUNC } from "../Data/CarrerasUni/uncdata";
import { carrerasUNRC } from "../Data/CarrerasUni/unrcdata";
import { carrerasUNLU } from "../Data/CarrerasUni/unlu";
import { carrerasUCASAL } from "../Data/CarrerasUni/ucasaldata";
import { carrerasUFLO } from "../Data/CarrerasUni/uflodata";
import { carrerasUNRO } from "../Data/CarrerasUni/unrodata";
import { carrerasUM } from "../Data/CarrerasUni/unmdata";
import { carrerasUNSL } from "../Data/CarrerasUni/unsl";
import { carrerasSiglo21 } from "../Data/CarrerasUni/us21";
import { carrerasUNER } from "../Data/CarrerasUni/uner";
import { carrerasUNCUYO } from "../Data/CarrerasUni/uncuyo";
import { carrerasUNaM } from "../Data/CarrerasUni/unam";
import { carrerasUNSa } from "../Data/CarrerasUni/unsa";
import { carrerasUNCA } from "../Data/CarrerasUni/unca";
import { carrerasUNSJ } from "../Data/CarrerasUni/unsjdata";
import { carrerasUNTDF } from "../Data/CarrerasUni/untdfdata";
import { carrerasUNSE } from "../Data/CarrerasUni/unsedata";
import { carrerasUNT } from "../Data/CarrerasUni/untdata";
import { carrerasUNLaR } from "../Data/CarrerasUni/unlardata";
import { carrerasUNO } from "../Data/CarrerasUni/unodata";
import { carrerasUNMDP } from "../Data/CarrerasUni/mdqdata";
import { carrerasUNQ } from "../Data/CarrerasUni/unqdata";
import { carrerasUNLAM } from "../Data/CarrerasUni/unlamdata";
import { carrerasUNLPAM } from "../Data/CarrerasUni/unlapdata";
import { carrerasUNLA } from "../Data/CarrerasUni/unladata";
import { carrerasUNJU } from "../Data/CarrerasUni/unjudata";
import { carrerasUNA } from "../Data/CarrerasUni/unadata";
import { carrerasUNLZ } from "../Data/CarrerasUni/unlzdata";
import { carrerasUNSAM } from "../Data/CarrerasUni/unsamdata";
import { carrerasUNGS } from "../Data/CarrerasUni/unsgdata";
import { carrerasUNM } from "../Data/CarrerasUni/unmoredata";
import { carrerasUNAHUR } from "../Data/CarrerasUni/unhurdata";
import { carrerasUNPAZ } from "../Data/CarrerasUni/unpazdata";
import { carrerasUNRAF } from "../Data/CarrerasUni/unrafdata";
import { carrerasUNTREF } from "../Data/CarrerasUni/untrefdata";
import { carrerasUNVM } from "../Data/CarrerasUni/unvmdata";
import { carrerasUNViMe } from "../Data/CarrerasUni/unvimedata";
import { carrerasUNDAV } from "../Data/CarrerasUni/undavdata";
import { carrerasUNL } from "../Data/CarrerasUni/unlidata";
import { carrerasUNNOBA } from "../Data/CarrerasUni/unnobadata";
import { carrerasUNIPE } from "../Data/CarrerasUni/unipedata";
import { carrerasUNICEN } from "../Data/CarrerasUni/unicendata";
import { carrerasUNDEC } from "../Data/CarrerasUni/undecdata";
import { carrerasUNF } from "../Data/CarrerasUni/unf";
import {carrerasUNSAdA} from "../Data/CarrerasUni/unsadadata"

import "./UniversidadesDetalle.css";

function UniversidadesDetalle() {
  const { id } = useParams();
  const [busqueda, setBusqueda] = useState("");

  const universidadesData = {
    unrn: { nombre: "Universidad Nacional de Río Negro", carreras: carrerasUNRN },
    uncoma: { nombre: "Universidad Nacional del Comahue", carreras: carrerasUNCOMA },
    unlp: { nombre: "Universidad Nacional de La Plata", carreras: carrerasUNLP },
    uba: { nombre: "Universidad de Buenos Aires", carreras: carrerasUBA },
    unc: { nombre: "Universidad Nacional de Córdoba", carreras: carrerasUNC },
    unca: { nombre: "Universidad Nacional de Catamarca", carreras: carrerasUNCA },
    unsa: { nombre: "Universidad Nacional de Salta", carreras: carrerasUNSa },
    unsj: { nombre: "Universidad Nacional de San Juan", carreras: carrerasUNSJ },
    unch: { nombre: "Universidad Nacional de Chilecito", carreras: carrerasUNDEC },
    uncuyo: { nombre: "Universidad Nacional de Cuyo", carreras: carrerasUNCUYO },
    uner: { nombre: "Universidad Nacional de Entre Ríos", carreras: carrerasUNER },
    unlu: { nombre: "Universidad Nacional de Luján", carreras: carrerasUNLU },
    unmdp: { nombre: "Universidad Nacional de Mar del Plata", carreras: carrerasUNMDP },
    unlam: { nombre: "Universidad Nacional de La Matanza", carreras: carrerasUNLAM },
    unla: { nombre: "Universidad Nacional de Lanús", carreras: carrerasUNLA },
    unlz: { nombre: "Universidad Nacional de Lomas de Zamora", carreras: carrerasUNLZ },
    unq: { nombre: "Universidad Nacional de Quilmes", carreras: carrerasUNQ },
    unr: { nombre: "Universidad Nacional de Rosario", carreras: carrerasUNRO },
    unrc: { nombre: "Universidad Nacional de Río Cuarto", carreras: carrerasUNRC },
    unse: { nombre: "Universidad Nacional de Santiago del Estero", carreras: carrerasUNSE },
    unt: { nombre: "Universidad Nacional de Tucumán", carreras: carrerasUNT },
    unvm: { nombre: "Universidad Nacional de Villa María", carreras: carrerasUNVM },
    unraf: { nombre: "Universidad Nacional de Rafaela", carreras: carrerasUNRAF },
    undav: { nombre: "Universidad Nacional de Avellaneda", carreras: carrerasUNDAV },
    unicen: { nombre: "Universidad Nacional del Centro", carreras: carrerasUNICEN },
    unl: { nombre: "Universidad Nacional del Litoral", carreras: carrerasUNL },
    unnoba: { nombre: "Universidad Nacional del Noroeste de Buenos Aires", carreras: carrerasUNNOBA },
    uno: { nombre: "Universidad Nacional del Oeste", carreras: carrerasUNO },
    unpaz: { nombre: "Universidad Nacional de José C. Paz", carreras: carrerasUNPAZ },
    unahur: { nombre: "Universidad Nacional de Hurlingham", carreras: carrerasUNAHUR },
    unsam: { nombre: "Universidad Nacional de San Martín", carreras: carrerasUNSAM },
    ungs: { nombre: "Universidad Nacional de General Sarmiento", carreras: carrerasUNGS },
    unm: { nombre: "Universidad Nacional de Moreno", carreras: carrerasUNM },
    unju: { nombre: "Universidad Nacional de Jujuy", carreras: carrerasUNJU },
    una: { nombre: "Universidad Nacional de las Artes", carreras: carrerasUNA },
    unlar: { nombre: "Universidad Nacional de La Rioja", carreras: carrerasUNLaR },
    unlpam: { nombre: "Universidad Nacional de La Pampa", carreras: carrerasUNLPAM },
    unam: { nombre: "Universidad Nacional de Misiones", carreras: carrerasUNaM },
    untref: { nombre: "Universidad Nacional de Tres de Febrero", carreras: carrerasUNTREF },
    untf: { nombre: "Universidad Nacional de Tierra del Fuego", carreras: carrerasUNTDF },
    unvime: { nombre: "Universidad Nacional de Villa Mercedes", carreras: carrerasUNViMe },
    unipe: { nombre: "Universidad Pedagógica Nacional", carreras: carrerasUNIPE },
    unsa: { nombre: "Universidad Nacional  de Salta", carreras: carrerasUNSa },
    uflo: { nombre: "Universidad de Flores", carreras: carrerasUFLO },
    siglo21: { nombre: "Universidad Siglo 21", carreras: carrerasSiglo21 },
    um: { nombre: "Universidad de Mendoza", carreras: carrerasUM },
     unsl: { nombre: "Universidad Nacional de San Luis", carreras: carrerasUNSL },
     ucasal: { nombre: "Universidad Católica de Salta", carreras: carrerasUCASAL },
     unf: { nombre: "Universidad Nacional de Formosa", carreras: carrerasUNF },
    unsada: { nombre: "Universidad Nacional de San Antonio de Areco", carreras: carrerasUNSAdA },
  };

  const universidad = universidadesData[id];
  const carreras = universidad ? universidad.carreras : [];
  const nombreUni = universidad ? universidad.nombre : "Universidad";

  const carrerasFiltradas = carreras.filter((carrera) =>
    carrera.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
<div className="filtro">
  <h1 className="titulo">{nombreUni}</h1>

  <input
    type="text"
    placeholder="Buscar carrera..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
    className="buscador"
  />

  <p className="resultados">
    {carrerasFiltradas.length} resultados
  </p>
</div>
    
      {carrerasFiltradas.length === 0 ? (
        <p className="sin-resultados">No se encontraron carreras.</p>
      ) : (
        <ul className="lista">
          {carrerasFiltradas.map((carrera, index) => {
            const [texto, link] = carrera.split("|");

            return (
              <li key={index} className="item">
                <span className="nombre-carrera">{texto}</span>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton"
                >
                  Ver carrera
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default UniversidadesDetalle;