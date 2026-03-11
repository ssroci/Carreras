// src/Pages/AreaVirtual.jsx
import { useParams, Link } from "react-router-dom";
import { areasVirtual } from "../Data/CarrerasVirtual";
import "./Virtual.css";

export default function AreaVirtual() {
  const { id } = useParams();
  const area = areasVirtual.find((a) => a.id === parseInt(id));

  if (!area) {
    return (
      <div className="virtual__empty">
        <i className="bi bi-exclamation-triangle" />
        <p>Área no encontrada.</p>
        <Link to="/virtual">Volver a áreas</Link>
      </div>
    );
  }

  return (
    <div className="virtual">
      <div className="virtual__bg" aria-hidden="true" />

      {/* Hero */}
      <div className="virtual__hero">
        <span className="virtual__badge">Modalidad Virtual</span>
        <h1 className="virtual__titulo">
          Carreras en <span className="virtual__acento">{area.area}</span>
        </h1>
        <p className="virtual__subtitulo">
          {area.carreras.length} carrera{area.carreras.length > 1 ? "s" : ""} de {area.area} se dictan 100% online en {area.carreras.reduce((acc, c) => acc + c.universidades.length, 0)} universidades nacionales.
        </p>
      </div>

      {/* Grid de carreras */}
      <div className="virtual__grid">
        {area.carreras.map((carrera, i) => (
          <div
            key={carrera.id}
            className="vcard"
            style={{ "--acento": area.color, animationDelay: `${i * 80}ms` }}
          >
            <div className="vcard__top">
              <h2 className="vcard__nombre">{carrera.nombre}</h2>
              <p className="vcard__desc">{carrera.descripcion}</p>
            </div>

            <div className="vcard__stats">
              <div className="vcard__stat">
                <i className="bi bi-clock" />
                <span>{carrera.duracion} años</span>
              </div>
              <div className="vcard__stat">
                <i className="bi bi-laptop" />
                <span>{carrera.universidades.length} universidades</span>
              </div>
            </div>

            <div className="vcard__carreras">
              {carrera.universidades.map((u, idx) => (
                <a
                  key={idx}
                  href={u.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vcard__carrera-tag"
                  title={`Ir a ${u.nombre}`}
                >
                  {u.nombre} ({u.sigla})
                </a>
              ))}
            </div>

            <div className="vcard__cta">
              Ver carrera <i className="bi bi-arrow-right" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}