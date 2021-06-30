<template>
  <div>
    <p class="f-s-17 font-bold f-c-2 f-f-arial title title-facilities">
      {{ $t("message.realEstate.project-facilities") }}
      <gap :height="52" />
    </p>

    <ol class="flex-row flex-wrap row-facilities">
      <template v-for="(item, i) in data">
        <li :key="i" class="flex-row align-items-center">
          <p><i :class="item.icon" class="iconfont"></i></p>
          <span class="f-s-11 f-f-arial f-c-2">{{ item.label }}</span>
        </li>
      </template>
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 2rem;
}
.iconMaskGroup25 {
  font-size: 2.5rem;
}
.icon3788750 {
  margin-left: -8px;
}
.icon3582873 {
  margin-left: -2px;
}
.icon783192 {
  margin-left: -4px;
}
.icondropoff {
  font-size: 16px !important;
}
.row-facilities {
  max-width: 64.7rem;

  li {
    min-width: 20rem;
    margin-bottom: 2.3rem;

    p {
      width: 25px;
      i {
        font-size: 16px;
      }
    }
  }
}
</style>