<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. La educación en el contexto contemporáneo'" :subTitulo="'1. Educación en la era digital: tecnologías educativas'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden.bg-1
    p.mb-4 La evolución de las tecnologías educativas, ha sido un proceso continuo que ha transformado la forma en que se enseña y se aprende. A través de la historia, la educación ha vinculado a su desarrollo, cambios que se han dado, de forma paralela, con las conductas en las que la sociedad misma ha cambiado.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 #[span 1.1] Evolución de las tecnologías educativas  
    p.mb-4 Desde la invención de la imprenta hasta la era digital actual, cada avance tecnológico ha influido significativamente en el acceso a la educación, en la metodología docente y en la experiencia de aprendizaje del estudiante. Exploremos los hitos más relevantes en la evolución de estas tecnologías, analizando su impacto y su relevancia en el contexto educativo contemporáneo:   
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/3.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center La imprenta 
            p.mb-0 La imprenta en el siglo XV, realizada por Johannes Gutenberg. Este invento revolucionó el acceso al conocimiento, puesto que permitió la producción masiva de libros, que anteriormente se copiaban a mano y solo estaban disponibles para una pequeña élite. Gracias a la imprenta, la educación se volvió más accesible y las ideas pudieron difundirse rápidamente, estableciendo una base fundamental para la educación moderna (Eisenstein, 1980; Postman, 1993).
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/4.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center La educación por correspondencia
            p.mb-0 La educación por correspondencia, finales del siglo XIX. Un modelo que permitió a personas en zonas remotas o con limitaciones económicas, acceder a una educación formal a través del correo postal. Este sistema fue adoptado por diversas instituciones y se convirtió en el precursor del aprendizaje en línea, ampliando aún más las oportunidades educativas para aquellos que no podían asistir a clases presenciales (Moore & Kearsley, 2012; Selwyn, 2012).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Tanto la imprenta como la educación a distancia, establecieron las bases para una evolución educativa continua. Cada avance tecnológico ha acercado a las personas, cada vez más, al conocimiento, preparando el terreno para el desarrollo de métodos de enseñanza actuales y futuros. 
    h3 El siglo XX y la introducción de medios audiovisuales   
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 En el siglo XX, la educación se transformó con la llegada de los medios audiovisuales, los cuales lograron que la enseñanza fuera más dinámica y accesible. La radio, desde la década de 1920, fue pionera en transmitir contenido educativo, alcanzando a quienes no tenían acceso formal a la educación y democratizando el conocimiento (Sullivan, 2013). En los años 1950, la televisión se sumó con programas como Sesame Street, que enseñaban tanto conceptos académicos, como habilidades sociales, haciendo el aprendizaje accesible y entretenido, especialmente para los niños (Heinrich, 2015).
          br
          br
          |Además, materiales como películas y documentales, permitieron a los estudiantes visualizar temas complejos, facilitando la comprensión y haciendo el aprendizaje más interactivo (Wheeler, 2014). Estas tecnologías enriquecieron la experiencia educativa y promovieron un aprendizaje más participativo y colaborativo.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/6.png', alt='')
    h3 La revolución digital     
    p.mb-4 La revolución digital transformó profundamente la educación, desde la llegada de los computadores, durante las décadas de 1970-1980. Al principio, los computadores se usaban para enseñar habilidades técnicas, pero pronto demostraron su capacidad para personalizar el aprendizaje y facilitar investigaciones y actividades interactivas (Harris, 2016). En la década de 1990, Internet amplió estas posibilidades, convirtiendo el mundo en un aula global al permitir a los estudiantes conectarse con expertos, participar en foros y acceder a vastos recursos educativos como Wikipedia y YouTube (Siemens, 2013).
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .p-4.mb-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Con el tiempo, surgieron plataformas de aprendizaje en línea y MOOCs (Massive Open Online Courses), ofrecidos incluso, por instituciones como MIT (Instituto Tecnológico de Massachusetts) y Harvard, democratizando el acceso a una educación de alta calidad, para personas de distintos contextos (Friedman, 2014).
        p.mb-0 No obstante, este entorno digital plantea desafíos, porque la sobreabundancia de información requiere que los estudiantes desarrollen pensamiento crítico para distinguir contenido confiable, subrayando la importancia de usar la tecnología, de manera responsable.
    h3 Las tecnologías emergentes en la educación
    p.mb-4 Las tecnologías emergentes están transformando la educación al hacerla más personalizada y atractiva, al través de: 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/9.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Inteligencia artificial (IA)
            p.mb-0 Adapta el aprendizaje al progreso individual de cada estudiante, facilitando materiales específicos, según sus necesidades y ayudando a los profesores a identificar patrones, para ofrecer apoyo personalizado (Luckin et al., 2016).
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/10.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Realidad aumentada (RA) y realidad virtual (RV) 
            p.mb-0 Permiten experiencias inmersivas, como explorar sitios históricos o el cuerpo humano, haciendo los contenidos más emocionantes y fáciles de entender (Winn, 2017).
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/11.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Gamificación
            p.mb-0 Introduce elementos de juego en el aprendizaje, motivando a los estudiantes mediante retos, puntos y actividades colaborativas, lo que hace el proceso más dinámico (Deterding et al., 2011). 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Sin embargo, estos avances también presentan desafíos, como la necesidad de formación docente, la protección de datos y el desarrollo de un uso responsable y crítico de estas herramientas (Selwyn, 2016).
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 #[span 1.2] Herramientas digitales en el aula     
    p.mb-4 Las herramientas digitales han revolucionado el campo educativo, brindando a docentes y estudiantes, un amplio abanico de recursos para enriquecer el aprendizaje. Su integración permite optimizar la colaboración, mejorar el acceso a la información y personalizar las estrategias de enseñanza, adaptándose a las necesidades de cada estudiante. Exploremos cómo las herramientas digitales más destacadas en el ámbito educativo y sus aplicaciones prácticas en el aula, así como estrategias para potenciar su impacto en la enseñanza.
    h3 Herramientas de gestión y organización del aula
    p.mb-4 Imaginemos que estamos en una clase donde todo el contenido, tareas y materiales, está disponible en un solo lugar, sin necesidad de cargar papeles o preocuparnos por perder apuntes. Las plataformas de gestión de aulas virtuales, como Google Classroom y Microsoft Teams, hacen esto posible, convirtiendo el aula en un espacio digital, donde todo está a un clic.   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4.mb-3(style="background-color: #fffbe8")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
            .col
              p.mb-0 ¿De qué manera puede, el uso de herramientas digitales, mejorar nuestra interacción y el aprendizaje?
        .p-4.mb-3(style="background-color: #fffbe8")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
            .col
              p.mb-0 ¿Cuáles son las principales ventajas y desafíos que implica la implementación de herramientas digitales en el aula?
        .p-4.mb-3(style="background-color: #fffbe8")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
            .col
              p.mb-0 ¿Cómo puede garantizarse que el uso de herramientas digitales sea inclusivo para nosotros, sin importar su nivel de habilidad tecnológica?
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/13.png', alt='')
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Google Classroom" :icon="require('@/assets/curso/temas/tab1.svg')" ).bg-white
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/14.png', alt='')
          .col-lg-7
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Funciona como un “aula digital” completa. 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 El docente puede publicar materiales de estudio, asignar tareas y dejar comentarios específicos en las actividades. 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Se pueden observar todas las tareas organizadas por fecha, lo cual ayuda a planificar el tiempo y asegura que no se olviden entregas importantes (Sánchez, 2018). 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Si el profesor deja comentarios o retroalimentación, se pueden revisar y mejorar las tareas de inmediato, lo que facilita un aprendizaje más personalizado.
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Microsoft Teams" :icon="require('@/assets/curso/temas/tab1.svg')" ).bg-white
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/15.png', alt='')
          .col-lg-7
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 No solo organiza las clases, sino que también ofrece herramientas para la comunicación en tiempo real. 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Se puede: recibir materiales y tareas, asistir a clases en vivo, trabajar en proyectos grupales y comunicarse directamente con los compañeros y profesores. 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Una de las grandes ventajas de Teams es que permite crear “canales” dentro de cada clase. 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Si se tiene un proyecto específico, se puede organizar toda la información en su propio canal, sin perdernos entre archivos o mensajes (Martín & García, 2020).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas plataformas, además de facilitar el acceso a la información y la organización de las actividades, enseñan a trabajar en equipo y a gestionar las tareas, de forma digital. Es así como, usando Google Classroom o Microsoft Teams, no solo se aprenden los contenidos de clase, sino que también se adquieren competencias digitales importantes para el futuro (Pérez, 2017).
    h3 Herramientas de colaboración y comunicación
    p.mb-4 En el contexto del aprendizaje digital, la comunicación y colaboración efectiva  son fundamentales para lograr el éxito. Herramientas como Zoom, Google Meet y Slack, desempeñan un papel crucial al permitir a docentes y estudiantes, mantenerse en contacto, promoviendo un aprendizaje dinámico y flexible, incluso a distancia. Zoom y Google Meet facilitan videollamadas y clases en línea, ofreciendo una experiencia similar a la del aula tradicional. Ambas plataformas cuentan con funciones interactivas, como compartir pantalla y chat en vivo, lo que aumenta la participación de los estudiantes (Martín & García, 2020). 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0  Por otro lado, Slack está diseñado específicamente para la comunicación en equipo y es ideal para proyectos colaborativos. Esta herramienta permite organizar conversaciones en "canales" temáticos y compartir archivos, lo que facilita el acceso y seguimiento de la información (Sánchez, 2018).
          br
          br
          |El uso de estas herramientas, no solo mejora la interacción entre los participantes, sino que también fomenta el desarrollo de habilidades de comunicación y colaboración, las cuales son vitales en contextos académicos y laborales. La capacidad de coordinarse sin depender de reuniones presenciales, se valora cada vez más, preparando a los estudiantes para enfrentar los desafíos del entorno profesional (Pérez, 2017).
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/17.png', alt='')
    h3 Herramientas para la creación de contenidos y recursos didácticos
    p.mb-4 Las herramientas de creación de contenido, como Canva, Prezi y Kahoot, ayudan para que el aprendizaje visual sea  más interactivo y divertido. Estas herramientas permiten crear materiales y actividades que hacen que la clase sea mucho más interesante y nos ayudan a entender mejor los conceptos. Conozcamos más sobre cada una de ellas:
    .row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/18.png"
            alt=""
            style="width: 90px"
          )
          h5.text-center Canva
          p.mb-0 Es una plataforma de diseño gráfico que facilita la creación de presentaciones, infografías y otros materiales visuales atractivos, transformando ideas en gráficos comprensibles y sin requerir conocimientos avanzados de diseño (Sánchez, 2018).
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/19.png"
            alt=""
            style="width: 90px"
          )
          h5.text-center Prezi
          p.mb-0 Ofrece un formato dinámico de presentación al conectar ideas en un gran lienzo, ideal para temas que necesitan mostrar relaciones visuales entre conceptos (Pérez, 2017). 
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/20.png"
            alt=""
            style="width: 90px"
          )
          h5.text-center Kahoot
          p.mb-0 Convierte el aprendizaje en un juego, permitiendo que los docentes creen cuestionarios interactivos en tiempo real, lo que hace el estudio más entretenido y fomenta una competencia sana, ayudando a identificar áreas de mejora (Martín & García, 2020).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas herramientas, no solo hacen que la clase sea más atractiva, sino que también nos permiten participar de manera activa en nuestro aprendizaje. En lugar de solo escuchar o leer, podemos interactuar, crear y jugar, lo que hace que el aprendizaje sea más significativo y nos prepara mejor para el uso de herramientas digitales en el futuro.
    h4 Plataformas de evaluación y seguimiento del aprendizaje
    p.mb-4 En el contexto educativo, evaluar y seguir el progreso de los estudiantes, es fundamental para ajustar las clases y asegurarse que todos estén avanzando en su aprendizaje. Hoy en día, plataformas digitales como Moodle, Edmodo y Quizizz, facilitan esta tarea, porque permiten a los docentes no solo medir el rendimiento, sino también dar retroalimentación de manera rápida y accesible. Conozcamos más sobre cada una de ellas:
    .row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/22.png"
            alt=""
            style="width: 300px"
          )
          h5.text-center Moodle
          p.mb-0 Es una plataforma de gestión de aprendizaje ampliamente utilizada, que permite a los docentes crear cursos completos en línea, organizando actividades, tareas y exámenes, en un solo lugar, facilitando el acceso a los estudiantes y permitiendo personalizar el contenido según las necesidades del grupo (Pérez, 2017).
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/23.png"
            alt=""
            style="width: 300px"
          )
          h5.text-center Edmodo
          p.mb-0 Actúa como una red social educativa que conecta a docentes, estudiantes y padres, permitiendo la publicación de anuncios, asignación de tareas y retroalimentación, lo que promueve una comunicación fácil y un aprendizaje colaborativo (Sánchez, 2018). 
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/24.png"
            alt=""
            style="width: 300px"
          )
          h5.text-center Quizizz
          p.mb-0 Ofrece cuestionarios interactivos donde los estudiantes responden en tiempo real, transformando el repaso en un juego y proporcionando a los docentes informes detallados sobre las respuestas, lo que ayuda a identificar áreas que requieren más atención (Martín & García, 2020).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al usar plataformas como Moodle, Edmodo y Quizizz, los docentes no solo pueden evaluar el conocimiento de sus estudiantes, sino también monitorear su progreso de manera precisa. Esto permite identificar a quienes necesitan apoyo adicional y adaptar la enseñanza para que todos puedan avanzar. Así, estas herramientas ayudan a personalizar el aprendizaje y garantizan que cada estudiante reciba la atención necesaria para alcanzar su máximo potencial.
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 #[span 1.3] Aprendizaje en línea y su impacto
    p.mb-4 El aprendizaje en línea, ha revolucionado la educación al romper las barreras tradicionales del tiempo y el espacio, permitiendo que estudiantes de diversas partes del mundo, accedan al conocimiento sin necesidad de asistir físicamente a un aula. Con el avance de las tecnologías digitales y el incremento de plataformas educativas, el aprendizaje en línea ofrece modalidades flexibles y personalizables, que se adaptan a distintos estilos de aprendizaje. Sin embargo, también presenta desafíos que requieren ser comprendidos y abordados adecuadamente. Exploremos los aspectos claves del aprendizaje en línea, su evolución, y su impacto en la educación contemporánea.
    h3 Evolución del aprendizaje en línea
    p.mb-4 El aprendizaje en línea ha evolucionado significativamente a lo largo del tiempo, transformando la manera en que se enseña y se aprende. En sus inicios, la educación a distancia dependía del envío de materiales impresos por correo, lo que permitía a los estudiantes estudiar desde casa, pero limitaba las interacciones y hacía que la comunicación fuera un proceso lento. Durante las décadas de 1960 y 1970, algunas universidades comenzaron a ofrecer cursos por correspondencia, aunque la falta de interacción en tiempo real, generaba una sensación de aislamiento en el aprendizaje.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0  Con la expansión de Internet en los años 90, esta dinámica cambió. La posibilidad de acceder a información de manera instantánea, junto con el desarrollo de plataformas de aprendizaje en línea, brindó nuevas oportunidades a estudiantes de todo el mundo (Rodríguez, 2020). 
          br
          br
          |Herramientas como Moodle y Blackboard surgieron, permitiendo interacciones más enriquecedoras y un trabajo colaborativo efectivo. Estas plataformas ofrecieron entornos donde los estudiantes podían acceder a cursos, participar en foros de discusión y entregar tareas, lo que hizo que la educación superior fuera más accesible y los cursos más dinámicos (Pérez, 2016).
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/26.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .p-4.mb-3(style="background-color: #fffbe8")
          p.mb-0 Un hito importante fue la aparición de los MOOCs (#[em Massive Open Online Courses]), o Cursos Abiertos Masivos en Línea, ofrecidos por universidades reconocidas. Estos cursos democratizaron el acceso a la educación, permitiendo que cualquier persona se inscribiera y aprendiera sobre diversos temas, brindando oportunidades a millones de estudiantes en todo el mundo para aprender de manera gratuita y a su propio ritmo (Fernández, 2018). 
        p.mb-0 Hoy en día, el aprendizaje en línea no se limita a la educación completamente virtual; ha evolucionado hacia un modelo híbrido, que combina lo mejor de ambos mundos: la flexibilidad del aprendizaje en línea y la interacción personal de la educación presencial. Además, se están explorando nuevas tecnologías, como la realidad virtual y la inteligencia artificial, que prometen enriquecer aún más la experiencia educativa en línea (Martínez, 2019).
    h3 Modalidades del aprendizaje en línea
    p.mb-4 El aprendizaje en línea, ofrece una variedad de modalidades adaptadas a las necesidades y preferencias de cada estudiante. Comprender estas opciones es fundamental, debido a que cada modalidad presenta características que pueden influir en la experiencia educativa:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Cursos abiertos masivos en línea (MOOCs)")
            p.mb-0 Estos cursos son accesibles a través de plataformas digitales y se ofrecen de manera gratuita, permitiendo que cualquier persona con conexión a Internet se inscriba. Incluyen recursos como videos, lecturas y foros de discusión, fomentando la interacción entre los estudiantes. Sin embargo, es importante tener en cuenta que muchos MOOCs no otorgan certificación gratuita, lo cual puede ser un inconveniente si se busca un reconocimiento formal del aprendizaje (Martínez, 2019).
          div(titulo="Programas de certificación en línea")
            p.mb-0 Diseñados para enseñar habilidades específicas en un periodo más corto que un grado completo. Al finalizar, se obtiene un certificado que puede resultar valioso para mejorar el currículum. Esta opción es ideal para quienes desean adquirir conocimientos prácticos en áreas concretas, como marketing digital, programación o diseño gráfico. Universidades y plataformas educativas ofrecen estos programas, brindando flexibilidad y reconocimiento profesional (Gómez, 2020).
              br
              br
              |Además, las universidades han comenzado a ofrecer programas de grado en línea, lo que permite obtener un título universitario sin asistir a clases presenciales. Estos programas son similares a los tradicionales, pero todo el contenido y las actividades están disponibles en línea. Esta modalidad es especialmente beneficiosa para aquellos que deben compaginar estudios con trabajo u otras responsabilidades (Sánchez, 2018).

          div(titulo="Aprendizaje híbrido")
            p.mb-0 Combina la enseñanza en línea con sesiones presenciales. En este enfoque, una parte del curso se desarrolla en un aula física y la otra se lleva a cabo en línea. Esto permite aprovechar las ventajas de ambos métodos, ofreciendo flexibilidad y la oportunidad de interactuar en persona con docentes y compañeros. Es especialmente útil en contextos que requieren contacto directo, como en clases prácticas o laboratorios (López, 2019).
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.png', alt='')     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #f8eaf0 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/29.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Evaluar las necesidades y objetivos personales, es crucial al elegir una modalidad de aprendizaje en línea. La flexibilidad, autonomía y accesibilidad, son características atractivas, pero también es necesario considerar aspectos como el nivel de interacción y la autodisciplina para maximizar esta experiencia educativa. 
    h3 Beneficios del aprendizaje en línea
    p.mb-4 El aprendizaje en línea tiene muchos beneficios que lo hacen muy atractivo para muchos estudiantes. A medida que la tecnología avanza, se hace evidente que esta forma de educación no solo facilita el acceso a la información, sino que también promueve una experiencia de aprendizaje más flexible y personalizada. 
      br
      br
      | A continuación, veremos algunos de los beneficios más destacados del aprendizaje en línea:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Flexibilidad")
            p.mb-0 Permite a los estudiantes acceder a los cursos en cualquier momento y lugar con conexión a Internet. Esto les ayuda a adaptar su horario de estudio a sus responsabilidades diarias, favoreciendo una mejor gestión del tiempo y un equilibrio entre el trabajo y el estudio (Díaz, 2017).
          div(titulo="Acceso a recursos globales")
            p.mb-0 Elimina barreras geográficas y brinda la oportunidad de acceder a una amplia gama de recursos educativos, enriqueciendo la experiencia al aprender de diferentes enfoques y culturas (González, 2018).
          div(titulo="Personaliza la experiencia educativa")
            p.mb-0 Ayuda a los estudiantes a avanzar a su propio ritmo y mejorar la retención de información, siendo especialmente útil para quienes necesitan más tiempo para asimilar el contenido (Rodríguez y Martínez, 2019). 
          div(titulo="Desarrollo de habilidades tecnológicas")
            p.mb-0 Es un beneficio significativo, porque el uso de diversas plataformas y herramientas digitales, mejora la experiencia de aprendizaje y prepara a los estudiantes para los desafíos del entorno laboral actual (Sánchez, 2020).
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.png', alt='') 
    h3 Desafíos del aprendizaje en línea
    p.mb-4 A pesar que el aprendizaje en línea ofrece numerosas ventajas, también presenta varios desafíos que se deben considerar. Comprender estos obstáculos es crucial para poder superarlos y aprovechar al máximo esta modalidad educativa. Conozcamos cuáles son estos principales desafíos:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/31.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Falta de interacción presencial")
            p.mb-0 Puede hacer que algunos estudiantes se sientan aislados o desconectados, afectando su motivación y compromiso con el curso (Fernández, 2018).
          div(titulo="Autodisciplina y gestión del tiempo")
            p.mb-0 La flexibilidad de estudiar desde casa, puede dificultar la creación de una rutina efectiva, lo que lleva a la procrastinación. Para superar esto, es crucial desarrollar habilidades de organización, como hacer un horario de estudio y establecer metas claras (Rodríguez, 2020).
          div(titulo="Limitaciones tecnológicas")
            p.mb-0 Representan un desafío significativo, dado que no todos los estudiantes cuentan con dispositivos adecuados o una conexión a Internet confiable, creando una brecha digital. Las instituciones educativas deben buscar soluciones para garantizar el acceso equitativo, como proporcionar recursos tecnológicos (Sánchez, 2019). 
          div(titulo="Calidad del contenido y metodología")
            p.mb-0 Puede variar y es por esto que es importante investigar y elegir cursos de plataformas y universidades reconocidas, asegurando que el contenido sea relevante y de alta calidad, además de considerar la retroalimentación de otros estudiantes (Pérez, 2017).



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ucm.es/index.php/HICS/article/view/HICS9898110500A" target="_blank" rel="noopener noreferrer") Castells, M. (1999). La era de la información:  Economía, sociedad y cultura. Alianza Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=7504218" target="_blank" rel="noopener noreferrer") Del Valle Mejías, M. E. (2020). Edmodo: una plataforma de e-learning para la inclusión. Revista de Comunicación de la SEECI, (52), 17-28.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/fqCWZ0UghVo?si=sBDBMrNGArOyk7cl" target="_blank" rel="noopener noreferrer") Innovación educativa (2021) Educación en la era digital. Un caso de exito. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
