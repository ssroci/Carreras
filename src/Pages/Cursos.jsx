import { useState } from "react";
import cursosData from "../Data/CursosData";
import Buscador from "../Components/Buscador";
import "./Cursos.css";

const ICONOS = {
  default: "📋",
  tecnologia: "💻",
  diseño: "🎨",
  marketing: "📈",
  datos: "🔬",
  salud: "🏥",
  negocios: "💼",
  idiomas: "🌐",
  arte: "🖼️",
};

function getIcono(nombre = "") {
  const n = nombre.toLowerCase();

  if (
    n.includes("web") ||
    n.includes("programac") ||
    n.includes("software") ||
    n.includes("tecnolog")
  )
    return ICONOS.tecnologia;

  if (
    n.includes("diseño") ||
    n.includes("ux") ||
    n.includes("ui") ||
    n.includes("figma")
  )
    return ICONOS.diseño;

  if (
    n.includes("marketing") ||
    n.includes("ventas") ||
    n.includes("publicidad")
  )
    return ICONOS.marketing;

  if (
    n.includes("dato") ||
    n.includes("data") ||
    n.includes("ciencia")
  )
    return ICONOS.datos;

  if (
    n.includes("salud") ||
    n.includes("medicina") ||
    n.includes("enferm")
  )
    return ICONOS.salud;

  if (
    n.includes("negocio") ||
    n.includes("gestión") ||
    n.includes("empresa") ||
    n.includes("admin")
  )
    return ICONOS.negocios;

  if (
    n.includes("idioma") ||
    n.includes("inglés") ||
    n.includes("español")
  )
    return ICONOS.idiomas;

  if (
    n.includes("arte") ||
    n.includes("música") ||
    n.includes("fotograf")
  )
    return ICONOS.arte;

  return ICONOS.default;
}

function getCategoria(nombre = "") {
  const n = nombre.toLowerCase();

  if (
    n.includes("web") ||
    n.includes("programac") ||
    n.includes("software") ||
    n.includes("tecnolog") ||
    n.includes("dato") ||
    n.includes("data")
  )
    return "Tecnología";

  if (
    n.includes("diseño") ||
    n.includes("ux") ||
    n.includes("ui")
  )
    return "Diseño";

  if (
    n.includes("marketing") ||
    n.includes("negocio") ||
    n.includes("gestión") ||
    n.includes("admin")
  )
    return "Negocios";

  if (
    n.includes("salud") ||
    n.includes("medicina")
  )
    return "Salud";

  if (
    n.includes("idioma") ||
    n.includes("inglés")
  )
    return "Idiomas";

  return "General";
}

function Cursos() {
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(null);

  // AGRUPAR CURSOS POR NOMBRE
  const cursosAgrupados = Object.values(
    (cursosData || []).reduce((acc, curso) => {
      if (!curso?.nombre) return acc;

      const nombre = curso.nombre.trim();

      if (!acc[nombre]) {
        acc[nombre] = {
          ...curso,
          universidades: [],
        };
      }

      const nuevas = curso.universidades || [];

      nuevas.forEach((uni) => {
        const yaExiste = acc[nombre].universidades.some(
          (u) =>
            u.nombre?.toLowerCase().trim() ===
            uni.nombre?.toLowerCase().trim()
        );

        if (!yaExiste) {
          acc[nombre].universidades.push(uni);
        }
      });

      return acc;
    }, {})
  );

  // FILTRO BUSCADOR
  const cursos = cursosAgrupados.filter((curso) =>
    curso.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  const toggle = (i) => {
    setAbierto(abierto === i ? null : i);
  };

  return (
    <div className="cursos-container">

      {/* HERO */}
      <div className="cursos-hero">
        <div className="cursos-hero-inner">
          <p className="cursos-hero-label">
            Universidad · Formación
          </p>

          <h1>
            Cursos &{" "}
            <span className="acento-naranja">
              Capacitaciones
            </span>
          </h1>
        </div>
      </div>

      {/* BUSCADOR */}
      <div className="cursos-search-area">
        <div className="cursos-search-row">
          <Buscador setBusqueda={setBusqueda} />

          <span className="cursos-badge-count">
            {cursos.length} cursos
          </span>
        </div>
      </div>

      <p className="cursos-contador">
        {cursos.length} cursos encontrados
      </p>

      {cursos.length === 0 && (
        <p className="cursos-sin-resultados">
          No se encontraron cursos.
        </p>
      )}

      {/* LISTA */}
      <div className="cursos-acc-lista">
        {cursos.map((curso, i) => {
          const institucionesUnicas = new Set(
            (curso.universidades || []).map(
              (u) =>
                u.nombre?.toLowerCase().trim()
            )
          ).size;

          return (
            <div
              className={`cursos-acc-item ${
                abierto === i ? "abierto" : ""
              }`}
              key={i}
            >
              <button
                className="cursos-acc-header"
                onClick={() => toggle(i)}
              >
                <div className="cursos-acc-icono">
                  {getIcono(curso.nombre)}
                </div>

                <div className="cursos-acc-info">
                  <span className="cursos-acc-nombre">
                    {curso.nombre}
                  </span>

                  {institucionesUnicas > 0 && (
                    <span className="cursos-acc-duracion">
                      {institucionesUnicas}{" "}
                      {institucionesUnicas === 1
                        ? "institución"
                        : "instituciones"}
                    </span>
                  )}
                </div>

                <span className="cursos-acc-categoria">
                  {getCategoria(curso.nombre)}
                </span>

                <span className="cursos-acc-flecha">
                  {abierto === i ? "↑" : "→"}
                </span>
              </button>

              {abierto === i && (
                <div className="cursos-acc-body">

                  {curso.descripcion && (
                    <p className="cursos-acc-desc">
                      {curso.descripcion}
                    </p>
                  )}

                  {curso.universidades?.length > 0 && (
                    <div className="cursos-acc-unis">
                      <h4>Instituciones</h4>

                      {curso.universidades.map(
                        (uni, j) => (
                          <a
                            key={j}
                            href={uni.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursos-acc-uni-link"
                          >
                            <strong>
                              {uni.nombre}
                            </strong>

                            {uni.duracion &&
                              ` — ${uni.duracion}`}

                            {uni.modalidad &&
                              ` — ${uni.modalidad}`}

                            {uni.ubicacion &&
                              ` — ${uni.ubicacion}`}
                          </a>
                        )
                      )}

                    </div>
                  )}

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Cursos;