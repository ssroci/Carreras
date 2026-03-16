import "./Universidades.css";
import { Link } from "react-router-dom";
import UniversidadUnion from "../Data/Universidad/Universidades";

function Universidades() {
  return (
    <div className="universidades-page">

      <h1>Universidades de Argentina</h1>

      <div className="universidades-grid">

        {UniversidadUnion.map((uni, index) => (
          <Link
            to={`/universidad/${uni.id}`}
            key={index}
            className="universidad-wrapper"
          >
            <div className="universidad-card">
              <img
                src={uni.logo}
                alt={uni.nombre}
                className="universidad-logo"
              />
            </div>

            <span className="universidad-nombre">
              {uni.nombre}
            </span>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Universidades;