// UBA_Carreras.js
// Array completo de carreras de grado presenciales de la UBA
// Cada carrera tiene: nombre, tipo, duracion, descripcion, universidades (nombre, sigla, ciudad, provincia, link)

// UBA_Carreras.js
// Array completo de las carreras de grado presenciales de la UBA
// Con link directo a la página de cada carrera o facultad si no hay URL independiente.

export const ubaCarreras = [
  // Facultad de Agronomía
  {
    nombre: "Agronomía",
    tipo: "Ingeniería",
    duracion: 5,
    descripcion: "Producción agrícola, manejo de suelos, cultivos y sistemas agropecuarios.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.agro.uba.ar/carreras/agronomia"
      }
    ]
  },
  {
    nombre: "Licenciatura en Ciencias Ambientales",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Gestión ambiental y desarrollo sustentable.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.agro.uba.ar/carreras/ciencias-ambientales"
      }
    ]
  },
  {
    nombre: "Licenciatura en Economía y Administración Agrarias",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Análisis económico en el sector agropecuario y rural.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.agro.uba.ar/carreras/economia-y-administracion-agrarias"
      }
    ]
  },
  {
    nombre: "Licenciatura en Gestión de Agroalimentos",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Gestión de cadenas de producción alimentaria.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.agro.uba.ar/carreras" // page of faculty if no specific URL
      }
    ]
  },
  {
    nombre: "Licenciatura en Planificación y Diseño del Paisaje",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Diseño ecológico del paisaje y planificación territorial.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.agro.uba.ar/carreras/planificacion-diseno-del-paisaje"
      }
    ]
  },

  // Facultad de Arquitectura, Diseño y Urbanismo
  {
    nombre: "Arquitectura",
    tipo: "Otras",
    duracion: 6,
    descripcion: "Diseño y planificación de edificaciones y espacios urbanos.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.fadu.uba.ar/carrera/arquitectura"
      }
    ]
  },
  {
    nombre: "Diseño Gráfico",
    tipo: "Otras",
    duracion: 4,
    descripcion: "Comunicación visual, diseño digital e impreso.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.fadu.uba.ar/carrera/diseno-grafico"
      }
    ]
  },
  {
    nombre: "Diseño Industrial",
    tipo: "Otras",
    duracion: 4,
    descripcion: "Diseño y desarrollo de productos industriales.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.fadu.uba.ar/carrera/diseno-industrial"
      }
    ]
  },
  {
    nombre: "Diseño de Indumentaria",
    tipo: "Otras",
    duracion: 4,
    descripcion: "Diseño de moda y producción textil.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.fadu.uba.ar/carrera/diseno-de-indumentaria"
      }
    ]
  },
  {
    nombre: "Diseño de Imagen y Sonido",
    tipo: "Otras",
    duracion: 4,
    descripcion: "Producción audiovisual y multimedia.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.fadu.uba.ar/carrera/diseno-de-imagen-y-sonido"
      }
    ]
  },

  // Facultad de Ciencias Económicas
  {
    nombre: "Contador Público",
    tipo: "Otras",
    duracion: 5,
    descripcion: "Contabilidad, auditoría y gestión financiera.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.economicas.uba.ar/carreras/contador-publico/"
      }
    ]
  },
  {
    nombre: "Licenciatura en Administración",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Gestión empresarial, organizaciones y recursos humanos.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.economicas.uba.ar/carreras/licenciatura-en-administracion/"
      }
    ]
  },
  {
    nombre: "Licenciatura en Economía",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Análisis económico y políticas públicas.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.economicas.uba.ar/carreras/licenciatura-en-economia/"
      }
    ]
  },
  {
    nombre: "Licenciatura en Sistemas de Información de las Organizaciones",
    tipo: "Licenciatura",
    duracion: 5,
    descripcion: "Gestión de sistemas de información empresariales.",
    universidades: [
      {
        nombre: "Universidad de Buenos Aires",
        sigla: "UBA",
        ciudad: "Buenos Aires",
        provincia: "Buenos Aires",
        link: "https://www.economicas.uba.ar/carreras/licenciatura-en-sistemas-de-informacion-de-las-organizaciones/"
      }
    ]
  },
// Continúa en UBA_Carreras.js

