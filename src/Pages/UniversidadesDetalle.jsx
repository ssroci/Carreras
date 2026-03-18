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
import { carrerasUNER } from "../Data/CarrerasUni/uner";
import { carrerasUNCUYO } from "../Data/CarrerasUni/uncuyo";
import { carrerasUNaM } from "../Data/CarrerasUni/unam";
import { carrerasUNSa } from "../Data/CarrerasUni/unsa";
import { carrerasUNCA } from "../Data/CarrerasUni/unca";
import { carrerasUNF } from "../Data/CarrerasUni/unf";
import { carrerasUNSJ } from "../Data/CarrerasUni/unsjdata";
import { carrerasUNTDF } from "../Data/CarrerasUni/untdfdata";
import { carrerasUNSE } from "../Data/CarrerasUni/unsedata";
import { carrerasUNT } from "../Data/CarrerasUni/untdata";
import { carrerasUNLaR } from "../Data/CarrerasUni/unlardata";
import { carrerasUNO } from "../Data/CarrerasUni/unodata";
import { carrerasUNMDP } from "../Data/CarrerasUni/mdqdata";
import { carrerasUNDEC } from "../Data/CarrerasUni/undecdata";
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
import { carrerasUNSAdA } from "../Data/CarrerasUni/unsadadata";
import { carrerasUNTREF } from "../Data/CarrerasUni/untrefdata";
import { carrerasUNVM } from "../Data/CarrerasUni/unvmdata";
import { carrerasUNViMe } from "../Data/CarrerasUni/unvimedata";
import { carrerasUNDAV } from "../Data/CarrerasUni/undavdata";
import { carrerasUNL } from "../Data/CarrerasUni/unlidata";
import { carrerasUNNOBA } from "../Data/CarrerasUni/unnobadata";
import { carrerasUNIPE } from "../Data/CarrerasUni/unipedata";
import { carrerasUNICEN } from "../Data/CarrerasUni/unicendata";


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
      } else if (id === "uner") {
    carreras = carrerasUNER;
      } else if (id === "uncuyo") {
    carreras = carrerasUNCUYO;
      } else if (id === "unam") {
    carreras = carrerasUNaM;
      } else if (id === "unsa") {
    carreras = carrerasUNSa;
     } else if (id === "unca") {
    carreras = carrerasUNCA;
     } else if (id === "unf") {
    carreras = carrerasUNF;
     } else if (id === "unsj") {
    carreras = carrerasUNSJ;
       } else if (id === "untdf") {
    carreras = carrerasUNTDF;
     } else if (id === "unse") {
    carreras = carrerasUNSE;
      } else if (id === "unt") {
    carreras = carrerasUNT;
     } else if (id === "unlar") {
    carreras = carrerasUNLaR;
      } else if (id === "uno") {
    carreras = carrerasUNO;
      } else if (id === "unmdp") {
    carreras = carrerasUNMDP;
        } else if (id === "unch") {
    carreras = carrerasUNDEC;
    } else if (id === "unq") {
    carreras = carrerasUNQ;
        } else if (id === "unlam") {
    carreras = carrerasUNLAM;
    } else if (id === "unlpam") {
    carreras = carrerasUNLPAM;
} else if (id === "unla") {
    carreras = carrerasUNLA;
    } else if (id === "unju") {
    carreras = carrerasUNJU;
  } else if (id === "una") {
    carreras = carrerasUNA;
   } else if (id === "unlz") {
    carreras = carrerasUNLZ;
       } else if (id === "unsam") {
    carreras = carrerasUNSAM;
      } else if (id === "ungs") {
    carreras = carrerasUNGS;
  } else if (id === "unm") {
    carreras = carrerasUNM;
     } else if (id === "unahur") {
    carreras = carrerasUNAHUR;
   } else if (id === "unpaz") {
    carreras = carrerasUNPAZ;
  } else if (id === "unraf") {
    carreras = carrerasUNRAF;
    } else if (id === "unsada") {
    carreras = carrerasUNSAdA;
  } else if (id === "untref") {
    carreras = carrerasUNTREF;
   } else if (id === "unvm") {
    carreras = carrerasUNVM;
     } else if (id === "unvime") {
    carreras = carrerasUNViMe;
     } else if (id === "undav") {
    carreras = carrerasUNDAV;
    } else if (id === "unl") {
    carreras = carrerasUNL;
    } else if (id === "unnoba") {
    carreras = carrerasUNNOBA;
  } else if (id === "unipe") {
    carreras = carrerasUNIPE;

      } else if (id === "unicen") {
    carreras = carrerasUNICEN;






    
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