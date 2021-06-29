<template>
  <div class="container-projects">
    <div class="f-c-19 f-s-22 font-bold f-f-raleway l-h-26 title">
      <span>Other Project <label v-if="showSubtitle"> - </label></span>
      <span v-if="showSubtitle" class="f-c-1">Management Project</span>
    </div>

    <ul class="flex-row flex-wrap">
      <template v-for="(project, i) in data">
        <li :key="project.id" :style="{marginRight: (i+1)%3 === 0 ? '0' : '2.8rem'}">
          <div class="image-box position-relative">
            <div :style="{backgroundImage: 'url(' + project.image + ')'}"></div>
          </div>

          <div class="f-s-16 f-c-1 font-bold f-f-neue l-h-19">{{ project.name }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Projects",
  props: {
    showSubtitle: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.container-projects {
  .title {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(112, 112, 112, 0.5);
  }

  ul {
    margin-top: 2rem;

    li { width: 31.7%; margin-bottom: 5.5rem; }
  }

  .image-box {
    display: block;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    height: 30.4rem; 
    margin-bottom: 2.16rem;

    div {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: all 1s ease 0s;
      background-size: cover;
      background-position: center;
    }
  }
  .image-box:hover div {
    transform: scale(1.2);
    transition: all 1s ease 0s;
  }
}
</style>