<template>
  <div
    class="
      row-pagination
      bg-c-2
      flex-row
      justify-content-center
      align-items-center
    "
  >
    <div class="box">
      <div class="flex-row align-items-center">
        <p class="flex-1 f-c-2 f-f-arial f-s-11 flex-row align-items-center">
          <i class="iconfont iconarrow-left"></i
          ><span class="cursor-pointer" @click="goto(previousID)"
            >Previous</span
          >
        </p>
        <p
          class="
            f-c-2 f-f-arial f-s-11
            cursor-pointer
            flex-row
            align-items-center
          "
          @click="goto(nextID)"
        >
          Next<i class="iconfont iconarrow-right"></i>
        </p>
      </div>

      <gap :height="16" />

      <div class="flex-row">
        <p class="flex-1 f-c-2 f-s-17 f-f-arial font-bold">
          {{ $t("message.realEstate." + this.previousID + ".name") }}
        </p>
        <p class="f-c-2 f-s-17 f-f-arial font-bold">
          {{ $t("message.realEstate." + this.nextID + ".name") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.row-pagination {
  @include box-size(100%, 25.7rem);

  .box {
    width: 65.9rem;

    .iconarrow-left {
      padding-right: 11px;
    }
    .iconarrow-right {
      padding-left: 11px;
    }
  }
}
</style>