<template>
  <div class="container-property-dev">
    <gap :height="86.07" />

    <div class="row-instruction flex-row">
      <Instruction class="left" />
      <gap :width="55.87" />
      <Awards class="flex-1"/>
    </div>

    <gap :height="92" />

    <!-- On sale Project -->
    <div style="height: 600px; width: 100%; background-color: yellow;"></div>

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
import Projects from "./components/Projects"

export default {
  components: {Awards, Instruction, Projects},
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
      ]
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