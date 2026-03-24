
import "./Buscador.css";
function Buscador({ setBusqueda }) {
  return (
    <div className="buscador-input-wrapper">
      <input
        type="text"
        placeholder="Buscar carrera..."
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}

export default Buscador;