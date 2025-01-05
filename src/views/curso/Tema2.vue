<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. La educación en el contexto contemporáneo'" :subTitulo="'2. Inclusión y diversidad en la educación'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    p.mb-4 Un asunto relevante de la educación en el presente, es el tema de los procesos formativos desde y para la diferencia, dado que los derechos de todas las personas en el planeta, son parte del lenguaje universal de todos los asuntos relacionados con el desarrollo humano, en todas sus facetas y dimensiones.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Principios de educación inclusiva
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade-right") La educación inclusiva es un enfoque que busca garantizar el derecho a la educación para todos los estudiantes, independientemente de sus habilidades, antecedentes o necesidades específicas. Este modelo promueve un ambiente educativo que valora la diversidad y proporciona a cada estudiante, las oportunidades necesarias para alcanzar su máximo potencial. Comprender los principios fundamentales de la educación inclusiva, es esencial para crear espacios de aprendizaje equitativos y accesibles. A continuación, en el PDF Principios de educación inclusiva, podrá conocer cada uno de ellos. 

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexos_Principios_educacion_inclusiva.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Principios de educación inclusiva.

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/32.png', alt='')
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Estrategias pedagógicas para la inclusión
    p.mb-4 La educación inclusiva es un enfoque que busca garantizar que todos los estudiantes, independientemente de sus habilidades, antecedentes o necesidades particulares, tengan acceso a una educación de calidad. Para lograrlo, es fundamental implementar estrategias pedagógicas que promuevan la inclusión en el aula. 
      br
      br
      |A continuación, se presentan algunas de estas estrategias, su importancia y cómo pueden aplicarse de manera efectiva para crear un entorno educativo acogedor y equitativo.
    h3 Diseño Universal para el Aprendizaje (DUA)
    p.mb-4 El Diseño Universal para el Aprendizaje (DUA), es una estrategia muy importante en la educación inclusiva. Su objetivo es el de hacer que el aprendizaje sea accesible y efectivo para todos los estudiantes, sin importar sus habilidades o necesidades específicas. La idea central es que el aula debe ser un lugar donde cada estudiante pueda aprender y participar plenamente, aprovechando sus fortalezas individuales.
      br
      |Este enfoque se basa en tres principios claves:
    .mn.bg-slyde.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/33.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Múltiples formas de representación
            p Esto significa que el contenido se debe presentar de diferentes maneras para que todos los estudiantes puedan entenderlo. En lugar de usar solo un libro de texto, se pueden ofrecer videos, gráficos y actividades prácticas, que expliquen los mismos conceptos. Así, un estudiante que aprende mejor con lo visual, puede beneficiarse de materiales gráficos, mientras que otro que prefiere escuchar, puede aprovechar podcasts o grabaciones.
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/34.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Múltiples formas de expresión
            p Cada estudiante tiene su propia manera de demostrar lo que ha aprendido. Algunos pueden preferir escribir un ensayo, mientras que otros podrían optar por hacer una presentación oral o un proyecto creativo. El DUA fomenta que los estudiantes elijan la forma que mejor se adapte a su estilo de aprendizaje, para mostrar sus conocimientos.
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Múltiples formas de compromiso
            p Pero, ¿cómo se puede motivar a los estudiantes a participar en su aprendizaje? Es importante ofrecer opciones que mantengan su interés. Se pueden proponer actividades en grupo, debates o proyectos individuales que permitan a los estudiantes elegir cómo quieren involucrarse en el aprendizaje.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Ahora: 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="¿Por qué es importante el DUA?")
            p.mb-0 Este enfoque es esencial porque reconoce que cada estudiante es único. Al aplicar estos principios, se crean entornos de aprendizaje más inclusivos donde se minimizan las barreras y se maximiza el potencial de cada alumno. Por ejemplo, un estudiante con dificultades de aprendizaje, puede entender mejor un tema cuando se le presentan diferentes recursos y opciones para expresar lo que ha aprendido.
              br
              br
              |Además, el DUA fomenta la autonomía y la motivación de los estudiantes. Al permitirles elegir cómo aprender y cómo demostrar su conocimiento, se sienten más empoderados y responsables de su propio proceso educativo. Esto no solo mejora su rendimiento académico, sino que también aumenta su confianza y autoestima.
          div(titulo="¿Cómo se implementa el DUA en el aula? ")
            p.mb-0 Para llevar a cabo este enfoque, se pueden seguir algunos pasos prácticos: 
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Es fundamental evaluar las necesidades de los estudiantes. Esto se puede hacer a través de encuestas, entrevistas o evaluaciones iniciales. 

            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Es importante ofrecer opciones desde el inicio del curso, proporcionando diferentes tipos de materiales y recursos. Por ejemplo, si se enseña un tema sobre historia, se pueden ofrecer libros, videos, podcasts y actividades interactivas.
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Es crucial fomentar la colaboración, organizando actividades grupales donde los estudiantes puedan trabajar juntos y aprender unos de otros, aprovechando sus distintas habilidades.
            .p-1.mb-3
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Es preciso revisar y ajustar lo que se está haciendo, recogiendo retroalimentación de los estudiantes sobre qué métodos les están funcionando mejor y haciendo cambios según sea necesario.
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.png', alt='') 
    h3 Planes Individuales de Ajustes Razonables (PIAR)
    p.mb-4 Los Planes Individuales de Ajustes Razonables (PIAR), son herramientas esenciales en la educación inclusiva, adaptadas a las necesidades específicas de cada estudiante. Su enfoque personalizado implica realizar evaluaciones detalladas de las capacidades y desafíos de cada alumno, considerando no solo su rendimiento académico, sino también sus estilos de aprendizaje y barreras potenciales (Forlin, 2013).     
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/37.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-0 La colaboración interdisciplinaria es clave en el desarrollo de un PIAR. Un equipo de docentes, especialistas en educación, psicólogos y terapeutas, debe trabajar en conjunto para diseñar estrategias efectivas que aborden las necesidades del estudiante (Ginevra, Nota, & Soresi, 2017). Además, la implementación de estos planes es un proceso dinámico que requiere monitoreo continuo del progreso del estudiante, permitiendo realizar ajustes, según sea necesario. Involucrar a los estudiantes en este proceso, fomenta su compromiso y sentido de responsabilidad hacia su propio aprendizaje (Ainscow, 2016).
          br
          br
          |La tecnología también es un aliado significativo en los PIAR. Herramientas como programas de lectura adaptativa y aplicaciones educativas, permiten personalizar la experiencia de aprendizaje, facilitando el acceso a recursos ajustados a las necesidades de cada estudiante (Forlin, 2013).
    h3 Aprendizaje cooperativo
    p.mb-4 El aprendizaje cooperativo es una estrategia pedagógica que favorece la colaboración entre estudiantes, para alcanzar objetivos comunes, promoviendo no solo un mejor aprendizaje, sino también la inclusión en el aula. Este enfoque se basa en la idea de  que los estudiantes se benefician mutuamente al trabajar juntos, en equipos, para resolver problemas, realizar proyectos o estudiar temas, lo que enriquece el aprendizaje individual (Johnson & Johnson, 2017).
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 A continuación, veremos cuales son los principios fundamentales para el éxito del aprendizaje cooperativo:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Interdependencia positiva")
            p.mb-0 Implica que cada miembro del grupo tiene un rol específico y que el éxito depende del esfuerzo conjunto.
          div(titulo="Interacción cara a cara")
            p.mb-0 Es crucial, porque fomenta la comunicación y el diálogo, mejorando la comprensión del contenido y las habilidades sociales.
          div(titulo="Responsabilidad individual")
            p.mb-0 Garantiza que, aunque trabajen en equipo, cada estudiante asuma la responsabilidad de su propio aprendizaje, evaluándose tanto individual como grupalmente (Slavin, 2014).
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/38.png', alt='')
    p.mb-4 Los beneficios del aprendizaje cooperativo son significativos, porque:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/39.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Fomenta la inclusión 
            p.mb-0 Permite que estudiantes con diferentes habilidades aprendan unos de otros, mejora el rendimiento académico al facilitar la comprensión de los conceptos y promueve el desarrollo de habilidades sociales.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/40.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Trabaja en grupo
            p.mb-0 Aumenta la motivación, dado que los estudiantes se sienten más comprometidos con el apoyo de sus compañeros.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #dbebf6 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/41.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para implementar el aprendizaje cooperativo en el aula, es importante formar grupos heterogéneos, establecer objetivos claros para las actividades, designar roles dentro del grupo y reflexionar sobre el proceso al finalizar cada actividad. Esto no solo facilita la colaboración, sino que también asegura que todos se sientan incluidos y valorados en el proceso educativo. 
    h3 Adaptaciones curriculares
    p.mb-4 El tema de las adaptaciones curriculares es crucial en la educación inclusiva, puesto que busca ajustar el currículo para que todos los estudiantes, independientemente de sus habilidades o necesidades, puedan acceder y participar en el aprendizaje. Las adaptaciones curriculares son modificaciones realizadas en el currículo tradicional, que no solo simplifican el contenido, sino que lo modifican, para facilitar el aprendizaje de todos los estudiantes.
      br
      br
      |Estas adaptaciones se clasifican en tres tipos: 
    .row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/42.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Adaptaciones de contenido
          p.mb-0 Implican modificar la información que se enseña, mediante resúmenes, gráficos o textos, en un lenguaje más sencillo.
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/43.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Adaptaciones de proceso
          p.mb-0 Ajustan las estrategias de enseñanza, incorporando enfoques visuales, auditivos o kinestésicos.
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/44.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Adaptaciones de evaluación
          p.mb-0 Cambian la forma en que se evalúa, utilizando alternativas como proyectos, presentaciones o tiempos adicionales para completar tareas.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/45.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Los beneficios de las adaptaciones curriculares, son múltiples: 
        ol.lista-ol--cuadro(data-aos="fade-up")
          li 
            .lista-ol--cuadro__vineta(style="background-color: #e6d567 ")
              span(style="color: #212429  ") 1
            | #[b Facilitan la inclusión.] Promoviendo un sentido de pertenencia.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #e6d567 ")
              span(style="color: #212429  ") 2
            | #[b Aumentan la motivación.] Al hacer el aprendizaje más personalizado y accesible.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #e6d567 ")
              span(style="color: #212429  ") 3
            | #[b Mejoran el rendimiento académico.] Al ayudar a los estudiantes a comprender mejor los conceptos.
        p.mb-0 Para implementar efectivamente estas adaptaciones en el aula, es fundamental conocer las necesidades de los estudiantes a través de diagnósticos iniciales, colaborar con profesionales de la educación y establecer objetivos claros de aprendizaje que consideren las capacidades y necesidades de cada alumno.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Evaluación formativa y retroalimentación
                  p Lo invitamos a leer el PDF Evaluación formativa y retroalimentación, para conocer sobre esta temática.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexos_Evaluacion_formativa.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    h3 Fomento de un clima de aula positivo
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Crear un clima de aula positivo es fundamental para que todos los estudiantes aprendan de manera efectiva, especialmente en educación inclusiva. Pero, #[b ¿qué significa tener un clima de aula positivo?] 
          br
          br
          |Este término se refiere al ambiente emocional y social dentro del aula, donde los estudiantes se sienten cómodos, aceptados y motivados para participar. Esto se logra a través de relaciones de respeto y confianza entre estudiantes y docentes (Ginevra, Nota, & Soresi, 2017). Un aula positiva no solo es agradable, sino que también fomenta el aprendizaje y el bienestar.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/46.png', alt='')
    h3 ¿Por qué es tan crucial un clima de aula positivo? 
    .row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/47.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Fomenta la participación de los estudiantes
          p.mb-0 Cuando se sienten seguros, están más dispuestos a participar en discusiones, lo que mejora la comprensión y retención del aprendizaje.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/48.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Mejora el rendimiento académico
          p.mb-0 Los estudiantes que se sienten bien en su entorno son más motivados y concentrados (Ginevra et al., 2017).
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/49.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Promueve la inclusión
          p.mb-0 Haciendo que todos los estudiantes se sientan parte del grupo, lo cual es especialmente importante en la educación inclusiva.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/50.svg"
            alt=""
            style="width: 90px"
          )
          h5.text-center Ayuda a desarrollar habilidades sociales
          p.mb-0 Como la empatía y la cooperación, esenciales tanto en el aula, como en la vida diaria.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/51.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Para fomentar un clima de aula positivo, se pueden aplicar varias estrategias:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Establecer normas claras")
            p.mb-0 Es importante definir desde el inicio, expectativas y reglas de comportamiento, lo que proporciona una buena estructura y mejor seguridad.
          div(titulo="Fomentar el respeto y la empatía entre estudiantes")
            p.mb-0 Mediante actividades que promuevan la comprensión mutua, como compartir historias personales o reflexionar sobre diferencias culturales (Ginevra et al., 2017).
          div(titulo="Celebrar los logros de los estudiantes")
            p.mb-0 Tanto los grandes como los pequeños; es una estrategia importante que motiva y hace sentir valorados a los estudiantes.
          div(titulo="Implementar actividades de integración")
            p.mb-0 Como juegos grupales y proyectos colaborativos, lo que ayuda a construir relaciones y un sentido de comunidad.
          div(titulo="Promover la comunicación abierta")
            p.mb-0 Esta estrategia es clave para crear un espacio donde los estudiantes se sientan cómodos para compartir sus pensamientos, y fortalecer las relaciones en el aula.
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Diversidad cultural y de género 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 La diversidad en el aula es una realidad innegable y enriquecedora. Cada estudiante llega con un conjunto único de experiencias, valores, y habilidades que pueden enriquecer el proceso de aprendizaje colectivo. Reconocer y abordar la diversidad cultural y de fundamental para promover una educación inclusiva y equitativa. A continuación, se proporciona información sobre estos aspectos y estrategias para integrarlos en el contexto educativo.
          br
          br
          | Lo invitamos a escuchar el siguiente pódcast  para ampliar la información.
        div(style="width: 100%")
          TarjetaAudio.color-primario.mb-3(
            texto="Diversidad cultural en el aula"
            :audio="require('../../assets/curso/podcast/podcast_diversidad_cultural.mp3')"
            tiempo
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/52.png', alt='')





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/679/67952833001/html/" target="_blank" rel="noopener noreferrer") Fernández, A. (2020). Estrategias para la educación inclusiva. Editorial Inclusión.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/4677/467761669009/html/" target="_blank" rel="noopener noreferrer") López, J. (2020). Currículo inclusivo: reflexiones y prácticas. Ediciones Pedagógicas.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Byram, M. (1997). Teaching and Assessing Intercultural Communicative Competence. Multilingual Matters.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/MzaM-Adl0rU?si=ZWJnUyJl4QRp1n5D" target="_blank" rel="noopener noreferrer") Space Diseño. (11 jul 2019). Concepto de Tecnología Educativa.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
