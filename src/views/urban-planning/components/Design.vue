<template>
  <section class="design">
    <p class="f-s-24 l-h-29 f-f-raleway font-bold f-c-1">Urban Planning & Design</p>

    <gap :height="21" />

    <p class="f-s-20 l-h-25 f-f-raleway font-bold f-c-1">Provides one-stop solution to create places that enrich people’s lives and help projects succeed</p>
    
    <gap :height="21" />

    <article class="f-s-14 f-f-arial f-c-1 l-h-25">
      With more than 10 years of real estate development experience in Singapore, MCC Land has built-up strong capacities in urban planning, real estate development, construction and operation management. MCC Land has been venturing into different type and scale of development as well as expanding from Singapore to other Southeast Asian countries, Australia and the United Kingdom. <br/><br/>
      With the extensive knowledge and experience of China and Singapore in urban planning, urban governance, and industrial development, etc., MCC Land is committed to creating a sustainable, resilient, smart and high-quality of life.
    </article>

    <gap :height="40" />

    <div class="urban-image"></div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped type="text/scss">
  .design {
    .urban-image {
      height: 36.8rem;
      background-image: url("../../../assets/images/urban-design/1.jpeg");
      background-size: cover;
      background-position: center center;
    }
  }
</style>