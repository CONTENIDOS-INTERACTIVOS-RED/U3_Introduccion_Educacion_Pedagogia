<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. La educación en el contexto contemporáneo'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p.mb-5 En el contexto actual, la educación enfrenta desafíos sin precedentes, que exigen una reflexión profunda y estratégica, sobre el aprendizaje en un mundo en constante transformación. La unidad "La educación en el contexto contemporáneo" ha sido diseñada para estudiar algunos factores que impulsan cambios significativos en el sistema educativo: la digitalización, la diversidad y la globalización. A través del análisis de estos temas, se busca proporcionar herramientas fundamentales para comprender y enfrentar los retos de una educación moderna y de calidad.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-0 La relevancia de esta unidad, radica en su aplicabilidad práctica, dado que en un mundo interconectado, resulta esencial para los profesionales de la educación adquirir competencias en la integración de la tecnología, el fomento de la diversidad y la adaptación a un entorno globalizado.     
          br
          br
          |La unidad se estructura en tres secciones: en primer lugar, "Educación en la era digital", donde se examinan las tecnologías educativas y su impacto en el aprendizaje; en segundo lugar, "Inclusión y diversidad en la educación", que aborda estrategias pedagógicas para promover la equidad en el aula y responder a la diversidad del alumnado; y, finalmente, "Desafíos educativos en un mundo globalizado", que explora el papel de la educación en un contexto multicultural y global. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4(data-aos="fade-left" style="background-color: #fffbe8 ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al concluir esta unidad, se prevé que se hayan desarrollado habilidades esenciales para analizar los desafíos actuales en la educación, particularmente en lo referente a las tecnologías digitales, la inclusión y la globalización. Este conocimiento no solo contribuye al fortalecimiento de las competencias pedagógicas, sino también a la creación de entornos educativos inclusivos y adaptados a las nuevas realidades sociales y tecnológicas.

    

  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
