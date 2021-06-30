<template>
  <div class="image-gallery">
    <div
      class="section-one position-relative"
      :style="{ backgroundImage: `url(${current.imageSrc})` }">
      <!-- <span
        class="position-absolute z-index-50 f-s-50 f-c-0 f-f-raleway font-bold"
        style="background-color: rgba(1, 1, 1, 0.3); padding: 1rem"
      >
        {{ name }}
      </span> -->
    </div>

    <div class="flex-row section-gallery bg-c-0 justify-content-center">
      <ul class="flex-row">
        <li
          v-for="item in images"
          :key="item.id"
          :style="{ backgroundImage: `url(${item.imageSrc})` }"
          :class="{ 'current-cover': item.id === current.id }"
          class="cursor-pointer"
          @click="onSwitchCover(item)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: this.images[0],
    };
  },
  methods: {
    onSwitchCover(item) {
      this.current = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.image-gallery {
  .section-one {
    height: 51.3rem;
    background-size: cover;
    background-position: center center;

    span {
      line-height: 5.9rem;
      top: 11.2rem;
      left: 14rem;
    }
  }

  .section-gallery {
    // padding-left: 49.9rem;
    ul {
      padding: .6rem 0;

      li {
        width: 12.9rem;
        height: 7.6rem;
        background-size: cover;
        background-position: center center;
        opacity: 0.53;
        margin-right: 12px;
        backdrop-filter: blur(50px);
      }

      .current-cover {
        opacity: 1;
      }
    }
  }
}
</style>