{
  nombre: "Abogacía",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Formación jurídica para la interpretación y aplicación del derecho.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.derecho.uba.ar/academica/carreras_grado/carreras_grado.php"
    }
  ]
},
{
  nombre: "Traductor Público",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Formación en traducción e interpretación de lenguas.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.derecho.uba.ar/academica/carreras_grado/carreras_grado.php"
    }
  ]
},
{
  nombre: "Calígrafo Público",
  tipo: "Tecnicatura",
  duracion: 3,
  descripcion: "Formación en técnicas de caligrafía especializada.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.derecho.uba.ar/academica/carreras_grado/carreras_grado.php"
    }
  ]
},
{
  nombre: "Licenciatura en Psicología",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio científico del comportamiento y los procesos mentales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.psi.uba.ar/psicologia/"
    }
  ]
},
{
  nombre: "Licenciatura en Musicoterapia",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio y aplicación de la música para la promoción de la salud.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.psi.uba.ar/psicologia/"
    }
  ]
},
{
  nombre: "Terapia Ocupacional",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Preparación en intervención ocupacional terapéutica.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.psi.uba.ar/psicologia/"
    }
  ]
},
{
  nombre: "Biotecnología",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Aplicación de técnicas biológicas y tecnológicas.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/biotecnologia/"
    }
  ]
},
{
  nombre: "Ciencias de Datos",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Análisis avanzado de datos y técnicas estadísticas computacionales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/ciencias-de-datos/"
    }
  ]
},
{
  nombre: "Ciencias de la Atmósfera",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de la atmósfera y los fenómenos meteorológicos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/ciencias-de-la-atmosfera/"
    }
  ]
},
{
  nombre: "Ciencias Geológicas",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Formación en geología estructural y de recursos naturales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/ciencias-geologicas/"
    }
  ]
},
{
  nombre: "Ciencia y Tecnología de Alimentos",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Procesos alimentarios y control de calidad de alimentos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/ciencia-y-tecnologia-de-alimentos/"
    }
  ]
},
{
  nombre: "Oceanografía",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de los océanos, ecosistemas y procesos marinos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/oceanografia/"
    }
  ]
},
{
  nombre: "Paleontología",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de restos fósiles y evolución de organismos antiguos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://exactas.uba.ar/ensenanza/carreras-de-grado/paleontologia/"
    }
  ]
},
 // Continuación de UBA_Carreras.js

{
  nombre: "Medicina",
  tipo: "Otras",
  duracion: 6,
  descripcion: "Formación médica para el diagnóstico, tratamiento y prevención de enfermedades.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.fmed.uba.ar/carreras-y-tecnicaturas/carreras-de-grado" // facultad Medicina (no tiene página individual)
    }
  ]
},
{
  nombre: "Licenciatura en Enfermería",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Formación en cuidados de la salud, atención y recuperación de pacientes.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.fmed.uba.ar/carreras-y-tecnicaturas/carreras-de-grado" // listado Medicina
    }
  ]
},
{
  nombre: "Licenciatura en Fonoaudiología",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de trastornos de la comunicación y sus tratamientos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.fmed.uba.ar/carreras-y-tecnicaturas/carreras-de-grado"
    }
  ]
},
{
  nombre: "Licenciatura en Kinesiología y Fisiatría",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Formación en movimiento, rehabilitación y funciones físicas del cuerpo.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.fmed.uba.ar/carreras-y-tecnicaturas/carreras-de-grado"
    }
  ]
},
{
  nombre: "Licenciatura en Nutrición",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de alimentación humana, nutrición y dietas saludables.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.fmed.uba.ar/carreras-y-tecnicaturas/carreras-de-grado"
    }
  ]
},
{
  nombre: "Licenciatura en Obstetricia",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Formación en atención primaria de la salud de la mujer y el recién nacido.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.fmed.uba.ar/carreras-y-tecnicaturas/carreras-de-grado"
    }
  ]
},

// Facultad de Farmacia y Bioquímica
{
  nombre: "Bioquímica",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Estudio de procesos químicos en sistemas biológicos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.uba.ar/carreras/8" // listado carreras FFyB
    }
  ]
},
{
  nombre: "Farmacia",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Formación en medicamentos, farmacocinética y atención farmacéutica.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.uba.ar/carreras/8"
    }
  ]
},
{
  nombre: "Licenciatura en Ciencia y Tecnología de Alimentos",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Procesos alimentarios y control de calidad de alimentos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.uba.ar/carreras/8"
    }
  ]
},

