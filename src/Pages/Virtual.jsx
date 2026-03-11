import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { areasVirtual } from "../Data/CarrerasVirtual";
import "./Virtual.css";

export default function Virtual() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  // Resultado directo
  const resultadoDirecto = useMemo(() => {
    if (!busqueda.trim()) return null;
    const q = busqueda.toLowerCase();
    for (const area of areasVirtual) {
      const carrera = area.carreras.find((c) =>
        c.nombre.toLowerCase().includes(q)
      );
      if (carrera) return { area, carrera };
    }
    return null;
  }, [busqueda]);

  // Filtrado de áreas
  const areasFiltradas = useMemo(() => {
    if (!busqueda.trim()) return areasVirtual;
    const q = busqueda.toLowerCase();
    return areasVirtual.filter((area) => {
      const matchArea = area.area.toLowerCase().includes(q);
      const matchCarrera = area.carreras.some((c) =>
        c.nombre.toLowerCase().includes(q)
      );
      const matchUniversidad = area.carreras.some((c) =>
        c.universidades.some((u) =>
          u.nombre.toLowerCase().includes(q) ||
          u.sigla.toLowerCase().includes(q)
        )
      );
      return matchArea || matchCarrera || matchUniversidad;
    });
  }, [busqueda]);

  return (
    <div className="virtual">
      {/* Background */}
      <div className="virtual__bg" aria-hidden="true" />

      {/* Hero */}
      <div className="virtual__hero">
        <span className="virtual__badge">Modalidad Virtual</span>
        <h1 className="virtual__titulo">
          Carreras <span className="virtual__acento">virtuales</span>
        </h1>
        <p className="virtual__subtitulo">
          Estudiá desde cualquier lugar del país con carreras 100% online en universidades nacionales.
        </p>
      </div>

      {/* Buscador estilo presencial */}
      <div className="presencial__controles">
        <div className="presencial__search-wrap">
          <i className="bi bi-search presencial__search-icon" />
          <input
            className="presencial__search"
            type="text"
            placeholder="Buscar área, carrera, universidad o provincia…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <button
              className="presencial__search-clear"
              onClick={() => setBusqueda("")}
            >
              <i className="bi bi-x" />
            </button>
          )}
        </div>
      </div>

      {/* Resultado directo */}
      {resultadoDirecto && (
        <div
          className="virtual__resultado-directo"
          style={{ "--acento": resultadoDirecto.area.color }}
        >
          <div className="virtual__rd-left">
            <span className="virtual__rd-label">Carrera encontrada</span>
            <p className="virtual__rd-carrera">
              <i className={`bi ${resultadoDirecto.area.icono}`} />
              {resultadoDirecto.carrera.nombre}
            </p>
            <p className="virtual__rd-area">
              Área: <strong>{resultadoDirecto.area.area}</strong>
              &nbsp;·&nbsp;
              {resultadoDirecto.carrera.duracion} años
              &nbsp;·&nbsp;
              {resultadoDirecto.carrera.universidades.length} universidades
            </p>
          </div>
          <button
            className="virtual__rd-btn"
            onClick={() => navigate(`/virtual/${resultadoDirecto.area.id}`)}
          >
            Ir a {resultadoDirecto.area.area} <i className="bi bi-arrow-right" />
          </button>
        </div>
      )}

      {/* Contador */}
      <p className="virtual__contador">
        {areasFiltradas.length === 0
          ? "Sin resultados"
          : `${areasFiltradas.length} área${areasFiltradas.length !== 1 ? "s" : ""} encontrada${areasFiltradas.length !== 1 ? "s" : ""}`}
      </p>

      {/* Grid de áreas */}
      {areasFiltradas.length > 0 ? (
        <div className="virtual__grid">
          {areasFiltradas.map((area, i) => {
            const totalUniversidades = area.carreras.reduce(
              (acc, c) => acc + c.universidades.length,
              0
            );

            return (
              <Link
                to={`/virtual/${area.id}`}
                key={area.id}
                className="vcard"
                style={{ "--acento": area.color, animationDelay: `${i * 80}ms` }}
              >
                <div className="vcard__top">
                  <span className="vcard__icono">
                    <i className={`bi ${area.icono}`} />
                  </span>
                  <h2 className="vcard__nombre">{area.area}</h2>
                  <p className="vcard__desc">{area.descripcion}</p>
                </div>

                <div className="vcard__stats">
                  <div className="vcard__stat">
                    <i className="bi bi-journal-bookmark" />
                    <span>{area.carreras.length} carreras</span>
                  </div>
                  <div className="vcard__stat">
                    <i className="bi bi-laptop" />
                    <span>{totalUniversidades} opciones</span>
                  </div>
                </div>

                <div className="vcard__carreras">
                  {area.carreras.map((c) => (
                    <span key={c.id} className="vcard__carrera-tag">
                      {c.nombre}
                    </span>
                  ))}
                </div>

                <div className="vcard__cta">
                  Ver carreras y universidades <i className="bi bi-arrow-right" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="virtual__empty">
          <i className="bi bi-search" />
          <p>No encontramos resultados para <strong>"{busqueda}"</strong></p>
          <button onClick={() => setBusqueda("")}>Limpiar búsqueda</button>
        </div>
      )}
    </div>
  );
}