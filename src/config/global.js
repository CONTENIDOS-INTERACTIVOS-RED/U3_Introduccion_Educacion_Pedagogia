export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '1',
        titulo: 'Definición de algoritmo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evolución de las tecnologías educativas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas digitales en el aula',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aprendizaje en línea y su impacto',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '2',
        titulo: 'Teorías pedagógicas clásicas y contemporáneas     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios de educación inclusiva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategias pedagógicas para la inclusión',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diversidad cultural y de género',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '3',
        titulo: 'Desafíos educativos en un mundo globalizado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Educación y globalización',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Competencias interculturales en el aula',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'La educación como herramienta de conexión cultural',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Sintesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'facilidad con la que todos los estudiantes pueden acceder a recursos, entornos y oportunidades educativas.',
    },
    {
      termino: 'Aprendizaje en línea',
      significado:
        'modalidad de educación que utiliza plataformas digitales para impartir cursos y acceder a materiales educativos.',
    },
    {
      termino: 'Colaboración',
      significado:
        'trabajo conjunto entre estudiantes, educadores y comunidades para lograr objetivos educativos comunes.',
    },
    {
      termino: 'Competencias digitales',
      significado:
        'habilidades necesarias para utilizar eficazmente las tecnologías de información y comunicación en el aprendizaje.',
    },
    {
      termino: 'Diversidad',
      significado:
        'variedad de características y experiencias que los estudiantes aportan a un entorno educativo, incluyendo diferencias culturales, lingüísticas y de aprendizaje.',
    },
    {
      termino: 'Educación',
      significado:
        'proceso de adquirir conocimientos, habilidades y valores a través de la enseñanza y el aprendizaje.',
    },
    {
      termino: 'Evaluación ',
      significado:
        'proceso de medir y valorar el aprendizaje de los estudiantes para mejorar la enseñanza y el rendimiento académico.',
    },
    {
      termino: 'Globalización',
      significado:
        'proceso mediante el cual las interacciones y conexiones entre países y culturas se intensifican, afectando diversos aspectos de la vida, incluida la educación.',
    },
    {
      termino: 'Inclusión',
      significado:
        'práctica educativa que busca garantizar que todos los estudiantes, independientemente de sus diferencias, tengan acceso a las mismas oportunidades de aprendizaje.',
    },
    {
      termino: 'Innovación',
      significado:
        'introducción de nuevas ideas, métodos o tecnologías en el ámbito educativo para mejorar la enseñanza y el aprendizaje.',
    },
    {
      termino: 'Interactividad',
      significado:
        'capacidad de los estudiantes para interactuar con el contenido de aprendizaje y entre ellos, facilitada por tecnologías educativas.',
    },
    {
      termino: 'Interactividad',
      significado:
        'capacidad de los estudiantes para interactuar con el contenido de aprendizaje y entre ellos, facilitada por tecnologías educativas.',
    },
    {
      termino: 'Pedagogía',
      significado: 'estudio y práctica de métodos y estrategias de enseñanza.',
    },
    {
      termino: 'Personalización',
      significado:
        'adaptación del proceso educativo a las necesidades y características individuales de cada estudiante.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de los estudiantes para adaptarse y superar desafíos y adversidades en su proceso educativo.',
    },
    {
      termino: 'Tecnología',
      significado:
        'herramientas y dispositivos que permiten la creación, distribución y gestión de información.',
    },
    {
      termino: 'Accesibilidad',
      significado:
        'facilidad con la que todos los estudiantes pueden acceder a recursos, entornos y oportunidades educativas.',
    },
    {
      termino: 'Aprendizaje en línea',
      significado:
        'modalidad de educación que utiliza plataformas digitales para impartir cursos y acceder a materiales educativos.',
    },
    {
      termino: 'Colaboración',
      significado:
        'trabajo conjunto entre estudiantes, educadores y comunidades para lograr objetivos educativos comunes.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
