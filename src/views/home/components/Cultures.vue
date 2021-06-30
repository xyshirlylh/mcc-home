<template>
  <div class="cultures-component">
    <div class="block5">
      <div class="title">Our Culture</div>
      <div class="row-1">
        <div class="col-1">
          <div class="">
            <div class="container-5">
              <svg class="line-5">
                <line x1="0" y1="0" x2="1.5vw" y2="0" />
              </svg>
              <p class="title-5 font-bold">
                {{ $t("message.culture.mission") }}
              </p>
            </div>
          </div>
          <div class="f-f-sans f-s-25 content-5">
            <p>{{ $t("message.culture.content-1") }}</p>
          </div>
        </div>
        <div class="col-2">
          <div class="container-5">
            <svg class="line-5">
              <line x1="0" y1="0" x2="1.5vw" y2="0" />
            </svg>
            <p class="title-5 font-bold">{{ $t("message.culture.vision") }}</p>
          </div>
          <div class="content-5">
            <p>{{ $t("message.culture.content-2") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin styling($unit-size) {
  .cultures-component {
    .block5 {
      padding: 41 * $unit-size 282 * $unit-size 0 265 * $unit-size;
      display: flex;
      flex-direction: column;
      height: 476 * $unit-size;
      background-color: #d3e1eb;

      .title {
        margin-top: 41 * $unit-size;
        text-align: center;
        font-family: Raleway;
        font-size: 21 * $unit-size;
        line-height: 25 * $unit-size;
        font-weight: 800;
      }

      .row-1 {
        margin-top: 80 * $unit-size;
        height: 212.49 * $unit-size;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        //background-color: red;

        .container-5 {
          display: flex;
          flex-direction: row;
          height: 4.7rem;
          .line-5 {
            position: relative;
            top: -12 * $unit-size;
          }

          svg {
            width: 3rem;
            margin-top: 3rem;
            fill: transparent;
            stroke: rgba(19, 129, 206, 1);
            stroke-width: 1rem;
            stroke-linejoin: miter;
            stroke-linecap: butt;
            stroke-miterlimit: 4;
            shape-rendering: auto;
          }

          .title-5 {
            margin-left: 0.5rem;
            width: 50%;
            color: var(--unnamed-color-000000);

            text-align: left;
            font: 3.5rem/6.4rem Open Sans;
            font-size: 22 * $unit-size;
            line-height: 40 * $unit-size;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
          }
        }

        .content-5 {
          text-align: left;
          font-family: Open Sans;
          font-size: 16 * $unit-size;
          line-height: 28 * $unit-size;
          font-weight: 800;

          letter-spacing: 0px;
          color: rgba(0, 0, 0, 1);
          white-space: nowrap;
        }

        .col-1 {
          background-image: url("../../../assets/imgs/home/mission.png");
          height: 219.14 * $unit-size;
          width: 276.64 * $unit-size;
          // background-color: white;
          background-position: 0% 100%;
          background-repeat: no-repeat;
          background-size: 70%;
        }

        .col-2 {
          background-image: url("../../../assets/imgs/home/vision.png");
          //filter: grayscale(100%);

          height: 219.14 * $unit-size;
          width: 323 * $unit-size;

          background-position: 0% 80%;
          background-repeat: no-repeat;
          background-size: 50%;
        }
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>