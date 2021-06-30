<template>
  <div class="home">
    <div class="block1">
      <div class="container-1-left">
        <div class="block-1-message">
          <p>{{ $t("message.welcome") }}</p>
        </div>

        <div>
          <div class="ID">
            <p class="f-f-ptsans">01</p>
          </div>

          <svg class="title-underline">
            <line x1="0" y1="0" x2="150" y2="0" />
          </svg>

          <div class="title">
            <p>{{ $t("message.intro-title") }}</p>
          </div>
        </div>

        <div class="subtitle-s" style="text-align: center">
          <div class="subtitle" @mouseover="consultation()">
            <svg class="small-icon" viewBox="0 0 3.367vw 3.367vw">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 1"
                id="Ellipse_179"
                rx="1.65vw"
                ry="1.65vw"
                cx="1.6835vw"
                cy="1.6835vw"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.25vw"
                ry="0.25vw"
                cx="1.6835vw"
                cy="1.6835vw"
              ></ellipse>
            </svg>
            <span
              @click="goto('consultation')"
              v-if="selected === 1"
              style="color: black; cursor: pointer"
              >{{ $t("message.intro-subtitle-1") }}</span
            >
            <span v-else>{{ $t("message.intro-subtitle-1") }}</span>
          </div>

          <div
            class="subtitle"
            @mousemove="realestate()"
            style="margin-top: 2.892vw"
          >
            <svg class="small-icon" viewBox="0 0 3.367vw 3.367vw">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 2"
                id="Ellipse_179"
                rx="1.65vw"
                ry="1.65vw"
                cx="1.6835vw"
                cy="1.6835vw"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.25vw"
                ry="0.25vw"
                cx="1.6835vw"
                cy="1.6835vw"
              ></ellipse>
            </svg>

            <span
              v-if="selected === 2"
              style="color: black; cursor: pointer"
              @click="goRealEstate()"
              >{{ $t("message.intro-subtitle-2") }}</span
            >

            <span v-else>{{ $t("message.intro-subtitle-2") }}</span>
          </div>

          <div
            class="subtitle"
            @mouseover="construction()"
            style="margin-top: 2.562vw"
          >
            <svg class="small-icon" viewBox="0 0 3.367vw 3.367vw">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 3"
                id="Ellipse_179"
                rx="1.65vw"
                ry="1.65vw"
                cx="1.6835vw"
                cy="1.6835vw"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.25vw"
                ry="0.25vw"
                cx="1.6835vw"
                cy="1.6835vw"
              ></ellipse>
            </svg>

            <span
              style="color: black; cursor: pointer"
              v-if="selected === 3"
              @click="goConstruction()"
              >{{ $t("message.intro-subtitle-3") }}</span
            >

            <span v-else>{{ $t("message.intro-subtitle-3") }}</span>
          </div>
        </div>
      </div>

      <div class="container-1-right">
        <div class="content">
          <div v-if="selected === 1" style="height: 100%">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-1-blur"
            >
              <div>
                <p style="margin-top: 10vw">
                  {{ $t("message.consultation.shortDescription") }}
                </p>

                <button class="button" @click="goto('consultation')">
                  <p :style="{ 'margin-left': lang === 'zh' ? '17%' : '13%' }">
                    {{ $t("message.read-more") }}
                  </p>

                  <svg class="button-arrow" viewBox="0 8 28 28">
                    <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div v-else class="image-1" @mouseover="blur"></div>
          </div>

          <div v-else-if="this.selected === 2" style="height: 100%">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-2-blur"
            >
              <div style="height: 100%" class="flex-column">
                <p :style="{ 'margin-top': lang === 'zh' ? '20%' : '15%' }">
                  {{ $t("message.realEstate.shortDescription") }}
                </p>

                <div class="button" @click="goRealEstate()">
                  <p :style="{ 'margin-left': lang === 'zh' ? '17%' : '13%' }">
                    {{ $t("message.read-more") }}
                  </p>

                  <svg class="button-arrow" viewBox="0 8 25 25">
                    <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-else class="image-2" @mouseover="blur"></div>
          </div>
          <div v-else-if="selected === 3" style="height: 100%">
            <div
              v-if="mouseover === true"
              @mouseleave="clear"
              class="image-3-blur"
            >
              <div>
                <p :style="{ 'margin-top': lang === 'zh' ? '20%' : '15%' }">
                  {{ $t("message.construction.shortDescription") }}
                </p>
              </div>

              <button class="button" @click="goConstruction()">
                <p :style="{ 'margin-left': lang === 'zh' ? '17%' : '13%' }">
                  {{ $t("message.read-more") }}
                </p>

                <svg class="button-arrow" viewBox="0 8 25 25">
                  <path d="M0 15 L20 15 M20 15 L12 22 M20 15 L12 8"></path>
                </svg>
              </button>
            </div>
            <div v-else class="image-3" @mouseover="blur"></div>
          </div>
        </div>
      </div>
    </div>

    <News />

    <div class="block2">
      <div class="background">
        <div class="block2-row-1">
          <div class="column-1">
            <div class="ID" style="color: white">
              <span>03</span>
            </div>

            <svg class="title-underline" style="stroke: white">
              <line x1="0" y1="0" x2="150" y2="0" />
            </svg>

            <div class="title" style="color: white">
              <span>{{ $t("message.about-title") }}</span>
            </div>
          </div>
          <div class="column-2">
            <p class="content-head f-f-raleway">
              {{ $t("message.about-title") }}
            </p>
          </div>
          <div class="column-3"></div>
        </div>

        <div class="content">
          <p style="margin-top: 2rem; height: 17rem">
            {{ $t("message.about") }}
          </p>
        </div>
        <div class="button" @click="goto('about-us')">
          Find out more
          <img
            class="arrow"
            src="../../assets/imgs/home/Arrow Right.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <Gallary />

    <div class="background-6" v-if="this.$store.state.showContectUs">
      <div class="title-2">
        <p>CONTACT US</p>
      </div>

      <gap :height="70" />

      <div class="input">
        <div class="email">
          <input
            type="text"
            v-model="email"
            @focus="clearContent('email')"
            @blur="resetContent('email')"
          />
        </div>

        <gap :height="63" />
        <div class="text">
          <textarea
            st
            type="input"
            v-model="text"
            @focus="clearContent('text')"
            @blur="resetContent('text')"
          ></textarea>
        </div>
      </div>

      <div class="button-5-1">
        <button class="button-5-2">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
