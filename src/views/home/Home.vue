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
        <div class="gallery">
          <div class="column-1">
            <div class="ID">
              <span>03</span>
            </div>

            <svg class="title-underline">
              <line x1="0" y1="0" x2="100" y2="0" />
            </svg>

            <div class="title">
              <span>MCC history</span>
            </div>
          </div>
          <div class="column-2">
            <button @click="goLeft()">left</button>
            <button @click="goRight()">right</button>
          </div>
        </div>
        <div class="year">
          {{ years[yearIndex] }}
        </div>
      </div>
    </div>

    <div class="background-4">
      <gap :height="166" />
      <div class="ID">
        <span>04</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="100" y2="0" />
      </svg>

      <div class="title">
        <span>MCC news</span>
      </div>

      <div class="left">
        <button>left</button>
      </div>

      <div class="block4">
        <div class="head">
          <p>Featured news of MCC Singapore</p>
          <div class="button-1">
            <button>View more</button>
          </div>
        </div>

        <gap :height="100" />

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

        <gap :height="209" />
      </div>
      <div class="right">
        <button>right</button>
      </div>
    </div>

    <div class="block5">
      <div class="ID">
        <span>05</span>
      </div>

      <svg class="title-underline">
        <line x1="0" y1="0" x2="100" y2="0" />
      </svg>

      <div class="title">
        <span>our culture</span>
      </div>

      <gap :height="80" />

      <div class="row-1">
        <div class="col-1">
          <div class="title">
            <p>Mission</p>
          </div>
          <div class="content">
            <p>Transforming lives, inspiring society</p>
          </div>
        </div>
        <div class="col-2">
          <div class="title">
            <p>Vision</p>
          </div>
          <div class="content">
            <p>To be a global leading urbanisation enterprise</p>
          </div>
        </div>
        <div class="col-3">
          <div class="title">
            <p>Culture</p>
          </div>
          <div class="content">
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
      years: [1997, 2005, 2008, 2010],
      yearIndex: 0,
      scrollTop: 0,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.scrollTrigger)
    
  },

  destroy() {
  window.removeEventListener('scroll', this.scrollTrigger)
},

  methods: {
    scrollTrigger: function(){
      this.scrollTop = window.scrollY
      if (
        this.scrollTop > 1000 
      ) {
        this.$refs["img-2"].style.transform='scale(1.5)';
        console.log(this.$refs["img-2"].style)
      } else {
        this.$refs["img-2"].style.transform='scale(1)';
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
  min-height: 100%;
  //padding: 14rem 14rem 0 14rem;

  .block1 {
    padding: 14rem 14rem 0 14rem;
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
    width: 200px;
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
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      //position: relative;
    }
    .img {
      margin-top: 30%;
      margin-left: 90px;

      max-width: 25%;
      max-height: 50%;
      transform: scale(1);
      transition: 1s
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

  .background-3 {
    background-image: url("../../assets/imgs/home/MCC_BUILDING@2x.png");
    background-color: white;
    height: 100vh;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 30%;
    margin-bottom: 66px;
    .block3 {
      padding: 14rem 14rem 0 14rem;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      .year {
        top: 3023px;
        left: 134px;
        width: 328px;
        height: 127px;
        color: var(--unnamed-color-1381ce);
        text-align: left;
        font: normal normal bold 127px/152px Wigwag;
        letter-spacing: 5.08px;
        color: rgba(19, 129, 206, 1);
        margin-top: 50vh;
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
      }
    }
  }

  .background-4 {
    background: rgba(68, 139, 217, 0.15) 0% 0% no-repeat padding-box;
    //opacity: 0.15;
    height: 130vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //position: relative;
    button {
      margin-left: 30%;
      margin-right: 30%;
    }

    .left {
      margin-top: 50vh;

      float: left;
      width: 10%;
      max-width: 10%;
    }

    .right {
      margin-top: 50vh;
      float: left;
      width: 10%;
      max-width: 10%;
    }

    .block4 {
      margin-top: 14rem;
      float: left;
      width: 80%;
      max-width: 80%;
      display: flex;
      flex-direction: column;
      height: 100vh;
      .gallery {
        margin-top: 3%;
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
      font: normal normal bold 41px/53px PT Sans;
      letter-spacing: 1.64px;
      color: rgba(0, 0, 0, 1);
      opacity: 1;
    }
    .title-underline {
      margin-left: 14rem;
      border: 1px solid var(--unnamed-color-000000);
      border: 1px solid #000000;
      opacity: 1;
    }
    .title {
      margin-left: 14rem;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 26px/37px Source Sans Pro;
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
          font: normal normal normal 22px/32px Source Sans Pro;
          letter-spacing: 0.88px;
          width: 132px;
          height: 54px;
          border: none;
          width: 220px;
          height: 54px;

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

      height: 64px;
      color: var(--unnamed-color-000000);
      text-align: left;
      font: normal normal normal 45px/64px Source Sans Pro;
      letter-spacing: 1.8px;
      color: #000000;
    }
  }

  .block5 {
    padding: 14rem 14rem 0 14rem;
    display: flex;
    flex-direction: column;
    height: 200vh;
    .title {
      color: var(--unnamed-color-717171);
      text-align: left;
      font: normal normal normal 26px/37px Source Sans Pro;
      letter-spacing: 1.04px;
      color: rgba(113, 113, 113, 1);
    }
    .title-2 {
      text-align: center;
      color: var(--unnamed-color-000000);
      font: normal normal bold 41px/53px PT Sans;
      letter-spacing: 1.64px;
      color: rgba(0, 0, 0, 1);
    }
    .input {
      margin-left: auto;
      margin-right: auto;
      .email {
        input[type="text"] {
          width: 592px;
          border: none;
          border-bottom: 1px solid rgba(112, 112, 112, 1);
          color: var(--unnamed-color-c6c6c6);
          text-align: left;
          font: normal normal normal 22px/45px Source Sans Pro;
          letter-spacing: 0.88px;
          color: rgba(198, 198, 198, 1);
        }
      }
      .text {
        textarea {
          width: 592px;
          height: 148px;
          background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
          border: 1px solid rgba(112, 112, 112, 1);
          border-radius: 3px;
          color: var(--unnamed-color-c6c6c6);
          text-align: left;
          font: normal normal normal 22px/45px Source Sans Pro;
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
        font: normal normal normal 22px/32px Source Sans Pro;
        letter-spacing: 0.88px;
        width: 132px;
        height: 54px;
        border: none;

        background: rgba(74, 145, 242, 1) 0% 0% no-repeat padding-box;
        color: white;
        border-radius: 4px;
      }
    }

    .row-1 {
      .title {
        color: var(--unnamed-color-000000);
        text-align: center;
        font: normal normal bold 35px/64px Open Sans;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
      }
      .content {
        margin-top: 50px;
        color: var(--unnamed-color-000000);
        text-align: left;
        font: normal normal normal 28px/50px Open Sans;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
      }
      .col-1 {
        float: left;
        width: 33%;
        max-width: 33%;
      }
      .col-2 {
        float: left;
        width: 33%;
        max-width: 33%;
      }
      .col-3 {
        float: left;
        width: 33%;
        max-width: 33%;
      }
    }
  }
}
</style>
