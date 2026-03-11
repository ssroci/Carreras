import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import cursosData from "../Data/CursosData";
import "./Cursos.css";

export default function Cursos() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const resultadoDirecto = useMemo(() => {
    if (!busqueda.trim()) return null;
    const q = busqueda.toLowerCase();
    for (const area of cursosData) {
      const curso = area.cursos.find((c) =>
        c.nombre.toLowerCase().includes(q)
      );
      if (curso) return { area, curso };
    }
    return null;
  }, [busqueda]);

  const areasFiltradas = useMemo(() => {
    if (!busqueda.trim()) return cursosData;
    const q = busqueda.toLowerCase();
    return cursosData.filter((area) => {
      const matchArea = area.area.toLowerCase().includes(q);
      const matchCurso = area.cursos.some((c) =>
        c.nombre.toLowerCase().includes(q)
      );
      const matchInstitucion = area.cursos.some((c) =>
        c.institucion.toLowerCase().includes(q)
      );
      return matchArea || matchCurso || matchInstitucion;
    });
  }, [busqueda]);

  return (
    <div className="cursos">
      <div className="cursos__bg" aria-hidden="true" />

      {/* Hero */}
      <div className="cursos__hero">
        <span className="cursos__badge">Cursos y Capacitaciones</span>
        <h1 className="cursos__titulo">
          Cursos <span className="cursos__acento">a distancia</span>
        </h1>
        <p className="cursos__subtitulo">
          Explorá todas las áreas de capacitación con modalidad a distancia en instituciones de todo el país.
        </p>
      </div>

      {/* Buscador */}
      <div className="cursos__controles">
        <div className="cursos__search-wrap">
          <i className="bi bi-search cursos__search-icon" />
          <input
            className="cursos__search"
            type="text"
            placeholder="Buscar área, curso o institución…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <button className="cursos__search-clear" onClick={() => setBusqueda("")}>
              <i className="bi bi-x" />
            </button>
          )}
        </div>
      </div>

      {/* Resultado directo */}
      {resultadoDirecto && (
        <div
          className="cursos__resultado-directo"
          style={{ "--acento": resultadoDirecto.area.color }}
        >
          <div className="cursos__rd-left">
            <span className="cursos__rd-label">Curso encontrado</span>
            <p className="cursos__rd-curso">
              <i className={`bi ${resultadoDirecto.area.icono}`} />
              {resultadoDirecto.curso.nombre}
            </p>
            <p className="cursos__rd-area">
              Área: <strong>{resultadoDirecto.area.area}</strong>
              &nbsp;·&nbsp;
              {resultadoDirecto.curso.duracion}
              &nbsp;·&nbsp;
              {resultadoDirecto.curso.institucion}
            </p>
          </div>
          <button
            className="cursos__rd-btn"
            onClick={() => navigate(`/cursos/${resultadoDirecto.area.id}`)}
          >
            Ir a {resultadoDirecto.area.area} <i className="bi bi-arrow-right" />
          </button>
        </div>
      )}

      {/* Contador */}
      <p className="cursos__contador">
        {areasFiltradas.length === 0
          ? "Sin resultados"
          : `${areasFiltradas.length} área${areasFiltradas.length !== 1 ? "s" : ""} encontrada${areasFiltradas.length !== 1 ? "s" : ""}`}
      </p>

      {/* Grid de áreas */}
      {areasFiltradas.length > 0 ? (
        <div className="cursos__grid">
          {areasFiltradas.map((area, i) => (
            <Link
              to={`/cursos/${area.id}`}
              key={area.id}
              className="acard"
              style={{ "--acento": area.color, animationDelay: `${i * 80}ms` }}
            >
              <div className="acard__top">
                <span className="acard__icono">
                  <i className={`bi ${area.icono}`} />
                </span>
                <h2 className="acard__nombre">{area.area}</h2>
                <p className="acard__desc">{area.descripcion}</p>
              </div>

              <div className="acard__stats">
                <div className="acard__stat">
                  <i className="bi bi-journal-bookmark" />
                  <span>{area.cursos.length} cursos</span>
                </div>
                <div className="acard__stat">
                  <i className="bi bi-building" />
                  <span>{[...new Set(area.cursos.map(c => c.institucion))].length} instituciones</span>
                </div>
              </div>

              <div className="acard__carreras">
                {area.cursos.map((c, idx) => (
                  <span key={idx} className="acard__carrera-tag">
                    {c.nombre}
                  </span>
                ))}
              </div>

              <div className="acard__cta">
                Ver cursos <i className="bi bi-arrow-right" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="cursos__empty">
          <i className="bi bi-search" />
          <p>No encontramos resultados para <strong>"{busqueda}"</strong></p>
          <button onClick={() => setBusqueda("")}>Limpiar búsqueda</button>
        </div>
      )}
    </div>
  );
}