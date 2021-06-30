<template>
  <div class="urban-design">
    <div class="row-top">
      <gap :height="73" />

      <Design />

      <gap :height="73" />

      <service />
    </div>

    <template v-for="item in projects">
      <OnSaleProjects :key="item.title" :list="item" />
    </template>

    <gap :height="174" />
  </div>
</template>
<script>
import Design from "./components/Design.vue";
import Service from "./components/Services.vue";
import OnSaleProjects from "@/views/property-dev/components/OnSaleProjects.vue"
export default {
  components: { Design, Service, OnSaleProjects },
  data() {
    return {
      projects: [
        {
          title: "Our Project",
          subtitle: "Southeast Asia",
          projects: [
            {
              name: "DANGA HEIGHTS",
              location: "Malaysia",
              desc: "The Danga Heights project is located at the Iskandar Development Region of Johor Bahru, the main southern development corridor of the second largest city in Malaysia. Close to the Johor Bahru CBD and adjacent to Skudai Highway.",
              images: [
                require("@/assets/images/urban-design/danga/F_01.jpg"),
                require("@/assets/images/urban-design/danga/F_02.jpg"),
                require("@/assets/images/urban-design/danga/F_03.jpg"),
                require("@/assets/images/urban-design/danga/F_04.jpg"),
                require("@/assets/images/urban-design/danga/F_05.jpg"),
              ],
            },
            {
              name: "DARA SAKOR",
              location: "Cambodia",
              desc: "Dara Sakor project is a 360 km² large city development located along the southwest coast of Koh Kong Province, Cambodia, which lies along the Gulf of Thailand. The site is situated about 260 km to Phnom Penh.",
              images: [
                require("@/assets/images/urban-design/dara-sakor/1.jpg"),
                require("@/assets/images/urban-design/dara-sakor/2.jpg"),
                require("@/assets/images/urban-design/dara-sakor/3.jpg"),
              ],
            },
          ],
        },
      ]
    };
  },
};
</script>
<style lang="scss" scoped type="text/scss">
.urban-design {
  .row-top {
    padding: 0 10rem;
  }
}
</style>