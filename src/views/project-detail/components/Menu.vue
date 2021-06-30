<template>
  <ul ref="overview" class="row-menu flex-row position-relative">
    <li
      v-for="item in operations"
      :key="item.id"
      class="f-f-arial cursor-pointer flex-row align-items-center"
      @mouseover="onHoverMenu(item)"
      @click="onClickMenu(item)"
    >
      <i
        :style="{ color: item.id === currentMenuId ? 'black' : 'grey' }"
        :class="item.icon"
        class="iconfont f-s-30"
      ></i>
      <span
        class="f-s-14"
        :style="{ color: item.id === currentMenuId ? 'black' : 'grey' }"
        >{{ item.label }}</span
      >
    </li>

    <!-- <div
      class="menu-line position-absolute"
      :style="{ transform: `translateX(${translateX}rem)` }"
    ></div> -->
  </ul>
</template>
<script>
export default {
  data() {
    return {
      currentMenuId: 0,
      translateX: 0,
      operations: [
        {
          id: 0,
          label: "Overview",
          icon: "icongailan",
          translate: 0,
          ref: "overview",
        },
        {
          id: 1,
          label: "Location",
          icon: "icon535239",
          translate: 19,
          ref: "location",
        },
      ],
    };
  },
  methods: {
    onHoverMenu(item) {
      this.translateX = item.translate;
    },
    onClickMenu(item) {
      const $ = window.$;
      const el = this.$refs[item.ref];
      const h = $(el).offset().top;
      this.currentLabel = item.id;

      $("body,html").animate({ scrollTop: h - 100 }, 200);
    },
  }
};
</script>
<style scoped lang="scss" type="text/scss">
.row-menu {
  height: 1.6rem;
  line-height: 1.6rem;

  .icongailan {
    font-size: 3.5rem;
    margin-left: -4px;
  }
  .icon535239 {
    font-size: 2rem;
  }

  li {
    color: #8b8b8b;
    margin-right: 5.5rem;

    i {
      padding-right: 7.74px;
    }
    span {
      padding-right: 19px;
    }

    &:hover {
      color: #000000;
    }
  }

  /* .menu-line {
    bottom: -1rem;
    width: 10rem;
    border-bottom: 2px solid #000000;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  } */
}
</style>