import "./Universidades.css";
import universidades from "../Data/Universidad/Universidades";

function Universidades() {
  return (
    <div className="universidades-page">

      <h1>Universidades de Argentina</h1>

      <div className="universidades-grid">

        {universidades.map((uni, index) => (
          <div key={index} className="universidad-wrapper">
            <div className="universidad-card">
              <img src={uni.logo} alt={uni.nombre} className="universidad-logo" />
            </div>
            <span className="universidad-nombre">{uni.nombre}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Universidades;
