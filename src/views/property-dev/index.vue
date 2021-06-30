<template>
  <div class="container-property-dev">
    <gap :height="86.07" />

    <div class="row-instruction flex-row">
      <Instruction class="left" @show-all="showAllProject"/>
      <gap :width="55.87" />
      <Awards class="flex-1"/>
    </div>

    <gap :height="7" />

    <!-- On sale Project -->
    <div ref="titleOfSectionOne">
      <template v-for="(item, i) in onSalesProjects">
        <OnSaleProjects :key="`${item.title}${i}`" :list="item" />
      </template>
    </div>

    <gap :height="77" />

    <!-- Other Project -->
    <div class="container-other-project">
      <Projects :data="otherProjects" />

      <Projects :data="projectMag" :showSubtitle="true" />
    </div>
  </div>
</template>
<script>
import Awards from "./components/Awards.vue";
import Instruction from "./components/Instruction";
import Projects from "./components/Projects";
import OnSaleProjects from "./components/OnSaleProjects.vue";

export default {
  components: {Awards, Instruction, Projects, OnSaleProjects},
  data() {
    return {
      otherProjects: {
        title: 'Other Project', 
        subtitle: '',
        list: [
          {id: '0', name: 'The ALPS', image: require('@/assets/images/property-dev/alps/1.jpg') },
          {id: '1', name: 'Poiz', image: require('@/assets/images/property-dev/poiz/2.jpg') },
          {id: '2', name: 'One Canberra', image: require('@/assets/images/property-dev/one-canberra/4.jpg') },
          {id: '3', name: 'Canberra Residences', image: require('@/assets/images/property-dev/canberra-residences/3.jpg') },
          {id: '4', name: 'The Canopy', image: require('@/assets/images/property-dev/one-canopy/2.jpg') },
        ]
      },
      projectMag: {
        title: 'Other Project',
        subtitle: 'Management Project',
        list: [
          {id: '0', name: 'The Nautical', image: require('@/assets/images/property-dev/nautical/1.jpg')},
          {id: '1', name: 'Forestville', image: require('@/assets/images/property-dev/forestville/1.jpg')},
          {id: '2', name: 'Sea Horizon', image: require('@/assets/images/property-dev/sea-horizon/1.jpg')},
          {id: '3', name: 'Queens Peak', image: require('@/assets/images/property-dev/queens-peak/1.jpg')},
          {id: '4', name: 'NorthWave', image: require('@/assets/images/property-dev/north-wave/1.jpg')},
        ]
      },
      onSalesProjects: [
        {
          title: 'On Sale Project',
          subtitle: 'Singapore',
          projects: [
            {
              name: 'One Bernam', 
              location: 'Singapore', 
              desc: 'One Bernam is served by the Tanjong Pagar MRT Station and Prince Edward Road MRT Station, as well as the Ayer Rajah Expressway (AYE). Within reach are Cantonment Primary School and the National Library, while VivoCity is just a short drive away. One Bernam also enjoys proximity to Marina Bay Sands and Great World City. The project commenced work in 2019 with completion slated for 2023.',
              images: [
                // require('@/assets/images/property-dev/one-bernam/1.JPG'), 
                require('@/assets/images/property-dev/one-bernam/ClubhouseNite-6K-Fn4.jpg'),
                require('@/assets/images/property-dev/one-bernam/L34_FunctionRoom-6K-3.jpg'),
                require('@/assets/images/property-dev/one-bernam/2.jpg'), 
                require('@/assets/images/property-dev/one-bernam/Aerial02-6K-ExtFn1.jpg'),
                require('@/assets/images/property-dev/one-bernam/ClubhouseINTDay-6K-Fn3.jpg'),
                require('@/assets/images/property-dev/one-bernam/Hammock-8K-Fn2.jpg'),
                require('@/assets/images/property-dev/one-bernam/Hero02-6K-Fn2.jpg'),
                require('@/assets/images/property-dev/one-bernam/Pool1-8k-Fn5.jpg'),
               /*  require('@/assets/images/property-dev/one-bernam/PoolCabana-8K-Fn4.jpg'),
                require('@/assets/images/property-dev/one-bernam/Retail-6K-Fn1.jpg'),
                require('@/assets/images/property-dev/one-bernam/Spa-8K-Fn3.jpg'),
                require('@/assets/images/property-dev/one-bernam/Tatami-8k-Fn3.jpg'), */
              ]
            },
            {
              name: 'Provence Residence', 
              location: 'Singapore', 
              desc: 'Provence Residence is inspired by the effortless sophistication and elegance of French design. Various shopping malls like the Sun Plaza and Sembawang Shopping Centre also offer convenient options for lifestyle, dining and entertainment. Provence Residence commenced work in 2020 with completion slated for 2026.',
              images: [
                /* require('@/assets/images/property-dev/provence-residence/6Z2A0107.JPG'), 
                require('@/assets/images/property-dev/provence-residence/6Z2A0131.JPG'),
                require('@/assets/images/property-dev/provence-residence/6Z2A0148.JPG'), */
                require('@/assets/images/property-dev/provence-residence/PR6.jpg'),
                require('@/assets/images/property-dev/provence-residence/PR1.jpg'),
                require('@/assets/images/property-dev/provence-residence/PR2.jpg'), 
                require('@/assets/images/property-dev/provence-residence/PR3.jpg'),
                require('@/assets/images/property-dev/provence-residence/PR4.jpg'),
                require('@/assets/images/property-dev/provence-residence/PR5.jpg'),
              ]
            },
            {
              name: 'Landmark', 
              location: 'Singapore', 
              desc: 'Located along Chin Swee Road, The Landmark enjoys proximity to the Outram Park MRT Station and Chinatown MRT Station. Within walking distance is the Robertson Quay, and River Valley Primary School is also a short drive away',
              images: [
                require('@/assets/images/property-dev/landmark/7.jpg'),
                require('@/assets/images/property-dev/landmark/6.jpg'), 
                require('@/assets/images/property-dev/landmark/11.jpg'),
                require('@/assets/images/property-dev/landmark/1.jpg'), 
                require('@/assets/images/property-dev/landmark/2.jpg'),
                require('@/assets/images/property-dev/landmark/4.jpg'),
                require('@/assets/images/property-dev/landmark/5.jpg'),
                require('@/assets/images/property-dev/landmark/8.jpg'),
                require('@/assets/images/property-dev/landmark/9.jpg'),
                require('@/assets/images/property-dev/landmark/10.jpg'), 
              ]
            },
          ]
        },
        {
          title: 'On Sale Project',
          subtitle: 'Southeast Asia',
          projects: [
            {
              name: 'Sky Vila', 
              location: 'Phnom Penh, Cambodia', 
              desc: 'The project has a total construction area of 120,000 square metres. Sky Villa comprises two 35-storey towers of luxury residential apartments in the prime district of central Phnom Penh. The property features 256 units ideal for personal or multi-generational family living with generous residential spaces that range from 272 square metres to 509 square metres. ', 
              images: [
                require('@/assets/images/property-dev/sky-vila/1.jpg'),
                require('@/assets/images/property-dev/sky-vila/2.jpg'),
                require('@/assets/images/property-dev/sky-vila/3.jpg'),
                require('@/assets/images/property-dev/sky-vila/4.jpg'),
              ]
            },
            {
              name: 'JKT Living Star', 
              location: 'Jakarta', 
              desc: 'The core location of the Southeast Jakarta area with urban facilities and convenient living. JKT Living Star also enjoys proximity to the upcoming Jakarta Light Rail Transit (LRT) as well as the Ciracas and Cibubur Station. The project commenced work in 2019 and was completed in 2021.', 
              images: [
                require('@/assets/images/property-dev/living-star/6.jpg'),
                require('@/assets/images/property-dev/living-star/1.jpg'),
                require('@/assets/images/property-dev/living-star/2.jpg'),
                // require('@/assets/images/property-dev/living-star/3.jpg'),
                require('@/assets/images/property-dev/living-star/4.jpg'),
                require('@/assets/images/property-dev/living-star/5.jpg'),
                // require('@/assets/images/property-dev/living-star/7.jpg'),
                require('@/assets/images/property-dev/living-star/8.jpg'),
                // require('@/assets/images/property-dev/living-star/9.jpg'),
                require('@/assets/images/property-dev/living-star/10.jpg'),
              ]
            },
          ]
        },
      ]
    }
  },
  methods: {
    showAllProject() {
      const $ = window.$;
      const el = this.$refs.titleOfSectionOne;
      const h = $(el).offset().top;

      // const marginTop = $(this.$refs.contentRef).css("marginTop");
      // const marginTop = 100;
      $("body,html").animate(
        { scrollTop: h - 40 },
        200
      );
    }
  }
}
</script>
<style type="text/css" lang="scss">
  .container-property-dev {
    padding-bottom: 5.5rem;

    .row-instruction {
      padding: 0 10rem;

      .left { width: 59%; }
    }

    .container-other-project {
      padding: 0 10rem;
    }
  }
</style>