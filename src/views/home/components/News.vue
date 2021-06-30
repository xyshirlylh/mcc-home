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
        <div class="left">
          <img src="../../../assets/news/16/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="p-1">News & Events</div>
          <div class="p-2">
            LTA Awards Contract for Changi East Depot to MCC Singapore
          </div>
          <div class="p-3">28 May 2021</div>
          <div class="p-4">
            On 28 May 2021, MCC Singapore was awarded the design and
            construction contract for Changi East Depot. A project worth S$1.05
            billion awarded by the Land Transport Authority (LTA) of Singapore…
          </div>

          <div class="functions flex-row">
            <div class="icons flex-row">
              <div class="icon-1 icon">
                <img src="../../../assets/imgs/news/facebook.png" alt="" />
              </div>
              <div class="icon-2 icon">
                <img src="../../../assets/imgs/news/Wechat.png" alt="" />
              </div>
              <div class="icon-3 icon">
                <img src="../../../assets/imgs/news/tweeter.png" alt="" />
              </div>
            </div>
            <div class="button" @click="goNews(allNews[0])">View more</div>
          </div>
        </div>
      </div>
      <div class="news-2 news flex-row" @click="goNews(allNews[1])">
        <div class="left">
          <img src="../../../assets/imgs/home/no image.jpg" alt="" />
        </div>
        <div class="right">
          <div class="date">22 Nov 2021</div>
          <div class="title">
            MCC Singapore Celebrates Chinese New Year “A Letter Home” Wins First
            Prize in CEA Virtual New Year’s Gala
          </div>
        </div>
      </div>
      <div class="news-3 news flex-row" @click="goNews(allNews[2])">
        <div class="left">
          <img src="../../../assets/news/14/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="date">12 Feb 2021</div>
          <div class="title">
            Remote Video Inspection by Minister-Counselor Zhang Xumin of the
            Chinese Embassy in Singapore MCC Singapore’s Preventive Measures for
            COVID-19 and Resumption of Work
          </div>
        </div>
      </div>
    </div>

    <div class="row-3">
      <div class="button" @click="goAllNews()">
        More News
        <img
          class="arrow"
          src="../../../assets/imgs/home/Arrow Right.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      newsID: null,
      photos: [],
      allNews: null,
      news1: null,
      news2: null,
      news3: null,
      news4: null,
    };
  },

  created() {
    this.allNews = [
      "16",
      "15",
      "14",
      "13",
      "12",
      "2_10_2020",
      "7_9_2020",
      "20_8_2020",
      "23_6_2020",
      "19_5_2020",
      "11_4_2020",
      "6_4_2020",
      "27_3_2020",
      "13_1_2020",
      "11_10_2019",
      "30_9_2019",
    ];

    this.content = require("../../../assets/homepage/content.json");

    this.news1 = this.$i18n.t("message.news." + this.allNews[0]);
    this.news2 = this.$i18n.t("message.news." + this.allNews[1]);
    this.news3 = this.$i18n.t("message.news." + this.allNews[2]);
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

  methods: {
    updateDom: function () {
      this.news1 = this.$i18n.t("message.news." + this.allNews[0]);
      this.news2 = this.$i18n.t("message.news." + this.allNews[1]);
      this.news3 = this.$i18n.t("message.news." + this.allNews[2]);
      this.news4 = this.$i18n.t("message.news." + this.allNews[3]);
    },

    goNews: function (id) {
      this.$router.push("/news/?id=" + id);
      window.scrollTo(0, 0);
    },

    goAllNews: function () {
      this.$router.push("/all-news");
    },

    goto(where) {
      this.$router.push("/" + where);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin styling($unit-size) {
  .news-component {
    //background-color: yellow;
    padding-left: 100 * $unit-size;
    padding-right: 100 * $unit-size;
    padding-top: 49 * $unit-size;
    padding-bottom: 90 * $unit-size;
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
      font-family: Arial;

      .news-1 {
        width: 100%;
        height: 330 * $unit-size;

        .left {
          width: 486 * $unit-size;
          height: 100%;
          //background-color: red;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .right {
          padding-left: 60 * $unit-size;
          padding-right: 49 * $unit-size;
          width: 571 * $unit-size;
          height: 100%;
          background-color: rgba(234, 243, 255, 1);
          .p-1 {
            margin-top: 32 * $unit-size;
            font-size: 14 * $unit-size;
            height: 16 * $unit-size;
            line-height: 16 * $unit-size;
          }
          .p-2 {
            font-size: 20 * $unit-size;
            font-weight: 800;
            height: 22 * $unit-size;
            line-height: 22 * $unit-size;
            margin-top: 10 * $unit-size;
            letter-spacing: -0.4 * $unit-size;
          }
          .p-3 {
            margin-top: 9 * $unit-size;
            height: 14 * $unit-size;
            line-height: 14 * $unit-size;
            font-size: 12 * $unit-size;
          }
          .p-4 {
            font-size: 14 * $unit-size;
            line-height: 24 * $unit-size;
            width: 560 * $unit-size;
            margin-top: 20 * $unit-size;
          }
          .functions {
            justify-content: space-between;
            margin-top: 62 * $unit-size;
            img {
              width: 19.64 * $unit-size;
              height: 16.41 * $unit-size;
            }
            .icon {
              cursor: pointer;
            }
            .icon-2 {
              margin-left: 27.28 * $unit-size;
            }
            .icon-3 {
              margin-left: 27.28 * $unit-size;
            }
            .button {
              cursor: pointer;
              width: 120 * $unit-size;
              height: 40 * $unit-size;
              background-color: rgba(74, 145, 242, 1);
              border-radius: 4px;
              text-align: center;
              font-size: 16 * $unit-size;
              line-height: 40 * $unit-size;
              color: white;
            }
          }
        }
      }
      .news {
        cursor: pointer;
        width: 100%;
        height: 117 * $unit-size;

        margin-top: 6 * $unit-size;

        .left {
          width: 191 * $unit-size;
          height: 100%;
          //background-color: red;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .right {
          width: 975 * $unit-size;
          height: 100%;
          background-color: rgba(234, 243, 255, 1);
        }
        .date {
          width: 69 * $unit-size;
          height: 14 * $unit-size;
          color: #868686;
          margin-left: 893 * $unit-size;
          font-size: 12 * $unit-size;
          margin-top: 16 * $unit-size;
          white-space: nowrap;
        }
        .title {
          width: 800 * $unit-size;
          font-weight: 800;
          font-size: 18 * $unit-size;
          margin-left: 50 * $unit-size;
          margin-top: 5 * $unit-size;
          line-height: 28 * $unit-size;
        }
      }
    }
    .row-3 {
      height: 40 * $unit-size;
      //background-color: green;
      margin-top: 22 * $unit-size;
      .button {
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;

        width: 142 * $unit-size;
        height: 40 * $unit-size;
        line-height: 40 * $unit-size;
        text-align: center;
        color: white;
        background-color: rgba(74, 145, 242, 1);
        border-radius: 4px;
        font-size: 14 * $unit-size;
        .arrow {
          margin-left: 12 * $unit-size;
          width: 17.66 * $unit-size;
          height: 15.61 * $unit-size;
          filter: invert(100%) sepia(33%) saturate(2%) hue-rotate(161deg)
            brightness(111%) contrast(100%);
        }
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>
    
