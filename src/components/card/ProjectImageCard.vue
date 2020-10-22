<template>
  <div class="project-image-card" @mouseenter="onEnter" @mouseleave="onLeave">
    <div class="image-box position-relative">
      <img :src="info.imageSrc" width="100%"/>
    </div>

    <gap :height="20"/>

    <div class="flex-row">
      <p class="flex-1 f-s-25 f-c-10">{{info.type}}</p>
      <label class="f-s-25 f-c-10">Year of completion <span class="f-c-1">{{info.year}}</span></label>
    </div>

    <gap :height="20"/>

    <p class="f-s-33 font-bold">{{info.name}}</p>

    <gap :height="20"/>

    <p class="f-s-25 f-c-10">{{info.location}}</p>
  </div>
</template>

<script>
  export default {
    name: "ProjectImageCard",
    props: ['info'],
    data() {
      return {

      }
    },
    methods: {
      onEnter() {
        this.$refs.imageRef.style.zIndex = '10';
        this.$refs.imageRef.style.transform = 'scale(1.15)';
        this.$refs.imageRef.style.transition = 'all 300ms cubic-bezier(0, .17, .01, .99)';
      },
      onLeave() {
        this.$refs.imageRef.style.zIndex = '200';
        this.$refs.imageRef.style.transform = 'scale(1)';
        this.$refs.imageRef.style.transition = 'all 300ms cubic-bezier(0, .17, .01, .99)';
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .project-image-card {
    .image-box {
      z-index: 200;

      p {
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
      }

      p:hover {
        z-index: 50;
        //transform: scale(1.15);
        transition: all 300ms cubic-bezier(0, .17, .01, .99);
      }
    }
    &:hover {
      /*transform: scale(1.15);
      transition: ;*/
    }
  }
</style>
