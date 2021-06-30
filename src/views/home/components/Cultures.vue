<template>
  <div class="cultures-component">
    <div class="block5">
      <div class="row-1">
        <div class="col-1">
          <div class="">
            <div class="container-5">
              <svg class="line-5">
                <line x1="0" y1="0" x2="2.5rem" y2="0" />
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
              <line x1="0" y1="0" x2="2.5rem" y2="0" />
            </svg>
            <p class="title-5 font-bold">{{ $t("message.culture.vision") }}</p>
          </div>
          <div class="content-5">
            <p>{{ $t("message.culture.content-2") }}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="container-5">
            <svg class="line-5">
              <line x1="0" y1="0" x2="2.5rem" y2="0" />
            </svg>
            <p class="title-5 font-bold">{{ $t("message.culture.culture") }}</p>
          </div>
          <div class="content-5">
            <p>
              {{ $t("message.culture.content-3") }}
            </p>
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
      padding: 14.9rem 0 0 14rem;
      display: flex;
      flex-direction: column;
      height: 70rem;

      .ID {
        margin-top: 0;
      }

      .row-1 {
        height: 35rem;
        margin-top: 14.7rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .container-5 {
          display: flex;
          flex-direction: row;
          height: 4.7rem;

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
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
          }
        }

        .content-5 {
          margin-top: 5rem;
          text-align: left;
          width: 35rem;
          line-height: 5rem;

          font-size: 3rem;

          letter-spacing: 0px;
          color: rgba(0, 0, 0, 1);
        }

        .col-1 {
          background-image: url("../../../assets/imgs/home/mission.png");
          height: 35rem;
          width: 30%;
          background-color: white;
          background-position: 40% 80%;
          background-repeat: no-repeat;
          background-size: 50%;
        }

        .col-2 {
          background-image: url("../../../assets/imgs/home/vision.png");

          height: 35rem;
          width: 30%;
          background-color: white;
          background-position: 60% 60%;
          background-repeat: no-repeat;
          background-size: 50%;
        }

        .col-3 {
          background-image: url("../../../assets/imgs/home/culture.png");
          height: 35rem;
          width: 30%;
          background-color: white;
          background-position: 80% 50%;
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