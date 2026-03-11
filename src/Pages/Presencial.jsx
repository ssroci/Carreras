import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { areasData } from "../Data/Carreras";
import "./Presencial.css";

export default function Presencial() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const resultadoDirecto = useMemo(() => {
    if (!busqueda.trim()) return null;
    const q = busqueda.toLowerCase();
    for (const area of areasData) {
      const carrera = area.carreras.find((c) =>
        c.nombre.toLowerCase().includes(q)
      );
      if (carrera) return { area, carrera };
    }
    return null;
  }, [busqueda]);

  const areasFiltradas = useMemo(() => {
    if (!busqueda.trim()) return areasData;
    const q = busqueda.toLowerCase();
    return areasData.filter((area) => {
      const matchArea = area.area.toLowerCase().includes(q);
      const matchCarrera = area.carreras.some((c) =>
        c.nombre.toLowerCase().includes(q)
      );
      const matchUniversidad = area.carreras.some((c) =>
        c.universidades.some(
          (u) =>
            u.nombre.toLowerCase().includes(q) ||
            u.ciudad.toLowerCase().includes(q) ||
            u.provincia.toLowerCase().includes(q)
        )
      );
      return matchArea || matchCarrera || matchUniversidad;
    });
  }, [busqueda]);

  return (
    <div className="presencial">
      <div className="presencial__bg" aria-hidden="true" />

      {/* Hero */}
      <div className="presencial__hero">
        <span className="presencial__badge">Modalidad Presencial</span>
        <h1 className="presencial__titulo">
          Carreras <span className="presencial__acento">presenciales</span>
        </h1>
        <p className="presencial__subtitulo">
          Explorá todas las áreas de estudio con cursada presencial en universidades de todo el país.
        </p>
      </div>

    
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
            <button className="presencial__search-clear" onClick={() => setBusqueda("")}>
              <i className="bi bi-x" />
            </button>
          )}
        </div>
      </div>

      
      {resultadoDirecto && (
        <div
          className="presencial__resultado-directo"
          style={{ "--acento": resultadoDirecto.area.color }}
        >
          <div className="presencial__rd-left">
            <span className="presencial__rd-label">Carrera encontrada</span>
            <p className="presencial__rd-carrera">
              <i className={`bi ${resultadoDirecto.area.icono}`} />
              {resultadoDirecto.carrera.nombre}
            </p>
            <p className="presencial__rd-area">
              Área: <strong>{resultadoDirecto.area.area}</strong>
              &nbsp;·&nbsp;
              {resultadoDirecto.carrera.duracion} años
              &nbsp;·&nbsp;
              {resultadoDirecto.carrera.universidades.length} sedes
            </p>
          </div>
          <button
            className="presencial__rd-btn"
            onClick={() => navigate(`/presencial/${resultadoDirecto.area.id}`)}
          >
            Ir a {resultadoDirecto.area.area} <i className="bi bi-arrow-right" />
          </button>
        </div>
      )}

   
      <p className="presencial__contador">
        {areasFiltradas.length === 0
          ? "Sin resultados"
          : `${areasFiltradas.length} área${areasFiltradas.length !== 1 ? "s" : ""} encontrada${areasFiltradas.length !== 1 ? "s" : ""}`}
      </p>


      {areasFiltradas.length > 0 ? (
        <div className="presencial__grid">
          {areasFiltradas.map((area, i) => {
            const totalSedes = area.carreras.reduce(
              (acc, c) => acc + c.universidades.length, 0
            );
            const provincias = [
              ...new Set(
                area.carreras.flatMap((c) => c.universidades.map((u) => u.provincia))
              ),
            ];

            return (
              <Link
                to={`/presencial/${area.id}`}
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
                    <span>{area.carreras.length} carreras</span>
                  </div>
                  <div className="acard__stat">
                    <i className="bi bi-building" />
                    <span>{totalSedes} sedes</span>
                  </div>
                  <div className="acard__stat">
                    <i className="bi bi-geo-alt" />
                    <span>{provincias.length} provincias</span>
                  </div>
                </div>

                <div className="acard__carreras">
                  {area.carreras.map((c) => (
                    <span key={c.id} className="acard__carrera-tag">
                      {c.nombre}
                    </span>
                  ))}
                </div>

                <div className="acard__cta">
                  Ver carreras y sedes <i className="bi bi-arrow-right" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="presencial__empty">
          <i className="bi bi-search" />
          <p>No encontramos resultados para <strong>"{busqueda}"</strong></p>
          <button onClick={() => setBusqueda("")}>Limpiar búsqueda</button>
        </div>
      )}
    </div>
  );
}