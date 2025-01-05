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
      referencia:
        'Ainscow, M. (2016). Inclusión en la educación: una guía para educadores. Editorial Graó.',
      link: '',
    },
    {
      referencia:
        'Ainscow, M. (2016). Developing inclusive education systems: What are the roles of the agencies? International Journal of Inclusive Education, 20(4), 353-366.',
      link: 'https://doi.org/10.1080/13603116.2016.1184656',
    },
    {
      referencia:
        'Black, P., & William, D. (1998). Assessment and classroom learning. Assessment in Education: Principles, Policy & Practice, 5(1), 7-74.',
      link: '',
    },
    {
      referencia:
        'Bruner, J. (1966). Toward a theory of instruction. Cambridge, MA: Harvard University Press.',
      link: '',
    },
    {
      referencia:
        'CAST. (2018). Universal Design for Learning Guidelines version 2.2.',
      link: 'https://www.cast.org/our-work/about-udl.html',
    },
    {
      referencia:
        'Deardorff, D. K. (2006). The Identification and Assessment of Intercultural Competence as a Student Outcome of Internationalization. Journal of Studies in International Education, 10(3), 241-266.',
      link: '',
    },
    {
      referencia:
        'Díaz, M. (2017). La educación en línea: una nueva forma de aprender. Madrid: Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Deterding, S., Dixon, D., Khaled, R., & Nacke, L. (2011). From game design elements to gamefulness: defining "gamification". Proceedings of the 15th International academic MindTrek conference: Envisioning future media environments, 9-15.',
      link: '',
    },
    {
      referencia:
        'Eisenstein, E. L. (1980). The printing revolution in early modern Europe. Cambridge, UK: Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Fernández, A. (2018). La educación a distancia y sus múltiples facetas. Editorial Educativa.',
      link: '',
    },
    {
      referencia:
        'Fernández, A. (2018). Los desafíos del aprendizaje en línea: análisis y estrategias. Barcelona: Ediciones Educativas.',
      link: '',
    },
    {
      referencia:
        'Fernández, A. (2019). Economía del aprendizaje en línea. Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Fernández, A. (2020). Estrategias para la educación inclusiva. Editorial Inclusión.',
      link: '',
    },
    {
      referencia:
        'Fowler, C. (2015). Virtual reality in education: A valuable tool for learning. Journal of Educational Technology, 20(3), 45-52.',
      link: '',
    },
    {
      referencia:
        'Friedman, T. L. (2014). The world is flat: A brief history of the twenty-first century. Farrar, Straus and Giroux.',
      link: '',
    },
    {
      referencia: 'Giddens, A. (2000). Sociología. Ediciones Akal.',
      link: '',
    },
    {
      referencia:
        'Ginevra, M. C., Nota, L., & Soresi, S. (2016). The role of self-determination in the transition to adulthood for individuals with disabilities. International Journal of Inclusive Education, 21(2), 143-159.',
      link: 'https://doi.org/10.1080/13603116.2016.1160378',
    },
    {
      referencia:
        'Ginevra, M. C., Nota, L., & Soresi, S. (2017). The role of inclusive education in developing social capital. International Journal of Inclusive Education, 21(5), 478-492.',
      link: '',
    },
    {
      referencia:
        'González, R. (2018). Recursos educativos en la era digital. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'González, R. (2020). La diversidad en el aula: un enfoque inclusivo. Editorial Educación para Todos.',
      link: '',
    },
    {
      referencia:
        'Gómez, M. (2022). Formación docente en diversidad. Revista de Educación y Diversidad, 12(1), 45-58.',
      link: '',
    },
    {
      referencia:
        'Gómez, R. (2020). Certificaciones en línea: una guía para el aprendizaje continuo. Madrid: Ediciones Académicas.',
      link: '',
    },
    {
      referencia:
        'Harris, S. (2016). The impact of computers on education: A review of the literature. Journal of Educational Computing Research, 54(5), 689-710.',
      link: '',
    },
    {
      referencia:
        'Heinrich, E. (2015). Television and the public sphere: Citizenship, democracy, and the media. Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Johnson, D. W., & Johnson, R. T. (2017). Learning together and alone: Cooperative, competitive, and individualistic learning. Routledge.',
      link: '',
    },
    {
      referencia:
        'Knight, J. (2006). Higher education in turmoil: The changing world of internationalization. Journal of Studies in International Education, 10(3), 221-237.',
      link: '',
    },
    {
      referencia:
        'Laurillard, D. (2012). Teaching as a design science: Building pedagogical patterns for learning and technology. New York, NY: Routledge.',
      link: '',
    },
    {
      referencia:
        'López, M. (2020). Retos del aprendizaje en línea: Cómo superarlos. Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Luckin, R., Holmes, W., Griffiths, M., & Forcier, L. B. (2016). Intelligence unleashed: An argument for AI in education. Pearson.',
      link: '',
    },
    {
      referencia:
        'Marginson, S. (2011). Higher education and globalization: Exploring the challenges and opportunities. Globalization, Societies and Education, 9(2), 197-214.',
      link: '',
    },
    {
      referencia:
        'Martínez, A. (2018). Gestión del tiempo en la educación virtual. Madrid: Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Martínez, J. (2019). Modalidades del aprendizaje en línea: una guía práctica. Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Martínez, M. (2019). Modalidades educativas en la era digital. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Martínez, S. (2021). Empatía y habilidades sociales en la educación. Revista de Psicología Educativa, 15(3), 32-40.',
      link: '',
    },
    {
      referencia:
        'Moore, M. G., & Kearsley, G. (2012). Distance education: A systems view of online learning. Belmont, CA: Wadsworth.',
      link: '',
    },
    {
      referencia:
        'Nieto, S. (2010). Affirming Diversity: The Sociopolitical Context of Multicultural Education. Boston: Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Pérez, J. (2017). Tecnologías digitales para el aprendizaje: Teoría y práctica. Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Pérez, L. (2017). Calidad en la educación a distancia: retos y oportunidades. México: Editorial Universitaria.',
      link: '',
    },
    {
      referencia:
        'Pérez, M. (2016). Tecnología y aprendizaje en el siglo XXI. Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Pérez, S. (2019). Conexiones y comunidades en el aprendizaje en línea. Valencia: Ediciones de la Universidad.',
      link: '',
    },
    {
      referencia:
        'Pérez, T. (2018). Valorar la diversidad en la educación. Análisis Educativo, 10(2), 25-39.',
      link: '',
    },
    {
      referencia:
        'Postman, N. (1993). Technopoly: The surrender of culture to technology. Knopf.',
      link: '',
    },
    {
      referencia:
        'Ramírez, L. (2019). Aprendizaje colaborativo en contextos diversos. Revista de Innovación Educativa, 7(4), 17-29.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. (2017). Tecnología y educación: Oportunidades y desafíos. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, L. (2020). Educación en la era digital. Madrid: Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, L., & Martínez, J. (2019). Aprendizaje adaptativo y personalización en la educación en línea. Valencia: Ediciones de la Universidad.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. (2020). Autodisciplina en el aprendizaje en línea: claves para el éxito. Madrid: Ediciones Académicas.',
      link: '',
    },
    {
      referencia:
        'Sánchez, E. (2019). Sentido de pertenencia en el aula inclusiva. Psicología y Educación, 11(1), 11-22.',
      link: '',
    },
    {
      referencia:
        'Sánchez, P. (2018). Educación y tecnología en el aula: Estrategias y aplicaciones. México D.F.: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Sánchez, P. (2018). Programas de grado en línea: una nueva forma de estudiar. México: Ediciones Universitarias.',
      link: '',
    },
    {
      referencia:
        'Sánchez, P. (2020). Habilidades digitales para el siglo XXI. Bogotá: Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Sánchez, P. (2021). Manejo del estrés en estudiantes en línea. Bogotá: Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Sánchez, R. (2019). Brecha digital y educación: soluciones para un acceso equitativo. Buenos Aires: Editorial de la Universidad.',
      link: '',
    },
    {
      referencia:
        'Selwyn, N. (2012). Education and technology: Key issues and debates. Continuum.',
      link: '',
    },
    {
      referencia:
        'Selwyn, N. (2016). Education and technology: Key issues and debates. Continuum.',
      link: '',
    },
    {
      referencia:
        'Siemens, G. (2013). Learning analytics: The emergence of a new field. Journal of Educational Technology & Society, 16(2), 3-4.',
      link: '',
    },
    {
      referencia:
        'Slavin, R. E. (2014). Cooperative learning and achievement: Theory and practice. In Handbook of educational psychology (pp. 270-283). Routledge.',
      link: '',
    },
    {
      referencia:
        'Sullivan, T. (2013). The role of radio in the education system. Journal of Education and Learning, 2(4), 14-22.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2009). Políticas de educación inclusiva: Guía de reflexión. París: Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
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
  ],
}
