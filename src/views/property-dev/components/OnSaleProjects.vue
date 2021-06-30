<template>
  <div class="on-sale-project">
    <div class="f-c-19 f-s-22 f-f-raleway font-bold title l-h-26">
      <span>{{ list.title }}</span><span v-if="list.subtitle"> - </span><span class="f-c-1">{{ list.subtitle }}</span>
    </div>

    <template v-for="project in list.projects">
      <ProjectGallary :key="project.name" :data="project" />
    </template>
  </div>
</template>
<script>
import ProjectGallary from "./ProjectGallary.vue";

export default {
  name: 'OnSaleProjects',
  components: {ProjectGallary},
  props: {
    list: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
  .on-sale-project {
    margin-top: 8.5rem;
    .title { padding-left: 10rem; }
  }
</style>