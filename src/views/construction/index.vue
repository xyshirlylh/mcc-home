<template>
  <div class="container-construction">
    <gap :height="86.07" />

    <div class="row-instruction flex-row">
      <Instruction class="left" @show-all="showAllProject"/>
      <gap :width="31.18" />
      <Awards class="flex-1"/>
    </div>

    <gap :height="22" />

    <Map/>

    <div ref="titleOfSectionOne">
      <template v-for="item in onSalesProjects">
        <OnSaleProjects :key="item.title" :list="item" />
      </template>
    </div>
    
    <gap :height="54" />

    <!-- Other Project -->
    <div class="container-other-project">
      <Projects :data="projectThemePark" />

      <Projects :data="projectPublic" />

      <Projects :data="projectHDB" />
    </div>

  </div>
</template>
<script>
import Instruction from "./components/Instruction.vue"
import Awards from "./components/Awards.vue"
import Map from "./components/Map.vue"
import OnSaleProjects from "@/views/property-dev/components/OnSaleProjects.vue"
import Projects from "@/views/property-dev/components/Projects.vue"

export default {
  components: {
    Instruction, Awards, Map, OnSaleProjects,Projects
  },
  data() {
    return {
      projectThemePark: {
        title: 'Other Project',
        subtitle: 'Theme Park Project',
        list: [
          {id: '0', name: 'Maritime Experiential Museum', image: '' },
          {id: '1', name: 'Universal Studios Singapore', image: require('@/assets/images/constructions/project-theme-park/studio/1.jpg') },
        ]
      },
      projectPublic: {
        title: 'Other Project',
        subtitle: 'Public & Industrial Project',
        list: [
          {id: '0', name: 'Singapore Expo', image: require('@/assets/images/constructions/project-public/expo/1.jpg')},
          {id: '1', name: 'Woodlands Checkpoint', image: require('@/assets/images/constructions/project-public/woodlands/1.jpg')},
          {id: '2', name: 'Keppel Distripark', image: require('@/assets/images/constructions/project-public/keppel-distripark/img-kepple.jpg')},
          {id: '3', name: 'Tagore 66KV Electrical Substation', image: require('@/assets/images/constructions/project-public/tagore/111625030014_.pic.jpg')},
        ]
      },
      projectHDB: {
        title: 'Other Project',
        subtitle: 'HDB Project',
        list: [
          {id: '0', name: 'Sunshine Gardens', image: require('@/assets/images/constructions/project-hdb/sunshine-gardens/1.jpg')},
          {id: '1', name: 'Punggol Emerald', image: require('@/assets/images/constructions/project-hdb/punggol-emerald/1.jpg')},
          {id: '2', name: 'Anchorvale Horizon', image: require('@/assets/images/constructions/project-hdb/anchorvale-horizon/1.jpg')},
        ]
      },
      onSalesProjects: [
        {
          title: 'Project Under Construction',
          subtitle: 'Singapore',
          projects: [
            {
              name: 'Mandai Rainforest Park', 
              location: 'Singapore', 
              desc: 'The Mandai Rainforest Park is MCC Singapore’s second major integrated theme park project. Located along Mandai Lake Road, facing the new Bird Park, it will also feature walking trails and visitors can expect to set out on a multi-layered adventure in the new 12.5-ha Rainforest Park on the forest floor pathways to the tree-top canopies.',
              images: [
                require('@/assets/images/constructions/mandai/rain-forest.png'), 
              ]
            },
            {
              name: 'Normanton Park', 
              location: 'Singapore', 
              desc: 'Normanton Park is served by the Kent Ridge MRT Station and is just a short drive away from the Queensway Shopping Centre, Anchorpoint Shopping Centre, West Coast Plaza and the Harbourfront Centre. Within reach are various entertainment and dining options including Queenstown Stadium, Temasek Club, Singapore Botanic Gardens and Tanglin Halt Food Centre.',
              images: [
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'), 
                require('@/assets/imgs/real-estate/queens-peak-img-006_ct@2x.png'), 
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png')
              ]
            },
            {
              name: 'Changi East Depot', 
              location: 'Singapore', 
              desc: 'The Changi East Depot designed and constructed by MCC Singapore, with China Jingye Engineering Corporation Limited (Singapore Branch) as the contractor, will be the second LTA-related project undertaken by the company since the Bedok South Station and Tunnels project for the Thomson-East Coast Line (TEL). ',
              images: [
                require('@/assets/images/constructions/changi-east/10-6b.jpg'), 
                require('@/assets/images/constructions/changi-east/10-7.jpg'), 
                require('@/assets/images/constructions/changi-east/10-8.jpg'),
                require('@/assets/images/constructions/changi-east/10-9.jpg'), 
                require('@/assets/images/constructions/changi-east/10-10.jpg')
              ]
            },
            {
              name: 'T311 Bedok South Station', 
              location: 'Singapore', 
              desc: 'Designed and constructed by China Jingye Engineering Corporation Limited (Singapore Branch), the Bedok South Station and Tunnels project is an underground station with tunnels spanning 270 metres. Together with Bayshore, Marine Parade, Marine Terrace, Siglap and Tanjong Rhu stations.',
              images: [
                require('@/assets/images/constructions/t311/1.jpg'), 
                require('@/assets/images/constructions/t311/2.jpg'), 
              ]
            },
            {
              name: 'Jalan Papan Factory & Office', 
              location: 'Singapore', 
              desc: 'The six-storey office building includes a parking lot, an in-house cafeteria, a multi-purpose hall, a roof garden, a koi pond and other facilities with a view of the Jurong River. The in-house cafeteria on the second floor will serve meals to employees working in the office and provide meal service to workers in various projects of the company.',
              images: [
                require('@/assets/images/constructions/jalan-papan/图片4.jpg'),
                require('@/assets/images/constructions/jalan-papan/图片2.png'), 
                require('@/assets/images/constructions/jalan-papan/图片3.png'), 
              ]
            },
            {
              name: 'Short Street Hotel', 
              location: 'Singapore', 
              desc: 'The Short Street Hotel project with a contract sum of S$60 million covers an area of 2,251 square metres. The building comprises 14 floors, one basement level and a total of 528 guest rooms. Located near an MRT station and only five to six metres away from the heritage conservation area, the project commenced work in 2020 with completion slated for 2022.',
              images: [
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png'), 
                require('@/assets/imgs/real-estate/queens-peak-img-006_ct@2x.png'), 
                require('@/assets/imgs/real-estate/nautical-img-001@2x.png')
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
        { scrollTop: h - 60 },
        200
      );
    }
  }
}
</script>
<style lang="scss" scoped>
  .container-construction {
    padding-bottom: 1.1rem;
    .row-instruction {
      padding: 0 10rem;

      .left { width: 71%; }
    }

    .container-other-project {
      padding: 0 10rem;
    }

  }
</style>