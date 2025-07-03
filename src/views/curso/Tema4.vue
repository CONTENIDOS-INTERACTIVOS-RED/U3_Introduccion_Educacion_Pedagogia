<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 3. La educación en el contexto contemporáneo'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 3: La educación en el contexto contemporáneo, aborda los principales desafíos que enfrenta la educación en la era actual, marcada por la digitalización, la diversidad y la globalización. Esta unidad proporciona herramientas para que los estudiantes comprendan y analicen el impacto de las tecnologías educativas, estrategias inclusivas y la necesidad de competencias interculturales, preparando a futuros educadores para adaptarse y responder de manera efectiva a un entorno global y dinámico. Con un enfoque práctico y reflexivo, la unidad busca fortalecer la capacidad de los estudiantes para integrar metodologías pedagógicas modernas para desarrollar un aprendizaje inclusivo y relevante.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/temas/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