//import anime from "animejs/lib/anime.es.js";
//import { Carousel, Slide } from "vue-carousel";
import { mapState } from "vuex";
import Gallary from "./components/Gallary.vue";
import News from "./components/News.vue";
//import Cultures from "./components/Cultures.vue";

export default {
  name: "Home",
  data: function () {
    return {
      content: "",
      selected: 1,
      mouseover: false,
      email: "Your email address…",
      text: "  Leave your message here…",
      years: [1992, 1997, 2006, 2008, 2010, 2017, 2020],
      box5special: true,
      box5LeftSpecial: true,
      box5counter: 0,
      yearIndex: 0,
      scrollTop: 0,
      index: 0,
      index2010: 0,
      block4status: 0,
      newsPageCount: 2,
      showContact: this.$store.state.showContectUs,
      //moveLeft: null,
      //moveRight: null,
      gallery: null,
      box1: null,
      year: null,
      box2: null,
      box3: null,
      box4: null,
      box5: null,
      box6: null,
      box7: null,
    };
  },

  components: {
    Gallary,
    News,
    //Cultures,
  },

  computed: {
    userStyle() {
      return {};
    },

    ...mapState(["lang"]),
  },

  watch: {
    lang(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateDom();
      }
    },
  },

  created() {},

  mounted() {
    //window.addEventListener("resize", this.resizeTrigger);
    //console.log(document.height);
    //this.moveLeft = this.$refs.moveLeft;
    //this.moveRight = this.$refs.moveRight;
    this.gallery = this.$refs.gallery;
    this.box1 = this.$refs.box1;
    this.box2 = this.$refs.box2;
    this.box3 = this.$refs.box3;
    this.box4 = this.$refs.box4;
    this.box5 = this.$refs.box5;
    this.box6 = this.$refs.box6;
    this.box7 = this.$refs.box7;
    this.sentorini = this.$refs.sentorini;
    this.bedok = this.$refs.bedok;

    this.year = this.$refs.year;
  },

  methods: {
    goLeft: function () {
      if (this.block4status > 0) {
        this.block4status--;
      }
    },

    goRight: function () {
      if (this.block4status < this.newsPageCount - 1) {
        this.block4status++;
      }
    },

    goto(where) {
      this.$router.push("/" + where);
    },

    blur: function () {
      this.mouseover = true;
    },

    clear: function () {
      this.mouseover = false;
    },

    goRealEstate: function () {
      this.$router.push("/real-estate");
    },

    goConstruction: function () {
      this.$router.push("/construction");
    },

    consultation: function () {
      this.selected = 1;
    },
    realestate: function () {
      this.selected = 2;
    },
    construction: function () {
      this.selected = 3;
    },

    clearContent: function (content) {
      if (content === "email" && this.email === "Your email address…") {
        this.email = null;
      } else if (
        content === "text" &&
        this.text === "  Leave your message here…"
      ) {
        this.text = null;
      }
    },

    resetContent: function (content) {
      if (this.email === "") {
        this.email = null;
      }

      if (this.text === "") {
        this.text = null;
      }

      if (content === "email" && this.email === null) {
        this.email = "Your email address…";
      }

      if (content === "text" && this.text === null) {
        this.text = "  Leave your message here…";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap");
@font-face {
  font-family: "Avenir";
  src: url("../../assets/custom-font/Avenir Book.ttf");
}
@mixin styling($unit-size) {
  .home {
    width: 100%;
    //min-height: 100%;
    //padding: 14rem 14rem 0 14rem;

    .fade-enter-active {
      transition: opacity 0.3s;
      transition-delay: 200ms;
    }
    .fade-leave-active {
      transition: opacity 0.3s;
      transition-delay: 100ms;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .block1 {
      padding: 70 * $unit-size 101 * $unit-size 0 100 * $unit-size;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      //background-color: red;
    }

    .ID {
      margin-top: 100 * $unit-size;
      height: 36 * $unit-size;
      width: 33 * $unit-size;
      text-align: left;
      color: #4a9ef2;
      letter-spacing: 1.12 * $unit-size;
      //background-color: red;

      font: PT Sans;
      font-size: 28 * $unit-size;
      line-height: 36 * $unit-size;
      font-weight: 700;
    }

    .title-underline {
      margin-top: 11.31 * $unit-size;
      fill: transparent;
      stroke: rgba(113, 113, 113, 1);
      stroke-width: 3px;
      stroke-linejoin: miter;
      stroke-linecap: butt;
      stroke-miterlimit: 4;
      shape-rendering: auto;
      width: 103.14 * $unit-size;
      height: 3px;
      //background-color: red;
      //left: 49 * $unit-size;
    }

    .title {
      margin-left: 49 * $unit-size;
      margin-top: 9.69 * $unit-size;
      text-align: left;

      font: normal normal Open Sans;
      font-weight: 600;
      font-size: 9 * $unit-size;
      line-height: 12 * $unit-size;
      letter-spacing: 0.4 * $unit-size;
      color: rgba(113, 113, 113, 1);
    }

    .container-1-left {
      display: flex;
      flex-direction: column;
      width: (46+9+338) * $unit-size;
      //min-width: 55rem;

      .block-1-message {
        font-family: Helvetica;
        font-size: 11 * $unit-size;
        white-space: pre-line;
        line-height: 23 * $unit-size;
      }

      .subtitle-s {
        display: flex;
        flex-direction: column;
        //width: 50rem;
        margin-top: 69.5 * $unit-size;

        .subtitle {
          width: 393 * $unit-size;
          display: flex;
          flex-direction: row;

          &:hover {
            color: var(--unnamed-color-000000);
          }

          //margin-left: 5rem;

          text-align: left;

          .small-icon {
            //margin-top: 4rem;

            width: 48 * $unit-size;
            height: 48 * $unit-size;
            opacity: 1;
            fill: transparent;
            stroke: rgba(59, 125, 216, 1);
            stroke-width: 1px;
            stroke-linejoin: miter;
            stroke-linecap: butt;
            stroke-miterlimit: 4;
            shape-rendering: auto;
          }

          span {
            font-family: Raleway;
            font-weight: 800;
            font-size: $unit-size * 28;
            line-height: $unit-size * 33;
            margin-left: $unit-size * 9;
            margin-top: $unit-size * 9;
            letter-spacing: $unit-size * 0.22;
            white-space: nowrap;
          }
        }

        text-align: left;

        color: rgba(227, 227, 227, 1);
      }
    }

    .container-1-right {
      display: flex;
      flex-direction: column;
      width: $unit-size * 748;
      //background-color: red;
      //padding-top: $unit-size * 35;
      height: 467 * $unit-size;
      //margin-top: $unit-size * 35;
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      right: 101 * $unit-size;

      .content {
        display: flex;
        flex-direction: column;
        position: relative;

        height: 100%;

        line-height: 20 * $unit-size;

        p {
          margin-left: auto;
          margin-right: auto;
          margin-top: 10 * $unit-size;
          text-align: center;
          font-size: 15 * $unit-size;
          color: white;

          width: 50%;
        }

        .button {
          margin-left: auto;
          margin-right: auto;

          display: flex;
          flex-direction: row;
          justify-content: space-around;

          background-color: rgba(74, 145, 242, 1);
          margin-top: 50 * $unit-size;
          width: 22 * 6 * $unit-size;
          height: 5.4 * 6 * $unit-size;
          border: 1px solid var(--unnamed-color-000000);

          border-radius: 4px;
          opacity: 1;
          //font: 2.2rem/3.2rem Source Sans Pro;
          line-height: 5.4 * 6 * $unit-size;

          p {
            margin-left: 10%;
            width: 40%;
            margin-top: 0;
            white-space: nowrap;
            font-size: 10 * $unit-size;
            line-height: 5.4 * 6 * $unit-size;
            height: 5.4 * 6 * $unit-size;
          }

          .button-arrow {
            margin-top: 6%;
            margin-left: 10%;
            width: 30%;
            //margin-bottom: 90%;
            height: 100%;
            stroke: white;
            stroke-width: 1px;
          }
        }

        .image-1-blur {
          position: relative;
          display: flex;
          flex-direction: column;

          width: auto;

          height: 100%;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url("../../assets/imgs/home/F_01.jpg");
          background-color: white;
          //filter: blur(12px);

          background-position: bottom;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        .image-2-blur {
          //position: relative;
          //display: flex;

          width: auto;

          height: 100%;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("../../assets/imgs/home/realestate.jpg");
          background-color: white;
          //filter: blur(12px);

          background-position: bottom;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        .image-3-blur {
          position: relative;
          display: flex;
          flex-direction: column;

          width: auto;

          height: 100%;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("../../assets/imgs/home/construction.jpg");
          background-color: white;
          //filter: blur(12px);

          background-position: bottom;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        .image-1 {
          width: auto;

          height: 100%;

          background-image: url("../../assets/imgs/home/F_01.jpg");
          background-color: white;

          background-position: bottom;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        .image-2 {
          width: auto;

          height: 100%;
          background-image: url("../../assets/imgs/home/realestate.jpg");
          background-color: white;

          background-position: bottom;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        .image-3 {
          width: 100%;

          height: 100%;
          background-image: url("../../assets/imgs/home/construction.jpg");
          background-color: white;

          background-position: bottom;
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        font-size: 2rem;
      }
    }

    .block2 {
      //padding: 17.6rem 0 0 0;
      height: 772 * $unit-size;

      .background {
        .block2-row-1 {
          display: flex;
          flex-flow: row;

          .column-1 {
            width: 30%;
            flex-flow: column;

            .ID {
              margin-left: 100 * $unit-size;
              margin-top: 77 * $unit-size;
            }

            .title-underline {
              margin-left: 100 * $unit-size;
            }

            .title {
              margin-left: 149 * $unit-size;
            }
          }

          .column-2 {
            width: 40%;

            .content-head {
              color: var(--unnamed-color-000000);
              text-align: center;
              font: Raleway;
              font-size: 22 * $unit-size;
              line-height: 26 * $unit-size;
              letter-spacing: 0.88 * $unit-size;
              font-weight: 800;
              position: relative;
              margin-top: 102 * $unit-size;
            }
          }

          .column-3 {
            width: 30%;
          }
        }

        //padding: 14rem 14rem 0 14rem;
        display: flex;
        flex-direction: column;

        height: 100%;
        background-image: url("../../assets/imgs/home/Group_920@2x.png"),
          url("../../assets/imgs/home/bady-abbas-MDgRcuGYu58-unsplas@2x.png");
        background-color: white;
        background-position: bottom, center;
        background-repeat: no-repeat;
        background-size: 574 * $unit-size 106.65 * $unit-size, 100% 100%;
        //position: relative;
      }

      .img {
        margin-top: 40rem;
        margin-left: 0rem;

        width: 50.5rem;
        height: 38.5rem;
        transform: scale(0.7);
        transform-origin: bottom left;
        transition: 1s;
      }

      .content {
        margin-left: auto;
        margin-right: auto;
        white-space: pre-line;

        margin-top: 0;
        line-height: 35 * $unit-size;

        width: 754 * $unit-size;
        height: 39%;

        color: var(--unnamed-color-000000);
        text-align: center;
        font: normal normal normal Source Sans Pro;
        font-size: 16 * $unit-size;
        letter-spacing: 0.32 * $unit-size;

        color: #000000;
        opacity: 1;
        .read-more {
          &:hover {
            border-bottom: solid;
          }
        }
      }
      .button {
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20 * $unit-size;

        width: 154 * $unit-size;
        height: 40 * $unit-size;
        line-height: 40 * $unit-size;
        text-align: center;
        color: black;
        border: solid black 1px;
        border-radius: 4px;
        font-size: 14 * $unit-size;
        font-family: Helvetica;
        .arrow {
          margin-left: 12 * $unit-size;
          width: 19.73 * $unit-size;
          height: 15.62 * $unit-size;
        }
      }
    }

    .background-6 {
      background-color: hsla(205, 37%, 87%, 1);
      height: 45.1rem;
      padding: 7.3rem 0 7.3rem 0;

      .title-2 {
        text-align: center;
        color: var(--unnamed-color-000000);
        font: normal normal bold 4.1rem/4.9rem Raleway;
        letter-spacing: 0.164rem;
        color: rgba(0, 0, 0, 1);
      }

      .input {
        .email {
          display: flex;
          justify-content: space-around;

          input[type="text"] {
            width: 59.2rem;
            border: none;
            border-bottom: 1px solid rgba(112, 112, 112, 1);
            color: var(--unnamed-color-c6c6c6);
            text-align: left;
            font: normal normal normal 2.2rem/4.5rem Source Sans Pro;
            letter-spacing: 0.088rem;
            color: rgba(155, 155, 155, 1);
            background-color: hsla(205, 37%, 87%, 1);
          }
        }

        .text {
          display: flex;
          justify-content: space-around;

          textarea {
            width: 59.2rem;
            height: 15rem;
            max-height: 15rem;
            background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
            border: 1px solid rgba(112, 112, 112, 1);
            border-radius: 3px;
            color: var(--unnamed-color-c6c6c6);
            text-align: left;
            font: normal normal normal 2.2rem/4.5rem Source Sans Pro;
            letter-spacing: 0.88px;
            color: rgba(155, 155, 155, 1);
          }
        }
      }

      .button-5-1 {
        display: flex;
        justify-content: space-around;
        margin-top: 4rem;

        .button-5-2 {
          text-align: center;
          font: normal normal normal 2.2rem/3.2rem Source Sans Pro;
          letter-spacing: 0.088rem;
          width: 13.2rem;
          height: 5.4rem;
          border: none;

          background: rgba(74, 145, 242, 1) 0% 0% no-repeat padding-box;
          color: white;
          border-radius: 4px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .container-1 {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
      }
    }
  }
}

@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>
