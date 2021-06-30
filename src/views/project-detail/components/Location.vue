<template>
  <div class="row-map">
    <GmapMap
      ref="mapRef"
      :center="location"
      :zoom="17"
      map-type-id="roadmap"
      style="width: 100%; height: 100%"
    >
      <GmapMarker :position="location" :clickable="true" />
    </GmapMap>
  </div>
</template>
<script>
export default {
  props: {
    location: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.row-map {
  @include box-size(100%, 70.3rem);
}
</style>