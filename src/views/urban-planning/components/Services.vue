<template>
  <section class="services">
    <p class="f-s-24 l-h-29 f-f-raleway font-bold f-c-1">Integrated Services:</p>

    <gap :height="42" />

    <p class="f-s-20 f-f-arial font-bold f-c-1 l-h-28">We bring innovative solutions by approaching projects from many different angles. MCC professionals provide integrated or individual services including:</p>
    
    <gap :height="41" />

    <ul class="flex-row flex-wrap">
      <template v-for="item in list">
        <li 
          :key="item.label"
          class="f-s-18 f-f-arial font-bold f-c-1 flex-row align-items-center justify-content-center position-relative">
          <p class="position-absolute flex-row align-items-center justify-content-center">{{ item.label }}</p>
          <p class="position-absolute" :style="{backgroundImage: 'url(' + item.imageSrc + ')'}"></p>
        </li>
      </template>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {label: 'Feasibility Study', imageSrc: require('@/assets/images/urban-design/2.jpg')},
        {label: 'Urban Planning', imageSrc: require('@/assets/images/urban-design/6.jpg')},
        {label: 'Urban Design', imageSrc: require('@/assets/images/urban-design/4.jpg')},
        {label: 'Architectural & Building Design', imageSrc: require('@/assets/images/urban-design/建筑设计.jpg')},
        {label: 'Sustainable Environmental Planning', imageSrc: require('@/assets/images/urban-design/5.jpg')},
        {label: 'Transportation / Traffic/Roads Planning', imageSrc: require('@/assets/images/urban-design/运输:交通:道路规划.png')},
        {label: 'Integrated Water Resource Strategy & Management', imageSrc: require('@/assets/images/urban-design/水资源战略与管理.jpg')},
        {label: 'Wastewater Management Planning', imageSrc: require('@/assets/images/urban-design/7.jpg')},
        {label: 'Stormwater Management Planning', imageSrc: require('@/assets/images/urban-design/11.jpg')},
        {label: 'Sitewide Utilities Strategy and Planning Design', imageSrc: require('@/assets/images/urban-design/13.png')},
        {label: 'Solid waste Strategy and Management', imageSrc: require('@/assets/images/urban-design/电力规划.jpg')},
        {label: 'Power Supply Planning Design', imageSrc: require('@/assets/images/urban-design/12.jpg')},
      ]
    }
  }
}
</script>
<style lang="scss" scoped type="text/scss">
  .services {
    ul {
      li {
        margin-right: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
        width: 17.8rem;
        height: 17rem;
        line-height: 2.8rem;
      }
      p {
        width: 100%;
        height: 100%;
      }
      p:first-child {
        z-index: 100;
      }
      p:last-child {
        opacity: .4;
        background-size: cover;
        background-position: center center;
      }
    }
  }
</style>