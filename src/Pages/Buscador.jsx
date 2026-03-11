import { useState } from "react";

function Buscador({ modalidad }) {

  const [busqueda, setBusqueda] = useState("");

  return (
    <div>

      <h2>Carreras {modalidad}</h2>

      <input
        type="text"
        placeholder="Buscar carrera..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

    </div>
  );
}

export default Buscador;