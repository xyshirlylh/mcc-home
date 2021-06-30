<template>
  <section>
    <p class="f-s-17 font-bold title title-detail f-c-2 f-f-arial">Detail</p>
    <gap :height="14.25" />
    <ul class="flex-row flex-wrap row-detail">
      <template v-for="(item, i) in details">
        <li :key="i">
          <p class="f-s-7 f-f-arial">{{ item.title }}</p>
          <p class="f-s-11 f-f-arial">{{ item.label }}</p>
        </li>
      </template>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    details: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped type="text/css" lang="scss">
.title {
  line-height: 2rem;
}
.row-detail {
  max-width: 80rem;

  li {
    width: 12rem;
    border-bottom: 1px dashed #707070;
    margin-right: 1.95rem;
    margin-bottom: 2.575rem;

    p:first-child {
      line-height: .9rem;
      color: rgba(0, 0, 0, 0.5);
    }
    p:last-child {
      margin-top: 1.1rem;
      margin-bottom: 1.2rem;
      line-height: 1.2rem;
      color: #4B4B4B;
    }
  }
}
</style>