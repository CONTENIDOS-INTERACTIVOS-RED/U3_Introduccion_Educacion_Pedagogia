<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 3: La educación en el contexto contemporáneo'" :subTitulo="'3. Desafíos educativos en un mundo globalizado'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    p.mb-4 En un mundo que cambia a pasos cada vez más acelerados y vertiginosos, la educación es una dimensión que supone de la misma manera, transformaciones que la lleven a estar en sintonía con las necesidades de los sujetos y las sociedades del tiempo presente.  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Educación y globalización
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade-right") La globalización ha transformado el mundo de manera profunda, afectando todos los aspectos de la vida, incluida la educación. Este fenómeno no sólo ha ampliado el acceso a información y recursos, sino que también ha planteado nuevos retos y oportunidades para las instituciones educativas. Esta sección busca explorar la interrelación entre educación y globalización, destacando los desafíos y beneficios que surgen en este contexto. A continuación, podrá ampliar la información, a través del PDF Educación y globalización.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexos_Educacion_y_globalizacion.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Educación y Globalización
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/53.png', alt='')
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Competencias interculturales en el 
    p.mb-4 La diversidad cultural en las aulas es una realidad cada vez más presente en la educación contemporánea. En un mundo globalizado, se hace indispensable desarrollar competencias interculturales que permitan a los estudiantes interactuar de manera efectiva y respetuosa, con personas de diferentes culturas. Esta sección tiene como objetivo presentar la importancia de las competencias interculturales en el ámbito educativo, así como estrategias para fomentarlas en el aula.
    h3 Definición de competencias interculturales
    p.mb-4 Las competencias interculturales son habilidades esenciales que permiten a las personas comunicarse y relacionarse, eficazmente, con personas de diferentes culturas. En el contexto educativo, estas competencias ayudan a crear un ambiente inclusivo y respetuoso, donde todos los estudiantes se sienten valorados. La creciente diversidad cultural en las aulas, exige que los estudiantes no solo aprendan contenidos académicos, sino también a convivir y colaborar con compañeros de diversos antecedentes, preparándose así para un futuro laboral que requerirá habilidades de comunicación intercultural.
      br
      br
      |Entre las habilidades claves que componen las competencias interculturales se encuentran:
    .row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/54.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center La empatía
          p.mb-0 Es la capacidad de comprender las perspectivas y emociones de los demás.
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/55.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center El respeto por la diversidad
          p.mb-0 Implica valorar las diferencias culturales, como una fortaleza.
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/56.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Las habilidades de comunicación
          p.mb-0 Permiten intercambiar ideas de manera efectiva, ajustando el estilo comunicativo al contexto cultural.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #f8eaf0 ")
          p.mb-0 Tanto la imprenta como la educación a distancia, establecieron las bases para una evolución educativa continua. Cada avance tecnológico ha acercado a las personas, cada vez más, al conocimiento, preparando el terreno para el desarrollo de métodos de enseñanza actuales y futuros. 
    h3 Importancia de las competencias interculturales en la educación    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/57.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-0 Desarrollar competencias interculturales en el aula es fundamental, dado que prepara a los estudiantes para un mundo diverso y globalizado, donde convivirán y trabajarán con personas de diferentes culturas. Estas competencias no solo facilitan la comunicación efectiva, sino que también fomentan el respeto y la empatía hacia los demás, promoviendo un ambiente de inclusión y cooperación. Al aprender a comprender y valorar otras culturas, los estudiantes desarrollan una mentalidad abierta que les permite enfrentar los desafíos interculturales con respeto y adaptabilidad.
          br
          br
          |Esto resulta clave para el aprendizaje colaborativo, dado que la diversidad de ideas y experiencias, enriquece las discusiones y fomenta una mayor creatividad y flexibilidad. De esta manera, los estudiantes no solo adquieren conocimientos académicos, sino que también enriquecen su aprendizaje a través de las experiencias y perspectivas de sus compañeros. Incorporar competencias interculturales, fortalece la convivencia en el aula y prepara a los estudiantes para un entorno laboral y social diverso y en constante cambio, brindándoles habilidades esenciales para enfrentar con éxito los retos de la vida moderna (Deardorff, 2006).
    h3 Importancia de las competencias interculturales en la educación    
    p.mb-4 A continuación, se presentan algunas estrategias que pueden implementarse para fomentar competencias interculturales en el aula:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/58.svg', alt='Texto que describa la imagen')
      .tarjeta.p-4(x="22.3%" y="70.4%" tooltip="" numero="+" style="background-color: #feede9")
        .h5.mb-2 Incorporar contenidos culturales diversos
        p Incluir en el currículo literatura, historia, música y arte de diferentes culturas. Esto permite a los estudiantes explorar y valorar la diversidad cultural.
      .tarjeta.p-4(x="41%" y="27%" tooltip="" numero="+" style="background-color: #feede9")
        .h5.mb-2 Fomentar el aprendizaje colaborativo
        p Organizar actividades en grupos diversos que promuevan la colaboración entre estudiantes de diferentes orígenes. Esta interacción facilita el intercambio de ideas y experiencias.
      .tarjeta.p-4(x="59.3%" y="70.4%" tooltip="" numero="+" style="background-color: #feede9")
        .h5.mb-2 Utilizar métodos de enseñanza activa
        p Implementar actividades que requieran la participación activa de los estudiantes, como debates y simulaciones, donde puedan expresar sus puntos de vista y escuchar a los demás.
      .tarjeta.p-4(x="77.7%" y="27%" tooltip="" numero="+" style="background-color: #feede9")
        .h5.mb-2 Realizar proyectos interculturales
        p Proponer proyectos que impliquen la investigación y presentación sobre diferentes culturas. Esto no solo amplía el conocimiento cultural de los estudiantes, sino que también promueve el trabajo en equipo.
    h3 Evaluación de competencias interculturales
    p.mb-4 Evaluar las competencias interculturales en los estudiantes, es un paso fundamental para asegurar que estas habilidades se están desarrollando de manera efectiva en el aula. 

    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/59.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Para realizar esta evaluación, se pueden emplear métodos diversos que inviten a la reflexión y permitan observar el progreso real de cada estudiante. 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Autoevaluación")
            p.mb-0 Donde el estudiante reflexiona sobre sus propias actitudes y comportamientos en situaciones culturales diversas. Esta práctica fomenta la autoobservación y el análisis crítico, ayudando a los estudiantes a identificar áreas donde pueden mejorar. Por ejemplo, se pueden utilizar cuestionarios con preguntas como: “¿cómo reacciono ante costumbres o puntos de vista diferentes?” O “¿en qué situaciones me siento incómodo y por qué?”
          div(titulo="Reflexiones escritas")
            p.mb-0 Los estudiantes pueden redactar sobre sus experiencias y aprendizajes en contextos interculturales, evaluando sus interacciones y los desafíos que enfrentaron. Este ejercicio no solo ayuda a profundizar en su comprensión y a consolidar los aprendizajes, sino que también permite, al docente, obtener una visión más clara de sus progresos y dificultades. Estas metodologías promueven una evaluación más integral y formativa, alineada con los objetivos de desarrollo de competencias interculturales (byram, 1997).
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 La educación como herramienta de conexión cultural
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade-right") En el contexto de un mundo cada vez más interconectado, la educación desempeña un papel crucial como herramienta de conexión cultural. A través de la educación, las personas no solo adquieren conocimientos académicos, sino también habilidades que les permiten comprender y relacionarse con individuos de diferentes culturas. Esta sección tiene como objetivo explorar el rol de la educación en la promoción de la conexión cultural, destacando su importancia y las estrategias que facilitan este proceso en el ámbito educativo. A continuación, podrá ampliar la información, a través del PDF La educación como herramienta de conexión cultural.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexos_La educacion_herramienta_conexion_cultural.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> La educación como herramienta de conexión cultural.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/60.png', alt='')

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
