// src/Data/CarrerasVirtual.js
// Estructura: Área → Carreras 100% virtuales → Universidades donde se dictan

export const areasVirtual = [
  {
    id: 1,
    area: "Salud",
    descripcion: "Carreras de salud con cursada 100% virtual en universidades nacionales.",
    icono: "bi-heart-pulse-fill",
    color: "#e94560",
    carreras: [
      {
        id: "v1-1",
        nombre: "Psicología",
        duracion: 5,
        descripcion: "Estudio del comportamiento humano, salud mental y procesos cognitivos.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de San Luis", sigla: "UNSL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unsl.edu.ar" },
          { nombre: "Universidad Nacional de Tierra del Fuego", sigla: "UNTDF", ciudad: "Virtual", provincia: "Nacional", link: "https://www.untdf.edu.ar" },
        ],
      },
      {
        id: "v1-2",
        nombre: "Licenciatura en Enfermería",
        duracion: 4,
        descripcion: "Cuidado integral del paciente, gestión sanitaria y promoción de la salud.",
        universidades: [
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Nordeste", sigla: "UNNE", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unne.edu.ar" },
          { nombre: "Universidad Nacional de Santiago del Estero", sigla: "UNSE", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unse.edu.ar" },
        ],
      },
      {
        id: "v1-3",
        nombre: "Licenciatura en Nutrición",
        duracion: 5,
        descripcion: "Estudio de la alimentación humana, dietoterapia y salud nutricional.",
        universidades: [
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de Entre Ríos", sigla: "UNER", ciudad: "Virtual", provincia: "Nacional", link: "https://www.uner.edu.ar" },
        ],
      },
    ],
  },

  {
    id: 2,
    area: "Ciencias Exactas y Naturales",
    descripcion: "Carreras científicas con cursada 100% virtual.",
    icono: "bi-activity",
    color: "#4fc3f7",
    carreras: [
      {
        id: "v2-1",
        nombre: "Licenciatura en Matemática",
        duracion: 5,
        descripcion: "Estudio del razonamiento lógico, estructuras abstractas y modelos matemáticos.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
        ],
      },
      {
        id: "v2-2",
        nombre: "Licenciatura en Bioinformática",
        duracion: 5,
        descripcion: "Análisis de datos biológicos mediante herramientas computacionales y estadísticas.",
        universidades: [
          { nombre: "Universidad Nacional de Entre Ríos", sigla: "UNER", ciudad: "Virtual", provincia: "Nacional", link: "https://www.uner.edu.ar" },
          { nombre: "Universidad Nacional de San Martín", sigla: "UNSAM", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unsam.edu.ar" },
        ],
      },
    ],
  },

  {
    id: 3,
    area: "Ingeniería y Tecnología",
    descripcion: "Carreras tecnológicas con cursada 100% virtual.",
    icono: "bi-gear-fill",
    color: "#f5a623",
    carreras: [
      {
        id: "v3-1",
        nombre: "Licenciatura en Sistemas",
        duracion: 5,
        descripcion: "Formación en análisis, diseño y gestión de sistemas de información y software.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Tecnológica Nacional", sigla: "UTN", ciudad: "Virtual", provincia: "Nacional", link: "https://www.utn.edu.ar" },
          { nombre: "Universidad Nacional de La Pampa", sigla: "UNLPam", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlpam.edu.ar" },
          { nombre: "Universidad Nacional de la Patagonia Austral", sigla: "UNPA", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unpa.edu.ar" },
        ],
      },
      {
        id: "v3-2",
        nombre: "Tecnicatura en Programación",
        duracion: 3,
        descripcion: "Formación técnica en desarrollo de software, lenguajes de programación y bases de datos.",
        universidades: [
          { nombre: "Universidad Tecnológica Nacional", sigla: "UTN", ciudad: "Virtual", provincia: "Nacional", link: "https://www.utn.edu.ar" },
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de Jujuy", sigla: "UNJu", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unju.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de la Patagonia Austral", sigla: "UNPA", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unpa.edu.ar" },
        ],
      },
      {
        id: "v3-3",
        nombre: "Ingeniería en Sistemas",
        duracion: 5,
        descripcion: "Diseño, desarrollo y gestión de sistemas de software y hardware.",
        universidades: [
          { nombre: "Universidad Tecnológica Nacional", sigla: "UTN", ciudad: "Virtual", provincia: "Nacional", link: "https://www.utn.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de la Patagonia Austral", sigla: "UNPA", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unpa.edu.ar" },
        ],
      },
    ],
  },

  {
    id: 4,
    area: "Ciencias Económicas",
    descripcion: "Carreras económicas con cursada 100% virtual.",
    icono: "bi-graph-up-arrow",
    color: "#22c790",
    carreras: [
      {
        id: "v4-1",
        nombre: "Contador Público",
        duracion: 5,
        descripcion: "Gestión contable, impositiva y financiera de organizaciones públicas y privadas.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de Entre Ríos", sigla: "UNER", ciudad: "Virtual", provincia: "Nacional", link: "https://www.uner.edu.ar" },
          { nombre: "Universidad Nacional de Santiago del Estero", sigla: "UNSE", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unse.edu.ar" },
        ],
      },
      {
        id: "v4-2",
        nombre: "Administración de Empresas",
        duracion: 5,
        descripcion: "Gestión organizacional, planificación estratégica y dirección de recursos humanos.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de la Patagonia Austral", sigla: "UNPA", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unpa.edu.ar" },
          { nombre: "Universidad Nacional de Tierra del Fuego", sigla: "UNTDF", ciudad: "Virtual", provincia: "Nacional", link: "https://www.untdf.edu.ar" },
        ],
      },
      {
        id: "v4-3",
        nombre: "Economía",
        duracion: 5,
        descripcion: "Análisis de mercados, políticas económicas y sistemas de producción y distribución.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
        ],
      },
      {
        id: "v4-4",
        nombre: "Licenciatura en Comercio Exterior",
        duracion: 4,
        descripcion: "Gestión de operaciones de comercio internacional, aduanas, logística y negocios globales.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de San Martín", sigla: "UNSAM", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unsam.edu.ar" },
        ],
      },
    ],
  },

  {
    id: 5,
    area: "Ciencias Sociales y Humanidades",
    descripcion: "Carreras sociales y humanísticas con cursada 100% virtual.",
    icono: "bi-people-fill",
    color: "#a78bfa",
    carreras: [
      {
        id: "v5-1",
        nombre: "Derecho",
        duracion: 5,
        descripcion: "Estudio del ordenamiento jurídico, legislación y práctica legal argentina.",
        universidades: [
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
        ],
      },
      {
        id: "v5-2",
        nombre: "Comunicación Social",
        duracion: 4,
        descripcion: "Análisis, producción y gestión de medios, periodismo y comunicación institucional.",
        universidades: [
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de Entre Ríos", sigla: "UNER", ciudad: "Virtual", provincia: "Nacional", link: "https://www.uner.edu.ar" },
        ],
      },
      {
        id: "v5-3",
        nombre: "Trabajo Social",
        duracion: 4,
        descripcion: "Intervención social, políticas públicas y promoción de derechos en comunidades vulnerables.",
        universidades: [
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional de Quilmes", sigla: "UNQ", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unq.edu.ar" },
          { nombre: "Universidad Nacional de Entre Ríos", sigla: "UNER", ciudad: "Virtual", provincia: "Nacional", link: "https://www.uner.edu.ar" },
        ],
      },
    ],
  },

  {
    id: 6,
    area: "Ciencias Agrarias y Alimentarias",
    descripcion: "Carreras agrarias y alimentarias con cursada 100% virtual.",
    icono: "bi-basket2-fill",
    color: "#7ec850",
    carreras: [
      {
        id: "v6-1",
        nombre: "Ingeniería Agronómica",
        duracion: 5,
        descripcion: "Gestión de sistemas de producción agrícola, suelos, cultivos y recursos naturales.",
        universidades: [
          { nombre: "Universidad Nacional de La Rioja", sigla: "UNLaR", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unlar.edu.ar" },
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de la Patagonia Austral", sigla: "UNPA", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unpa.edu.ar" },
        ],
      },
      {
        id: "v6-2",
        nombre: "Licenciatura en Bromatología",
        duracion: 4,
        descripcion: "Control de calidad, inocuidad y composición de alimentos destinados al consumo humano.",
        universidades: [
          { nombre: "Universidad Nacional del Litoral", sigla: "UNL", ciudad: "Virtual", provincia: "Nacional", link: "https://www.unl.edu.ar" },
          { nombre: "Universidad Nacional de Entre Ríos", sigla: "UNER", ciudad: "Virtual", provincia: "Nacional", link: "https://www.uner.edu.ar" },
        ],
      },
    ],
  },
];