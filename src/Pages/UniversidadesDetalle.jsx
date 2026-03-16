import { useParams } from "react-router-dom";
import { carrerasUNRN } from "../Data/CarrerasUni/unrndata";
import { carrerasUNCOMA } from "../Data/CarrerasUni/uncomadata";

function UniversidadesDetalle() {
  const { id } = useParams();

  let carreras = [];

  if (id === "unrn") {
    carreras = carrerasUNRN;
  } else if (id === "uncoma") {
    carreras = carrerasUNCOMA;
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