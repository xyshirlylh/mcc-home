<template>
  <div class="floor-plan">
    <div
      class="image-box position-relative flex-row align-items-center justify-content-center f-s-14 f-f-arial"
    >
      <div class="current-image">
        <img :src="floorPlans.current.imgSrc" width="100%" height="100%" />
      </div>

      <i
        class="iconfont iconarrowleft position-absolute f-s-40 f-c-1 cursor-pointer"
      ></i>
      <i
        class="iconfont iconarrowright position-absolute f-s-40 f-c-1 cursor-pointer"
      ></i>
      <span class="position-absolute"
        >{{ floorPlans.current.type }} {{ floorPlans.current.area }}</span
      >
    </div>

    <gap :height="18" />

    <ul class="flex-row flex-wrap">
      <template v-for="(item, i) in floorPlans.list">
        <li :key="i" class="cursor-pointer" @click="switchFloorPlan(item)">
          <div class="bg-c-0">
            <img :src="item.imgSrc" width="100%" height="100%" />
          </div>
          <p class="f-f-arial f-s-14 f-c-1">TYPE {{ item.type }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FloorPlan",
  props: ["floorPlans"],
  methods: {
    switchFloorPlan() {},
  },
};
</script>
<style lang="scss" scoped type="text/scss">
.floor-plan {
  .image-box {
    background-color: #eaeaea;
    @include box-size(92rem, 44.3rem);

    .current-image {
      @include box-size(83.7rem, 37.8rem);
      margin-top: 4.1rem;
    }

    .iconarrowleft {
      left: -40px;
    }
    .iconarrowright {
      right: -40px;
    }
    span {
      top: 2rem;
      line-height: 3rem;
    }
  }

  ul {
    max-width: 92rem;

    li {
      margin-right: 14px;

      div {
        @include box-size(17.3rem, 10.5rem);
        margin-bottom: 9px;
      }

      p {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>