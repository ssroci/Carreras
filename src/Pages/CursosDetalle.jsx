import { useParams, Link } from "react-router-dom";
import cursosData from "../Data/CursosData";
import "./CursosDetalle.css";

export default function CursoDetalle() {
  const { id } = useParams();
  const area = cursosData.find((a) => a.id === parseInt(id));

  if (!area) {
    return (
      <div className="cdetalle-error">
        <i className="bi bi-exclamation-circle" />
        <p>Área no encontrada.</p>
        <Link to="/cursos">← Volver</Link>
      </div>
    );
  }

  const totalInstituciones = [...new Set(area.cursos.map((c) => c.institucion))].length;

  return (
    <div className="cdetalle">
      <div className="cdetalle__bg" aria-hidden="true" />

      {/* Volver */}
      <Link to="/cursos" className="cdetalle__volver">
        <i className="bi bi-arrow-left" /> Volver a Cursos
      </Link>

      {/* Hero */}
      <div className="cdetalle__hero">
        <span className="cdetalle__badge" style={{ color: area.color, borderColor: area.color + "44" }}>
          <i className={`bi ${area.icono}`} /> Cursos · A distancia
        </span>
        <h1 className="cdetalle__titulo" style={{ "--acento": area.color }}>
          {area.area}
        </h1>
        <p className="cdetalle__desc">{area.descripcion}</p>

        <div className="cdetalle__stats">
          <div className="cdetalle__stat">
            <i className="bi bi-journal-bookmark-fill" style={{ color: area.color }} />
            <span>
              <strong>{area.cursos.length}</strong>
              <small>Cursos</small>
            </span>
          </div>
          <div className="cdetalle__stat">
            <i className="bi bi-building-fill" style={{ color: area.color }} />
            <span>
              <strong>{totalInstituciones}</strong>
              <small>Instituciones</small>
            </span>
          </div>
        </div>
      </div>

      {/* Lista de cursos */}
      <div className="cdetalle__cursos">
        <h2 className="cdetalle__seccion-titulo">
          Cursos en <span style={{ color: area.color }}>{area.area}</span>
        </h2>

        <div className="cdetalle__cursos-lista">
          {area.cursos.map((curso, i) => (
            <a
              key={i}
              href={curso.link}
              target="_blank"
              rel="noopener noreferrer"
              className="curso-item"
              style={{ "--acento": area.color, animationDelay: `${i * 60}ms` }}
            >
              <div className="curso-item__left">
                <div className="curso-item__meta">
                  <span className="curso-item__duracion">
                    <i className="bi bi-clock" /> {curso.duracion}
                  </span>
                  <span className="curso-item__modalidad">
                    <i className="bi bi-pc-display-horizontal" /> A distancia
                  </span>
                </div>
                <h3 className="curso-item__nombre">{curso.nombre}</h3>
                <p className="curso-item__institucion">
                  <i className="bi bi-building" /> {curso.institucion}
                </p>
              </div>
              <div className="curso-item__cta">
                Ver curso <i className="bi bi-box-arrow-up-right" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}