// Facultad de Filosofía y Letras
{
  nombre: "Licenciatura en Letras",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de literatura, textos y análisis literario.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.filo.uba.ar/"
    }
  ]
},
{
  nombre: "Licenciatura en Historia",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio histórico de sociedades y civilizaciones.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.filo.uba.ar/"
    }
  ]
},
{
  nombre: "Licenciatura en Filosofía",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Estudio de pensamiento, lógica y filosofía.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.filo.uba.ar/"
    }
  ]
},
{
  nombre: "Licenciatura en Ciencias de la Educación",
  tipo: "Licenciatura",
  duracion: 5,
  descripcion: "Formación en políticas educativas, enseñanza y aprendizaje.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.filo.uba.ar/"
    }
  ]
},
// Facultad de Ingeniería
{
  nombre: "Ingeniería Civil",
  tipo: "Ingeniería",
  duracion: 5,
  descripcion: "Diseño, construcción y mantenimiento de infraestructuras y obras civiles.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.ingenieria.uba.ar/carreras/ingenieria-civil/"
    }
  ]
},
{
  nombre: "Ingeniería Industrial",
  tipo: "Ingeniería",
  duracion: 5,
  descripcion: "Optimización de procesos productivos, logística y gestión industrial.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.ingenieria.uba.ar/carreras/ingenieria-industrial/"
    }
  ]
},
{
  nombre: "Ingeniería Electrónica",
  tipo: "Ingeniería",
  duracion: 5,
  descripcion: "Diseño y desarrollo de sistemas electrónicos y telecomunicaciones.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.ingenieria.uba.ar/carreras/ingenieria-electronica/"
    }
  ]
},
{
  nombre: "Ingeniería Mecánica",
  tipo: "Ingeniería",
  duracion: 5,
  descripcion: "Diseño, fabricación y mantenimiento de sistemas mecánicos.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.ingenieria.uba.ar/carreras/ingenieria-mecanica/"
    }
  ]
},
{
  nombre: "Ingeniería Química",
  tipo: "Ingeniería",
  duracion: 5,
  descripcion: "Procesos químicos industriales y desarrollo de nuevos materiales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.ingenieria.uba.ar/carreras/ingenieria-quimica/"
    }
  ]
},

// Facultad de Ciencias Sociales
{
  nombre: "Licenciatura en Ciencias de la Comunicación",
  tipo: "Licenciatura",
  duracion: 4,
  descripcion: "Estudio de medios, comunicación y sociedad.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.sociales.uba.ar/carreras/licenciatura-en-ciencias-de-la-comunicacion"
    }
  ]
},
{
  nombre: "Licenciatura en Ciencia Política",
  tipo: "Licenciatura",
  duracion: 4,
  descripcion: "Estudio de sistemas políticos, gobiernos y políticas públicas.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.sociales.uba.ar/carreras/licenciatura-en-ciencia-politica"
    }
  ]
},
{
  nombre: "Licenciatura en Sociología",
  tipo: "Licenciatura",
  duracion: 4,
  descripcion: "Estudio de sociedades, estructuras sociales y fenómenos culturales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.sociales.uba.ar/carreras/licenciatura-en-sociologia"
    }
  ]
},
{
  nombre: "Trabajo Social",
  tipo: "Otras",
  duracion: 4,
  descripcion: "Formación en intervención social, asistencia y desarrollo comunitario.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.sociales.uba.ar/carreras/trabajo-social"
    }
  ]
},

// Facultad de Ciencias Veterinarias
{
  nombre: "Medicina Veterinaria",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Atención, prevención y tratamiento de animales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.vet.uba.ar/carreras-de-grado/"
    }
  ]
},

// Facultad de Odontología
{
  nombre: "Odontología",
  tipo: "Otras",
  duracion: 5,
  descripcion: "Prevención y tratamiento de enfermedades dentales y bucodentales.",
  universidades: [
    {
      nombre: "Universidad de Buenos Aires",
      sigla: "UBA",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      link: "https://www.odontologia.uba.ar/carreras-de-grado/"
    }
  ]
} // ... (seguirá con todas las siguientes facultades ...
];

