const cursosData = [
  {
    id: 1,
    area: "Tecnología e Informática",
    icono: "bi-cpu-fill",
    color: "#4fc3f7",
    descripcion: "Programación, desarrollo web, ciberseguridad, inteligencia artificial y más.",
    cursos: [
      {
        nombre: "Desarrollo Web Full Stack",
        institucion: "UTN (Universidad Tecnológica Nacional)",
        duracion: "8 meses",
        link: "https://sceu.frba.utn.edu.ar/"
      },
      {
        nombre: "Programación en Python",
        institucion: "UTN (Universidad Tecnológica Nacional)",
        duracion: "4 meses",
        link: "https://sceu.frba.utn.edu.ar/"
      },
      {
        nombre: "Ciberseguridad",
        institucion: "UTN (Universidad Tecnológica Nacional)",
        duracion: "6 meses",
        link: "https://sceu.frba.utn.edu.ar/"
      },
      {
        nombre: "Inteligencia Artificial y Machine Learning",
        institucion: "Universidad Austral",
        duracion: "5 meses",
        link: "https://www.austral.edu.ar/educacion-continua/"
      },
      {
        nombre: "Diseño UX/UI",
        institucion: "Digital House",
        duracion: "6 meses",
        link: "https://www.digitalhouse.com/ar"
      },
      {
        nombre: "Data Science",
        institucion: "Digital House",
        duracion: "7 meses",
        link: "https://www.digitalhouse.com/ar"
      }
    ]
  },
  {
    id: 2,
    area: "Salud y Bienestar",
    icono: "bi-heart-pulse-fill",
    color: "#e94560",
    descripcion: "Primeros auxilios, nutrición, salud mental, gerontología y bienestar personal.",
    cursos: [
      {
        nombre: "Primeros Auxilios y RCP",
        institucion: "Cruz Roja Argentina",
        duracion: "1 mes",
        link: "https://www.cruzroja.org.ar/"
      },
      {
        nombre: "Nutrición y Alimentación Saludable",
        institucion: "Universidad Favaloro",
        duracion: "3 meses",
        link: "https://www.favaloro.edu.ar/educacion-continua/"
      },
      {
        nombre: "Salud Mental y Bienestar",
        institucion: "FLACSO Argentina",
        duracion: "4 meses",
        link: "https://www.flacso.org.ar/"
      },
      {
        nombre: "Gerontología y Cuidado del Adulto Mayor",
        institucion: "Universidad Maimónides",
        duracion: "5 meses",
        link: "https://www.maimonides.edu/"
      },
      {
        nombre: "Yoga y Meditación",
        institucion: "Instituto Argentino de Yoga",
        duracion: "3 meses",
        link: "https://www.institutoargentinodeyoga.com/"
      }
    ]
  },
  {
    id: 3,
    area: "Administración y Negocios",
    icono: "bi-briefcase-fill",
    color: "#f5a623",
    descripcion: "Marketing digital, gestión de proyectos, finanzas, RRHH y emprendimiento.",
    cursos: [
      {
        nombre: "Marketing Digital",
        institucion: "IAB Argentina",
        duracion: "4 meses",
        link: "https://iabargentina.com.ar/"
      },
      {
        nombre: "Gestión de Proyectos (PMP)",
        institucion: "UTN (Universidad Tecnológica Nacional)",
        duracion: "5 meses",
        link: "https://sceu.frba.utn.edu.ar/"
      },
      {
        nombre: "Comercio Exterior",
        institucion: "UCEMA",
        duracion: "6 meses",
        link: "https://www.ucema.edu.ar/"
      },
      {
        nombre: "Recursos Humanos",
        institucion: "Universidad Siglo 21",
        duracion: "4 meses",
        link: "https://21.edu.ar/"
      },
      {
        nombre: "Finanzas Personales e Inversiones",
        institucion: "Universidad Austral",
        duracion: "3 meses",
        link: "https://www.austral.edu.ar/educacion-continua/"
      },
      {
        nombre: "Emprendimiento e Innovación",
        institucion: "UTDT (Universidad Torcuato Di Tella)",
        duracion: "3 meses",
        link: "https://www.utdt.edu/"
      }
    ]
  },
  {
    id: 4,
    area: "Arte y Diseño",
    icono: "bi-palette-fill",
    color: "#a78bfa",
    descripcion: "Diseño gráfico, fotografía, ilustración, producción musical y animación.",
    cursos: [
      {
        nombre: "Diseño Gráfico Digital",
        institucion: "FADU - UBA",
        duracion: "6 meses",
        link: "https://www.fadu.uba.ar/"
      },
      {
        nombre: "Fotografía Digital",
        institucion: "Centro Cultural Ricardo Rojas (UBA)",
        duracion: "3 meses",
        link: "https://rojas.uba.ar/"
      },
      {
        nombre: "Ilustración y Diseño Editorial",
        institucion: "FADU - UBA",
        duracion: "4 meses",
        link: "https://www.fadu.uba.ar/"
      },
      {
        nombre: "Producción Musical",
        institucion: "Berklee Online (sede Argentina)",
        duracion: "5 meses",
        link: "https://online.berklee.edu/"
      },
      {
        nombre: "Animación y Motion Graphics",
        institucion: "Digital House",
        duracion: "6 meses",
        link: "https://www.digitalhouse.com/ar"
      }
    ]
  },
  {
    id: 5,
    area: "Idiomas",
    icono: "bi-translate",
    color: "#34d399",
    descripcion: "Inglés, portugués, francés, italiano, alemán y más idiomas con certificación.",
    cursos: [
      {
        nombre: "Inglés (todos los niveles)",
        institucion: "British Council Argentina",
        duracion: "4 meses por nivel",
        link: "https://www.britishcouncil.org.ar/"
      },
      {
        nombre: "Portugués Brasileño",
        institucion: "Instituto Cultural Brasil-Argentina",
        duracion: "4 meses por nivel",
        link: "https://www.icba.org.ar/"
      },
      {
        nombre: "Francés",
        institucion: "Alliance Française Buenos Aires",
        duracion: "4 meses por nivel",
        link: "https://www.alianzafrancesa.org.ar/"
      },
      {
        nombre: "Italiano",
        institucion: "Dante Alighieri Argentina",
        duracion: "4 meses por nivel",
        link: "https://www.ladante.com.ar/"
      },
      {
        nombre: "Alemán",
        institucion: "Goethe-Institut Argentina",
        duracion: "4 meses por nivel",
        link: "https://www.goethe.de/ins/ar/es/"
      }
    ]
  },
  {
    id: 6,
    area: "Educación",
    icono: "bi-mortarboard-fill",
    color: "#fb923c",
    descripcion: "Formación docente, inclusión educativa, neuroeducación y tecnología educativa.",
    cursos: [
      {
        nombre: "Formación Docente en Entornos Virtuales",
        institucion: "FLACSO Argentina",
        duracion: "5 meses",
        link: "https://www.flacso.org.ar/"
      },
      {
        nombre: "Inclusión Educativa",
        institucion: "Universidad Nacional de Quilmes (UNQ)",
        duracion: "4 meses",
        link: "https://www.unq.edu.ar/"
      },
      {
        nombre: "Neuroeducación",
        institucion: "Universidad Siglo 21",
        duracion: "3 meses",
        link: "https://21.edu.ar/"
      },
      {
        nombre: "Tecnología Educativa",
        institucion: "FLACSO Argentina",
        duracion: "6 meses",
        link: "https://www.flacso.org.ar/"
      },
      {
        nombre: "Educación Inicial y Primera Infancia",
        institucion: "Universidad Nacional de La Plata (UNLP)",
        duracion: "4 meses",
        link: "https://www.unlp.edu.ar/"
      }
    ]
  }
];

export default cursosData;