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
      <template v-for="item in onSalesProjects">
        <OnSaleProjects :key="item.title" :list="item" />
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
      otherProjects: [
        {id: '0', name: 'The ALPS', image: require('@/assets/imgs/real-estate/alps-residences-img-001@2x.png') },
        {id: '1', name: 'Poiz', image: require('@/assets/imgs/real-estate/poiz-img-002@2x.png') },
        {id: '2', name: 'One Canberra', image: require('@/assets/imgs/real-estate/one-canberra-img-004@2x.png') },
        {id: '3', name: 'Canberra Residences', image: require('@/assets/imgs/real-estate/alps-residences-img-001@2x.png') },
        {id: '4', name: 'The Canopy', image: require('@/assets/imgs/real-estate/alps-residences-img-001@2x.png') },
      ],
      projectMag: [
        {id: '0', name: 'The Nautical', image: require('@/assets/imgs/real-estate/nautical-img-001@2x.png')},
        {id: '1', name: 'Forestville', image: require('@/assets/imgs/real-estate/nautical-img-001@2x.png')},
        {id: '2', name: 'Sea Horizon', image: require('@/assets/imgs/real-estate/nautical-img-001@2x.png')},
        {id: '3', name: 'Queens Peak', image: require('@/assets/imgs/real-estate/queens-peak-img-006_ct@2x.png')},
        {id: '4', name: 'NorthWave', image: require('@/assets/imgs/real-estate/nautical-img-001@2x.png')},
      ],
      onSalesProjects: [
        {
          title: 'Singapore',
          projects: [
            {
              name: 'The Landmark', 
              location: 'Singapore', 
              desc: 'Located along Chin Swee Road, The Landmark enjoys proximity to the Outram Park MRT Station and Chinatown MRT Station. Within walking distance is the Robertson Quay, and River Valley Primary School is also a short drive away',
              images: [
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'), 
                require('@/assets/imgs/real-estate/queens-peak-img-006_ct@2x.png'), 
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png')
              ]
            },
            {
              name: 'The Landmark2', 
              location: 'Singapore', 
              desc: 'Located along Chin Swee Road, The Landmark enjoys proximity to the Outram Park MRT Station and Chinatown MRT Station. Within walking distance is the Robertson Quay, and River Valley Primary School is also a short drive away',
              images: [
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'), 
                require('@/assets/imgs/real-estate/queens-peak-img-006_ct@2x.png'), 
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png')
              ]
            }
          ]
        },
        {
          title: 'Southeast Asia',
          projects: [
            {
              name: 'sky vila', 
              location: 'Phnom Penh, Cambodia', 
              desc: 'Designed by internationally renowned Taiwanese architect Chu-Yuan Lee (C.Y. Lee), developed by Greatview Investment and managed by MCC Land (Singapore) Pte Ltd, the project has a total construction area of 120,000 square metres. Sky Villa comprises two 35-storey towers of luxury residential apartments in the prime district of central Phnom Penh.', 
              images: [
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'),
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'),
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'),
              ]
            }
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