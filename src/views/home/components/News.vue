<template>
  <div class="news-component">
    <div class="row-1">
      <div class="col-1">
        <div class="id">02</div>
        <div class="underline"></div>
        <div class="subtitle">Our latest news & events</div>
      </div>
      <div class="col-2">MCC News</div>
      <div class="col-3"></div>
    </div>

    <div class="row-2">
      <div class="news-1 flex-row">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="news-2 news flex-row">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="news-3 news flex-row">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>

    <div class="row-3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin styling($unit-size) {
  .news-component {
    //background-color: yellow;
    padding-left: 100 * $unit-size;
    padding-right: 100 * $unit-size;
    padding-top: 49 * $unit-size;
    .row-1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .col-1 {
        width: 177 * $unit-size;
        .id {
          font-family: PT Sans;
          font-size: 28 * $unit-size;
        }
        .subtitle {
          font-family: Helvetica;
          font-size: 10 * $unit-size;
          line-height: 12 * $unit-size;
          margin-top: 9.69 * $unit-size;
          margin-left: 49 * $unit-size;
          font-weight: 700;
          white-space: nowrap;
          color: #717171;
        }

        .underline {
          height: 3px;
          width: 103.14 * $unit-size;
          margin-top: 11.31 * $unit-size;
          border-top: solid black;
          border-width: 1px;
        }
      }
      .col-2 {
        text-align: center;
        color: #1f76ad;
        font-family: Raleway;
        font-size: 22 * $unit-size;
        font-weight: 800;
      }
      .col-3 {
        width: 177 * $unit-size;
      }
    }
    .row-2 {
      margin-top: 23 * $unit-size;
      .news-1 {
        width: 100%;
        height: 330 * $unit-size;

        .left {
          width: 486 * $unit-size;
          height: 100%;
          background-color: red;
        }
        .right {
          width: 680 * $unit-size;
          height: 100%;
          background-color: rgba(234, 243, 255, 1);
        }
      }
      .news {
        width: 100%;
        height: 117 * $unit-size;

        margin-top: 6 * $unit-size;

        .left {
          width: 191 * $unit-size;
          height: 100%;
          background-color: red;
        }
        .right {
          width: 975 * $unit-size;
          height: 100%;
          background-color: rgba(234, 243, 255, 1);
        }
      }
      .news-2 {
      }
      .news-3 {
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>
    
