import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { areasData } from "../Data/Carreras";
import "./CarreraDetalle.css";

export default function CarreraDetalle() {
  const { id } = useParams();
  const area = areasData.find((a) => a.id === parseInt(id));
  const [carreraAbierta, setCarreraAbierta] = useState(null);

  if (!area) {
    return (
      <div className="detalle-error">
        <i className="bi bi-exclamation-circle" />
        <p>Área no encontrada.</p>
        <Link to="/presencial">← Volver</Link>
      </div>
    );
  }

  const totalUniversidades = area.carreras.reduce(
    (acc, c) => acc + c.universidades.length, 0
  );

  const todasProvincias = [
    ...new Set(
      area.carreras.flatMap((c) => c.universidades.map((u) => u.provincia))
    ),
  ].sort();

  return (
    <div className="detalle">
      <div className="detalle__bg" aria-hidden="true" />

      {/* Volver */}
      <Link to="/presencial" className="detalle__volver">
        <i className="bi bi-arrow-left" /> Volver a Presencial
      </Link>

      {/* Hero */}
      <div className="detalle__hero">
        <span className="detalle__badge" style={{ color: area.color, borderColor: area.color + "44" }}>
          <i className={`bi ${area.icono}`} /> Área · Presencial
        </span>
        <h1 className="detalle__titulo" style={{ "--acento": area.color }}>
          {area.area}
        </h1>
        <p className="detalle__desc">{area.descripcion}</p>

        <div className="detalle__stats">
          <div className="detalle__stat">
            <i className="bi bi-journal-bookmark-fill" style={{ color: area.color }} />
            <span>
              <strong>{area.carreras.length}</strong>
              <small>Carreras</small>
            </span>
          </div>
          <div className="detalle__stat">
            <i className="bi bi-building-fill" style={{ color: area.color }} />
            <span>
              <strong>{totalUniversidades}</strong>
              <small>Sedes totales</small>
            </span>
          </div>
          <div className="detalle__stat">
            <i className="bi bi-geo-alt-fill" style={{ color: area.color }} />
            <span>
              <strong>{todasProvincias.length}</strong>
              <small>Provincias</small>
            </span>
          </div>
        </div>
      </div>

      {/* Carreras del área */}
      <div className="detalle__carreras">
        <h2 className="detalle__seccion-titulo">
          Carreras en <span style={{ color: area.color }}>{area.area}</span>
        </h2>

        <div className="detalle__carreras-lista">
          {area.carreras.map((carrera, i) => {
            const abierta = carreraAbierta === carrera.id;
            return (
              <div
                key={carrera.id}
                className={`ccard ${abierta ? "ccard--abierta" : ""}`}
                style={{ "--acento": area.color, animationDelay: `${i * 60}ms` }}
              >
                {/* Header de la carrera */}
                <div
                  className="ccard__header"
                  onClick={() => setCarreraAbierta(abierta ? null : carrera.id)}
                >
                  <div className="ccard__header-left">
                    <div className="ccard__meta">
                      <span className="ccard__duracion">
                        <i className="bi bi-clock" /> {carrera.duracion} años
                      </span>
                      <span className="ccard__sedes-count">
                        <i className="bi bi-building" /> {carrera.universidades.length} sedes
                      </span>
                    </div>
                    <h3 className="ccard__nombre">{carrera.nombre}</h3>
                    <p className="ccard__desc">{carrera.descripcion}</p>
                  </div>
                  <button className="ccard__toggle" aria-label="expandir">
                    <i className={`bi bi-chevron-${abierta ? "up" : "down"}`} />
                  </button>
                </div>

                {/* Sedes expandidas */}
                {abierta && (
                  <div className="ccard__sedes">
                    <div className="ccard__sedes-grid">
                      {carrera.universidades.map((uni, j) => (
                        <a
                          key={j}
                          href={uni.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sede-item"
                        >
                          <div className="sede-item__top">
                            <span className="sede-item__sigla">{uni.sigla}</span>
                            <i className="bi bi-box-arrow-up-right sede-item__ext" />
                          </div>
                          <p className="sede-item__nombre">{uni.nombre}</p>
                          <p className="sede-item__lugar">
                            <i className="bi bi-geo-alt" />
                            {uni.ciudad}, {uni.provincia}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}