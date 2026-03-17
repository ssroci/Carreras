import { useParams } from "react-router-dom";
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


function UniversidadesDetalle() {
  const { id } = useParams();

  let carreras = [];

  if (id === "unrn") {
    carreras = carrerasUNRN;
  } else if (id === "uncoma") {
    carreras = carrerasUNCOMA;
  } else if (id === "unlp") {
    carreras = carrerasUNLP; 
  } else if (id === "uba") {
    carreras = carrerasUBA;
  } else if (id === "unc") {
    carreras = carrerasUNC;
    } else if (id === "unrc") {
    carreras = carrerasUNRC;
      } else if (id === "unc") {
    carreras = carrerasUNC;
   } else if (id === "ucasal") {
    carreras = carrerasUCASAL;
     } else if (id === "unlu") {
    carreras = carrerasUNLU;
     } else if (id === "uflo") {
    carreras = carrerasUFLO;
     } else if (id === "unr") {
    carreras = carrerasUNRO;
     } else if (id === "um") {
    carreras = carrerasUM;
      } else if (id === "unsl") {
    carreras = carrerasUNSL;
       } else if (id === "siglo21") {
    carreras = carrerasSiglo21;
    

    
  }

  return (
    <div>
      <h1>Carreras</h1>

      {carreras.length === 0 ? (
        <p>No hay carreras disponibles.</p>
      ) : (
        <ul>
          {carreras.map((carrera, index) => {
            const [texto, link] = carrera.split("|");

            return (
              <li key={index}>
                {texto}{" "}
                <a href={link} target="_blank" rel="noopener noreferrer">
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