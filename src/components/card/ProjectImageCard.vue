<template>
  <div class="project-image-card">
    <div class="image-box position-relative">
      <img :src="info.imageSrc" width="100%" />
    </div>

    <gap :height="20" />

    <div class="flex-row">
      <p class="flex-1 f-s-25 f-c-10">{{ info.type }}</p>
      <label class="f-s-25 f-c-10"
        >Year of completion <span class="f-c-1">{{ info.year }}</span></label
      >
    </div>

    <gap :height="20" />

    <p class="f-s-33 font-bold image-name">{{ info.name }}</p>

    <gap :height="20" />

    <p class="f-s-25 f-c-10">{{ info.location }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectImageCard",
  props: ["info"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss" type="text/scss">
.project-image-card {
  .image-box {
    display: block;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;

    img {
      transform: scale(1);
      transition: all 1s ease 0s;
    }
  }
  .image-box:hover img {
    transform: scale(1.2);
    transition: all 1s ease 0s;
  }
  &:hover {
    .image-name {
      color: #3b7dd8;
    }
  }
}
</style>
