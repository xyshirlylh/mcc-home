<template>
  <div class="home">
    <gap :height="119" />
    <div class="block1">
      <div class="ID">
        <span>01</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="100" y2="0" />
      </svg>

      <div class="title">
        <span>What we do</span>
      </div>

      <gap :height="69" />

      <div>
        <div class="subtitles" style="text-align: center">
          <div class="subtitle" @mouseover="consultation()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 1"
                id="Ellipse_179"
                rx="40"
                ry="40"
                cx="47.5"
                cy="47.5"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="6.5"
                ry="6.5"
                cx="47.5"
                cy="47.5"
              ></ellipse>
            </svg>
            <span v-if="selected === 1" style="color: black">Consultation</span>
            <span v-else>Consultation</span>
          </div>

          <div class="subtitle" @mousemove="realestate()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 2"
                id="Ellipse_179"
                rx="40"
                ry="40"
                cx="47.5"
                cy="47.5"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="6.5"
                ry="6.5"
                cx="47.5"
                cy="47.5"
              ></ellipse>
            </svg>
            <span v-if="selected === 2" style="color: black">Real Estate</span>
            <span v-else>Real Estate</span>
          </div>

          <div class="subtitle" @mouseover="construction()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 3"
                id="Ellipse_179"
                rx="40"
                ry="40"
                cx="47.5"
                cy="47.5"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="6.5"
                ry="6.5"
                cx="47.5"
                cy="47.5"
              ></ellipse>
            </svg>
            <span v-if="selected === 3" style="color: black">Construction</span>
            <span v-else>Construction</span>
          </div>
        </div>

        <div class="content">
          <img
            v-if="selected === 1"
            class="image"
            src="../../assets/imgs/home/scott-graham-5fNmWej4tAA-unspl@2x.png"
            alt=""
          />
          <img
            v-else-if="this.selected === 2"
            class="image"
            src="../../assets/imgs/home/realestate.png"
            alt=""
          />
          <img
            v-else-if="selected === 3"
            class="image"
            src="../../assets/imgs/home/construction.png"
            alt=""
          />
          <br /><br />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy
          </p>
          <div
            style="display: flex; justify-content: center; align-items: center"
          ></div>

          <br />
          <button class="button">Read More</button>
        </div>
      </div>
    </div>

    <gap :height="60" />

    <div class="block2">
      <div class="ID">
        <span>02</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="100" y2="0" />
      </svg>

      <div class="title">
        <span>about us</span>
      </div>

      <gap :height="69" />

      <div class="background">
        <gap :height="100" />

        <div class="content">
          <p class="content-head">Mcc Singapore</p>
          <p>
            Incorporated in 2010, MCC Land (Singapore) Limited has been actively
            involved in Singapore’s real estate scene and achieved good results.
            It has developed five development projects, co-developed two
            development projects and managed five development projects. The
            company has been
          </p>
        </div>

        <img src="../../assets/imgs/home/MCC_BUILDING.png" alt="" />
      </div>
    </div>

    <gap :height="3000" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      selected: 1,
    };
  },

  methods: {
    consultation: function () {
      this.selected = 1;
    },
    realestate: function () {
      this.selected = 2;
    },
    construction: function () {
      this.selected = 3;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100%;
  padding: 14rem 14rem 0 14rem;

  .block1 {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1023px) {
    .block {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
    .box-container {
      width: 100% !important;
    }
  }

  .ID {
    top: 213px;
    left: 140px;
    width: 48px;
    height: 48px;
    color: var(--unnamed-color-bfd6f6);
    text-align: left;
    font: normal normal bold 41px/53px PT Sans;
    letter-spacing: 1.64px;
    color: #bfd6f6;
    opacity: 1;
  }

  .title-underline {
    fill: transparent;
    stroke: rgba(113, 113, 113, 1);
    stroke-width: 1px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
    width: 145px;
    height: 1px;
    left: 140px;
    top: 268.5px;
  }

  .title {
    top: 295px;
    left: 210px;
    width: 141px;
    height: 30px;
    margin-left: 70px;
    color: var(--unnamed-color-717171);
    text-align: left;
    font: normal normal normal 26px/33px PT Sans;
    letter-spacing: 1.04px;
    color: #717171;
    opacity: 1;
  }

  .subtitle {
    &:hover {
      color: var(--unnamed-color-000000);
    }
    span {
      margin-left: 20px;
    }
    margin-left: 50px;

    color: var(--unnamed-color-e3e3e3);
    text-align: left;
    font: normal normal normal 2.73vw/3.354vw Source Sans Pro;
    letter-spacing: 2px;
    color: #e3e3e3;
    opacity: 1;
  }

  .subtitles {
    float: left;
    max-width: 45%;
    height: auto;
  }

  .content {
    float: right;
    width: 55%;
    .image {
      max-width: 100%;
      height: auto;
    }
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 20px/28px Source Sans Pro;
    letter-spacing: 0.8px;
    color: #000000;
    opacity: 1;
  }

  .small-icon {
    width: 95px;
    height: 95px;
    opacity: 1;
    fill: transparent;
    stroke: rgba(59, 125, 216, 1);
    stroke-width: 1px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
  }

  .button {
    background-color: white;
    width: 220px;
    height: 54px;
    border: 1px solid var(--unnamed-color-000000);
    border: 1px solid #000000;
    border-radius: 4px;
    opacity: 1;
  }

  .block2 {
    display: flex;
    flex-direction: column;
    .background {
      background-image: url("../../assets/imgs/home/blue-blend-watercolour-waterco@2x.png");
      background-color: white;
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      //position: relative;
    }
    img {
      margin-top: 37%;
      max-width: 50%;
      max-height: 50%;
    }

    .content {
      .content-head {
        color: var(--unnamed-color-000000);
        text-align: left;
        font: normal normal normal 45px/64px Source Sans Pro;
        letter-spacing: 1.8px;
        color: #000000;
        opacity: 1;
      }
      float: right;
      width: 55%;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 22px/45px Source Sans Pro;
      letter-spacing: 0.88px;
      color: #000000;
      opacity: 1;
    }
  }
}
</style>
