<template>
  <div class="project-image-card">
    <div class="image-box position-relative">
      <img :src="info.imageSrc" width="100%" />
    </div>

    <gap :height="20" />

    <div class="flex-row">
      <p class="flex-1 type f-c-10">{{ info.type }}</p>
      <label class="year f-c-10"
        >{{ $t("message.realEstate.completion") }}
        <span class="f-c-1">{{ info.year }}</span></label
      >
    </div>

    <gap :height="20" />

    <p class="name font-bold image-name">{{ info.name }}</p>

    <gap :height="20" />

    <p class="location f-c-10">{{ info.location }}</p>
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
$unit-size:100vw/1366;
.project-image-card {
  .type {
    font-size: 17 * $unit-size;
  }
  .year {
    font-size: 17 * $unit-size;
  }
  .name {
    font-size: 22 * $unit-size;
  }
  .location {
    font-size: 17 * $unit-size;
  }
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
