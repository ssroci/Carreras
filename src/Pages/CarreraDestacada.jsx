import { useParams } from "react-router-dom";
import { todasPresenciales } from "../Data/Presencial/todasPresenciales";
import "./CarreraDestacada.css";

function CarreraDestacada() {
  const { nombre } = useParams();


  const normalizar = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");


  const carrerasFiltradas = todasPresenciales.filter(
    (c) => normalizar(c.nombre) === normalizar(nombre)
  );

  if (carrerasFiltradas.length === 0) {
    return (
      <div className="detalle-container">
        <h2>Carrera no encontrada</h2>
      </div>
    );
  }

  const carrera = carrerasFiltradas[0];


  const universidades = carrerasFiltradas.flatMap(
    (c) => c.universidades || []
  );

  return (
    <div className="detalle-container">

      <h1 className="detalle-titulo">
        {carrera.nombre}
      </h1>

      {carrera.descripcion && (
        <p className="detalle-desc">
          {carrera.descripcion}
        </p>
      )}

      <h2>
        Universidades donde se dicta
      </h2>

      <div className="lista-universidades">

        {universidades.map((uni, i) => (
          <a
            key={i}
            href={uni.link}
            target="_blank"
            rel="noopener noreferrer"
            className="uni-card"
          >
            {uni.nombre} — {uni.ciudad}, {uni.provincia}
          </a>
        ))}

      </div>

    </div>
  );
}

export default CarreraDestacada;