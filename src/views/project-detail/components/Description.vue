<template>
  <div>
    <p class="f-s-17 font-bold f-c-2 f-f-arial title title-description">
      {{ $t("message.realEstate.project-description") }}
    </p>
    <gap :height="23.66" />

    <p class="f-s-12 f-f-arial row-description f-c-1">
      {{ desc }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    desc: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 2rem;
}
.row-description {
  padding: 0 1rem 0 0;
  white-space: pre-line;

  text-align: justify;
  max-width: 92rem;
  line-height: 1.8rem;
}
</style>