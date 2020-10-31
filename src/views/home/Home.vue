<template>
  <div class="home">
    <div class="block1">
      <div class="ID">
        <p class="f-f-ptsans">01</p>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="150" y2="0" />
      </svg>

      <div class="title">
        <p>What we do</p>
      </div>

      <div>
        <div class="subtitle-s" style="text-align: center">
          <div class="subtitle" @mouseover="consultation()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 1"
                id="Ellipse_179"
                rx="4rem"
                ry="4rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.65rem"
                ry="0.65rem"
                cx="4.75rem"
                cy="4.75rem"
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
                rx="4rem"
                ry="4rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.65rem"
                ry="0.65rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>
            </svg>
            <router-link v-if="selected === 2" to="/real-estate">
              <span style="color: black">Real Estate</span>
            </router-link>
            <span v-else>Real Estate</span>
          </div>

          <div class="subtitle" @mouseover="construction()">
            <svg class="small-icon">
              <ellipse
                style="stroke: #e3e3e3"
                v-if="selected === 3"
                id="Ellipse_179"
                rx="4rem"
                ry="4rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>

              <ellipse
                id="Ellipse_179"
                rx="0.65rem"
                ry="0.65rem"
                cx="4.75rem"
                cy="4.75rem"
              ></ellipse>
            </svg>
            <router-link v-if="selected === 3" to="/construction">
              <span style="color: black">Construction</span>
            </router-link>
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
        <line x1="0" y1="0" x2="150" y2="0" />
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

        <img
          class="img"
          ref="img-2"
          src="../../assets/imgs/home/MCC_BUILDING.png"
          alt=""
        />
      </div>
    </div>

    <gap :height="200" />

    <div class="background-3">
      <div class="block3">
        <div class="gallery-3">
          <div class="column-1">
            <div class="ID">
              <span>03</span>
            </div>

            <svg class="title-underline">
              <line x1="0" y1="0" x2="150" y2="0" />
            </svg>

            <div class="title">
              <span>MCC history</span>
            </div>
          </div>
          <div class="column-2">
            <img
              @click="goLeft()"
              type="button"
              src="../../assets/imgs/home/arrow left.svg"
              alt=""
            />
            <img
              @click="goRight()"
              type="button"
              src="../../assets/imgs/home/arrow right.svg"
              alt=""
            />
          </div>
        </div>

        <div class="gallery">
          <div class="year">
            {{ years[yearIndex] }}
          </div>

          <div class="box-1">
            <svg class="block-3-cercle" style="fill: black; stroke: black">
              <ellipse
                id="Ellipse_178_o"
                rx="16"
                ry="16"
                cx="17"
                cy="17"
              ></ellipse>
            </svg>

            <svg class="block-3-line">
              <line x1="0" y1="0" x2="0" y2="1800" />
            </svg>

            <div class="year-small">
              <p>{{ years[yearIndex] }}</p>
            </div>

            <div class="subtitle">
              <p>Mcc first launched</p>
            </div>

            <div class="content">
              <p>Labour Subcontracting & Professional Subcontracting</p>
            </div>
          </div>
          <div class="box-2">
            <svg class="block-3-cercle">
              <ellipse
                id="Ellipse_178_o"
                rx="16"
                ry="16"
                cx="17"
                cy="17"
              ></ellipse>
            </svg>

            <svg class="block-3-line">
              <line x1="0" y1="0" x2="0" y2="1800" />
            </svg>
            <div class="year-small">
              <p>{{ years[yearIndex + 1] }}</p>
            </div>
          </div>
          <div class="box-3">
            <svg class="block-3-cercle">
              <ellipse
                id="Ellipse_178_o"
                rx="16"
                ry="16"
                cx="17"
                cy="17"
              ></ellipse>
            </svg>

            <svg class="block-3-line">
              <line x1="0" y1="0" x2="0" y2="1800" />
            </svg>
            <div class="year-small">
              <p>{{ years[yearIndex + 2] }}</p>
            </div>
          </div>
          <div class="box-4">
            <svg class="block-3-cercle">
              <ellipse
                id="Ellipse_178_o"
                rx="16"
                ry="16"
                cx="17"
                cy="17"
              ></ellipse>
            </svg>

            <svg class="block-3-line">
              <line x1="0" y1="0" x2="0" y2="1800" />
            </svg>
            <div class="year-small">
              <p>{{ years[yearIndex + 3] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="background-4">
      <gap :height="166" />
      <div class="ID">
        <span>04</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="150" y2="0" />
      </svg>

      <div class="title">
        <span>MCC news</span>
      </div>

      <div class="left">
        <img type="button" src="../../assets/imgs/home/arrow left.svg" alt="" />
      </div>

      <div class="block4">
        <div class="head">
          <p>Featured news of MCC Singapore</p>
          <div class="button-1">
            <button>View more</button>
          </div>
        </div>

        <div class="gallery">
          <div class="box-1">
            <img src="../../assets/imgs/home/ID6Z2A5209@2x.png" alt="" />
            <div class="background-white">
              <h1>Title 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
            </div>
          </div>
          <div class="box-2">
            <img src="../../assets/imgs/home/ID4@2x.png" alt="" />
            <div class="background-white">
              <h1>Title 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
            </div>
          </div>
          <div class="box-3">
            <img src="../../assets/imgs/home/ID3@2x.png" alt="" />
            <div class="background-white">
              <h1>Title 3</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img
          type="button"
          src="../../assets/imgs/home/arrow right.svg"
          alt=""
        />
      </div>
    </div>

    <div class="block5">
      <div class="ID">
        <span>05</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="150" y2="0" />
      </svg>

      <div class="title">
        <span>our culture</span>
      </div>

      <div class="row-1">
        <div class="col-1">
          <div class="title">
            <p>Mission</p>
          </div>
          <div class="f-f-sans f-s-25 content-5">
            <p>Transforming lives, inspiring society</p>
          </div>
        </div>
        <div class="col-2">
          <div class="title">
            <p>Vision</p>
          </div>
          <div class="content-5">
            <p>To be a global leading urbanisation enterprise</p>
          </div>
        </div>
        <div class="col-3">
          <div class="title">
            <p>Culture</p>
          </div>
          <div class="content-5">
            <p>
              Make a difference. Creativity. Cooperation. Sincerity.
              Goal-oriented
            </p>
          </div>
        </div>
      </div>
      <gap :height="500" />

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
            type="input"
            v-model="text"
            @focus="clearContent('text')"
            @blur="resetContent('text')"
          ></textarea>
        </div>
      </div>

      <gap :height="40" />
      <div class="button-1">
        <button class="button-2">Confirm</button>
      </div>

      <gap :height="69" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      selected: 1,
      email: "Your email address…",
      text: "Leave your message here…",
      years: [1997, 2005, 2008, 2010, 1997, 2005, 2008, 2010],
      yearIndex: 0,
      scrollTop: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollTrigger);
    //console.log(document.height);
  },

  destroy() {
    window.removeEventListener("scroll", this.scrollTrigger);
  },

  methods: {
    scrollTrigger: function () {
      this.scrollTop = window.scrollY;

      if (this.scrollTop > document.body.scrollHeight * 0.13) {
        this.$refs["img-2"].style.transform = "scale(1.5)";
        console.log(this.$refs["img-2"].style);
      } else {
        this.$refs["img-2"].style.transform = "scale(1)";
      }
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
        this.text === "Leave your message here…"
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
        this.text = "Leave your message here…";
      }
    },

    goLeft: function () {
      this.yearIndex = this.yearIndex - 1;
      if (this.yearIndex < 0) {
        this.yearIndex = 3;
      }
    },
    goRight: function () {
      this.yearIndex = this.yearIndex + 1;
      if (this.yearIndex > 3) {
        this.yearIndex = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  //min-height: 100%;
  //padding: 14rem 14rem 0 14rem;

  .block1 {
    padding: 21.3rem 7.291vw 0 7.291vw;

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
    top: 21.3rem;
    left: 14rem;
    width: 4.8rem;
    height: 4.8rem;
    text-align: left;
    color: #bfd6f6;
    letter-spacing: 1.64px;
    line-height: 5.3rem;
    font: 4.1rem/5.3rem PT Sans;
    font-weight: 700;
  }

  .title-underline {
    margin-top: 0.694vh;
    fill: transparent;
    stroke: rgba(113, 113, 113, 1);
    stroke-width: 2px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
    width: 16rem;
    height: 2rem;
    left: 14rem;
  }

  .title {
    margin-left: 7rem;
    text-align: left;

    font-size: 2.6rem;
    letter-spacing: 1.04px;
    color: rgba(113, 113, 113, 1);
  }

  .subtitle-s {
    .subtitle {
      &:hover {
        color: var(--unnamed-color-000000);
      }

      margin-left: 5rem;

      text-align: left;
    }
    span {
      margin-left: 0.885vw;
    }
    float: left;
    max-width: 50%;
    margin-top: 1rem;
    text-align: left;
    font: normal normal normal 6.1rem/8.6rem Source Sans Pro;
    letter-spacing: 2.44px;
    color: rgba(227, 227, 227, 1);
  }

  .content {
    margin-top: 3.9rem;
    float: right;
    max-width: 50%;
    .image {
      max-width: 100%;
      height: auto;
    }

    font: 2rem/2.8rem Source Sans Pro;

    text-align: left;
  }

  .small-icon {
    width: 9.5rem;
    height: 9.5rem;
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
    width: 22rem;
    height: 5.4rem;
    border: 1px solid var(--unnamed-color-000000);
    border: 1px solid #000000;
    border-radius: 4px;
    opacity: 1;
    font: 2.2rem/3.2rem Source Sans Pro;
  }

  .block2 {
    .ID {
      margin-left: 14rem;
    }
    .title-underline {
      margin-left: 14rem;
    }
    .title {
      margin-left: 18.375rem;
    }
    //padding: 14rem 14rem 0 14rem;
    display: flex;
    flex-direction: column;
    .background {
      background-image: url("../../assets/imgs/home/blue-blend-watercolour-waterco@2x.png");
      background-color: white;

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      //position: relative;
    }
    .img {
      margin-top: 62.3rem;
      margin-left: 9rem;

      max-width: 25%;
      max-height: 50%;
      transform: scale(1);
      transition: 1s;
    }

    .content {
      .content-head {
        color: var(--unnamed-color-000000);
        text-align: left;
        font: normal normal normal 3vw Source Sans Pro;
        letter-spacing: 1.8px;
        line-height: 1.8;
        color: #000000;
        opacity: 1;
      }
      float: right;
      width: 55%;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 1.7vw Source Sans Pro;
      line-height: 1.8;
      letter-spacing: 0.88px;
      color: #000000;
      opacity: 1;
    }
  }

  .background-3 {
    background-image: url("../../assets/imgs/home/MCC_BUILDING@2x.png");
    background-color: white;
    height: 100vh;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 30%;
    //margin-bottom: 66px;
    .block3 {
      padding: 14rem 14rem 0 14rem;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;

      .block-3-cercle {
        position: absolute;
        left: 0px;
        bottom: 60vh;
        width: 34px;
        height: 34px;
        fill: transparent;
        stroke: rgba(19, 129, 206, 1);
        stroke-width: 2px;
      }

      .block-3-line {
        position: absolute;
        left: 16px;
        bottom: 0;
        width: 34px;
        height: 60vh;
        stroke: rgba(198, 198, 198, 1);
        stroke-width: 3;
      }

      .gallery {
        float: left;
        position: relative;
        height: 100%;
        width: 100%;
        .year {
          float: left;
          max-width: 30%;
          color: var(--unnamed-color-1381ce);
          text-align: left;
          font: normal normal bold 10vw Wigwag;
          letter-spacing: 5.08px;
          color: rgba(19, 129, 206, 1);
          margin-top: 40vh;
        }
        .year-small {
          position: absolute;
          left: 50px;
          bottom: 58vh;
          color: var(--unnamed-color-1381ce);
          text-align: left;
          font: normal normal bold 2vw Source Sans Pro;
          letter-spacing: 1.48px;
          color: rgba(19, 129, 206, 1);
        }
        .box-1 {
          position: absolute;
          bottom: 0;
          left: 30%;
          height: 100px;
          width: 30%;
          float: left;

          .subtitle {
            position: absolute;
            left: 4px;
            bottom: 52vh;
            color: var(--unnamed-color-000000);
            text-align: left;
            font: normal normal 1.5vw Avenir;
            //font-size: 1.5vw;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
          }
          .content {
            font: normal normal normal 1vw Avenir;
            position: absolute;
            left: 55px;
            bottom: 45vh;
          }
        }
        .box-2 {
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 100px;
          width: 30%;
        }
        .box-3 {
          position: absolute;
          bottom: 0;
          left: 70%;
          height: 100px;
          width: 30%;
        }
        .box-4 {
          position: absolute;
          bottom: 0;
          left: 90%;
          height: 100px;
          width: 5%;
        }
      }

      .column-1 {
        float: left;
        max-width: 30%;
        width: 30%;
      }
      .column-2 {
        button {
          margin-top: 15%;
          margin-left: 5%;
        }
        float: right;
        max-width: 30%;
        width: 30%;
        padding: 0 0 0 15%;
        img {
          margin-left: 10%;
        }
      }
    }
  }

  .background-4 {
    background: rgba(68, 139, 217, 0.15) 0% 0% no-repeat padding-box;
    //opacity: 0.15;
    height: 133.8rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //position: relative;

    .left {
      margin-top: 50rem;
      img {
        margin-left: 30%;
        max-width: 30%;
      }

      float: left;
      width: 10%;
      max-width: 10%;
    }

    .right {
      margin-top: 50rem;
      img {
        margin-left: 30%;
        max-width: 30%;
      }
      float: left;
      width: 10%;
      max-width: 10%;
    }

    .block4 {
      float: left;
      width: 80%;
      max-width: 80%;
      display: flex;
      flex-direction: column;
      height: 10rem;
      .gallery {
        font: normal normal normal 1.6rem/2.2rem Source Sans Pro;
        margin-top: 3.5rem;
        .background-white {
          padding: 10%;
          background-color: white;
        }
        text-align: center;
        img {
          width: 100%;
          height: auto;
        }
        .box-1 {
          float: left;
          max-width: 30%;
          max-height: 50%;
        }
        .box-2 {
          margin-left: 5%;
          float: left;
          max-width: 30%;
        }
        .box-3 {
          margin-left: 5%;
          float: left;
          max-width: 30%;
        }
      }
    }

    .ID {
      margin-left: 14rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal bold 4.1rem/5.3rem PT Sans;
      letter-spacing: 1.64px;
      color: rgba(0, 0, 0, 1);
      opacity: 1;
    }
    .title-underline {
      margin-left: 14rem;
      opacity: 1;
    }
    .title {
      margin-left: 21rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 2.6rem/3.7rem Source Sans Pro;
      letter-spacing: 1.04px;
      color: #000000;
      opacity: 1;
    }

    .head {
      .button-1 {
        float: right;
        max-width: 20%;

        button {
          text-align: center;
          font: normal normal normal 2.2rem/3.2rem Source Sans Pro;
          letter-spacing: 0.88px;
          width: 13.2rem;
          height: 5.4rem;
          border: none;
          width: 22rem;
          height: 5.4rem;

          background: rgba(74, 145, 242, 0) 0% 0% no-repeat padding-box;
          color: black;
          border: 1px solid #000000;
          border-radius: 4px;
        }
      }

      max-width: 100%;
      p {
        float: left;
        max-width: 80%;
      }

      margin-top: 10rem;
      max-height: 6.4rem;

      height: 6.4rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 4.5rem/6.4rem Source Sans Pro;
      letter-spacing: 1.8px;
      color: #000000;
    }
  }

  .block5 {
    padding: 14rem 14rem 0 14rem;
    display: flex;
    flex-direction: column;
    height: 154.6rem;

    .title-2 {
      text-align: center;
      color: var(--unnamed-color-000000);
      font: normal normal bold 4.1rem/5.3rem PT Sans;
      letter-spacing: 0.164rem;
      color: rgba(0, 0, 0, 1);
    }
    .input {
      margin-left: auto;
      margin-right: auto;
      .email {
        input[type="text"] {
          width: 59.2rem;
          border: none;
          border-bottom: 1px solid rgba(112, 112, 112, 1);
          color: var(--unnamed-color-c6c6c6);
          text-align: left;
          font: normal normal normal 2.2rem/4.5rem Source Sans Pro;
          letter-spacing: 0.088rem;
          color: rgba(198, 198, 198, 1);
        }
      }
      .text {
        textarea {
          width: 59.2rem;
          height: 148px;
          background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
          border: 1px solid rgba(112, 112, 112, 1);
          border-radius: 3px;
          color: var(--unnamed-color-c6c6c6);
          text-align: left;
          font: normal normal normal 2.2rem/4.5rem Source Sans Pro;
          letter-spacing: 0.88px;
          color: rgba(198, 198, 198, 1);
        }
      }
    }
    .button-1 {
      margin-left: auto;
      margin-right: auto;
      .button-2 {
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

    .row-1 {
      height: 35rem;
      .title {
        color: var(--unnamed-color-000000);

        text-align: left;
        font: 3.5rem/6.4rem Open Sans;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
      }
      .content-5 {
        margin-top: 5rem;
        text-align: left;
        width: 35rem;

        font-size: 3rem;

        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
      }
      .col-1 {
        float: left;
        max-width: 20%;
        background-image: url("../../assets/imgs/home/mission.png");
        height: 30rem;
        background-color: white;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: 60%;
      }
      .col-2 {
        float: left;
        max-width: 20%;
        margin-left: 20%;
        background-image: url("../../assets/imgs/home/vision.png");
        height: 30rem;
        background-color: white;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: 60%;
      }
      .col-3 {
        float: left;
        max-width: 20%;
        margin-left: 20%;
        background-image: url("../../assets/imgs/home/culture.png");
        height: 30rem;
        background-color: white;
        background-position: 100% 70%;
        background-repeat: no-repeat;
        background-size: 60%;
      }
    }
  }
}
</style>
