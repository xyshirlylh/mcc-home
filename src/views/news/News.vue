<template>
  <div>
    <div class="block-1">
      <div class="button-back f-f-sans" @click="back">
        <div class="arrow-back">
          <img src="../../assets/imgs/news/arrow-left.png" alt="" />
        </div>
        <div class="div">
          <p>{{ $t("message.news.back") }}</p>
        </div>
      </div>
      <div class="gallery" v-if="hasPhoto === true">
        <div class="col-1">
          <div class="img-1">
            <img
              :src="require('../../assets/news/' + newsID + '/' + 1 + '.jpg')"
              alt=""
            />
          </div>
        </div>
        <div class="col-2">
          <div class="row-1">
            <div class="img-2">
              <img
                :src="require('../../assets/news/' + newsID + '/' + 2 + '.jpg')"
                alt=""
              />
            </div>
          </div>
          <div class="row-2">
            <div class="img-4">
              <img
                :src="require('../../assets/news/' + newsID + '/' + 3 + '.jpg')"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="button-all-photo" @click="goAllPhotos">
        <img src="../../assets/imgs/news/概览.png" alt="" />
        <p>{{ $t("message.news.show-all") }}</p>
      </div>
    </div>
    <div class="block-2">
      <div class="info">
        <p>{{ this.content.date }}</p>
      </div>
      <div class="title">
        {{ this.content.title }}
      </div>
      <div class="author" v-if="this.content.author === undefined">
        <p>{{ $t("message.news.author") }}</p>
      </div>
      <div class="author" v-else>
        <p>{{ this.content.author }}</p>
      </div>

      <div class="content">
        <p style="white-space: pre-line">{{ this.content.content }}</p>
      </div>
      <div class="functions">
        <div class="heart">
          <img src="../../assets/imgs/news/heart.png" alt="" />
        </div>
        <div class="likes">128 Likes</div>

        <ShareNetwork
          network="facebook"
          title="I'd like to share this news with you."
          :url="currentUrl"
        >
          <div class="facebook">
            <img src="../../assets/imgs/news/facebook.png" alt="" />
          </div>
        </ShareNetwork>
        <ShareNetwork
          network="twitter"
          title="I'd like to share this news with you."
          :url="currentUrl"
        >
          <div class="twitter">
            <img src="../../assets/imgs/news/tweeter.png" alt="" />
          </div>
        </ShareNetwork>
        <ShareNetwork
          network="weibo"
          title="I'd like to share this news with you."
          :url="currentUrl"
        >
          <div class="wechat">
            <img src="../../assets/imgs/news/Wechat.png" alt="" />
          </div>
        </ShareNetwork>
      </div>

      <div class="navigations">
        <div class="privious">
          <div
            class="button-left"
            @click="goto(previousID)"
            v-if="this.allNews.indexOf(this.newsID) !== 0"
          >
            <img src="../../assets/imgs/news/arrow-left.png" alt="" />
            <p>{{ $t("message.news.previous") }}</p>
          </div>
          <div
            class="title-left"
            v-if="this.allNews.indexOf(this.newsID) !== 0"
          >
            {{ $t("message.news." + this.previousID + ".title") }}
          </div>
          <div class="title-left" v-else></div>
        </div>
        <div class="next">
          <div
            class="button-right"
            @click="goto(nextID)"
            v-if="this.allNews.indexOf(this.newsID) !== allNews.length - 1"
          >
            <p>{{ $t("message.news.next") }}</p>
            <img src="../../assets/imgs/news/arrow-right.png" alt="" />
          </div>
          <div
            class="title-right"
            v-if="this.allNews.indexOf(this.newsID) !== allNews.length - 1"
          >
            {{ $t("message.news." + this.nextID + ".title") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      newsID: null,
      previousID: null,
      nextID: null,
      hasPhoto: true,
      allNews: null,
      popularNews: [],
      currentUrl: "",
      content: null,
    };
  },
  methods: {
    updateDom: function () {
      this.content = this.$i18n.t("message.news." + this.newsID);
    },

    back: function () {
      this.$router.push("/all-news");
    },

    goto(where) {
      this.$router.push("/news/?id=" + where);
      const urlParams = new URLSearchParams(window.location.search);
      //this.currentUrl = window.location.href;
      //console.log(this.currentUrl);
      this.newsID = urlParams.get("id");

      this.content = this.$i18n.t("message.news." + this.newsID);

      this.allNews = [
        "16",
        "15",
        "14",
        "2_10_2020",
        "7_9_2020",
        "20_8_2020",
        "23_6_2020",
        "19_5_2020",
        "11_4_2020",
        "6_4_2020",
        "27_3_2020",
        "13_1_2020",
        "3_11_2019",
        "11_10_2019",
        "30_9_2019",
      ];

      this.previousID = this.allNews[this.allNews.indexOf(this.newsID) - 1];
      this.nextID = this.allNews[this.allNews.indexOf(this.newsID) + 1];
    },

    goAllPhotos: function () {
      this.$router.push("/all-photos/?id=" + this.newsID);
    },
  },

  created() {
    const urlParams = new URLSearchParams(window.location.search);
    //this.currentUrl = window.location.href;
    //console.log(this.currentUrl);
    this.newsID = urlParams.get("id");

    this.content = this.$i18n.t("message.news." + this.newsID);

    this.allNews = [
      "16",
      "15",
      "14",
      "2_10_2020",
      "7_9_2020",
      "20_8_2020",
      "23_6_2020",
      "19_5_2020",
      "11_4_2020",
      "6_4_2020",
      "27_3_2020",
      "13_1_2020",
      "3_11_2019",
      "11_10_2019",
      "30_9_2019",
    ];

    this.previousID = this.allNews[this.allNews.indexOf(this.newsID) - 1];
    this.nextID = this.allNews[this.allNews.indexOf(this.newsID) + 1];
  },

  computed: {
    ...mapState(["lang"]),
  },

  watch: {
    lang(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateDom();
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "iconfont"; /* project id 2142682 */
  src: url("//at.alicdn.com/t/font_2142682_00fq9li0o918.eot");
  src: url("//at.alicdn.com/t/font_2142682_00fq9li0o918.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.woff") format("woff"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.svg#iconfont")
      format("svg");
}
@mixin styling($unit-size) {
  .block-1 {
    height: 100vw/1920 * (660+60-120.5);
    //background-color: red;
    max-width: 100vw;
    padding: (102.07px) 0 0 0;
    .button-back {
      position: fixed;
      left: 27 * $unit-size;
      top: 72 * $unit-size;
      height: 0 * $unit-size;
      display: flex;
      flex-direction: row;
      padding: 0 0 0 0;
      //margin-left: 100vw/1920 * 42;
      height: 21 * $unit-size;
      width: 100vw/1920 * 98.45;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;

      p {
        line-height: 21 * $unit-size;
      }

      .arrow-back {
        height: 100vw/1920 * 13.71;
        width: 100vw/1920 * 9;
        margin-left: 20%;
        margin-right: 10%;

        img {
          margin-top: -3 * $unit-size;
          width: 10.66 * $unit-size;
          height: 10.66 * $unit-size;
        }
      }

      &:hover {
        background-color: rgba(229, 229, 229, 1);
      }
      font: Source Sans Pro;
      font-size: 11 * $unit-size;
      line-height: 21 * $unit-size;
    }

    .gallery {
      display: flex;
      flex-direction: row;
      background-color: white;
      margin-left: auto;
      margin-right: auto;
      width: $unit-size * 680;
      height: $unit-size * 300;
      border-radius: 1rem;
      //border: solid black 1px;
      overflow: hidden;
      .col-1 {
        //width: 100vw/1920 * 565;

        height: 100vw/1366 * 300;

        img {
          //width: 100vw/1920 * 565;
          height: 100vw/1366 * 300;
          width: 100vw/1366 * 450;
          object-fit: cover;
        }
      }
      .col-2 {
        display: flex;
        flex-direction: column;
        margin-left: 100vw/1920 * 8;
        //background-color: red;
        //width: 100vw/1920 * 564;

        height: 100vw/1920 * 462;
        img {
          //width: 100%;
          //min-width: 100vw/1366 * 400;
          height: 100vw/1366 * 150;
          width: 100%;
          object-fit: cover;
        }
        .row-1 {
          display: flex;
          flex-direction: row;
          .img-2 {
            //margin-left: 100vw/1920 * 8;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .img-3 {
            margin-left: 100vw/1920 * 8;
            object-fit: cover;
          }
        }
        .row-2 {
          display: flex;
          flex-direction: row;
          margin-top: 100vw/1920 * 7;

          .img-5 {
            margin-left: 100vw/1920 * 8;
            object-fit: cover;
          }
        }
      }
    }

    .button-all-photo {
      height: 100vw/1920 * 34;
      width: 100vw/1920 * 141;
      margin-left: 100vw/1920 * 1290;
      margin-top: 100vw/1920 * 20;
      border: 1px solid rgba(0, 0, 0, 1);
      border-radius: 0.5rem;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      img {
        margin-top: 100vw/1920 * 2;
        width: 100vw/1920 * 30;
        height: 100vw/1920 * 30;
      }
      p {
        white-space: nowrap;
        margin-left: 100vw/1920 * 5;
        margin-top: 100vw/1920 * 7;
        width: 100vw/1920 * 101;
        font: Source Sans Pro;
        line-height: 100vw/1920 * 20;
        font-size: 100vw/1920 * 14;
      }
    }
  }

  .block-2 {
    //height: 100vw/1920 * (2055);
    width: 100vw- (100vw/1920 * 606) - (100vw/1920 * 583);
    padding: 0 (100vw/1920 * 606) 0 (100vw/1920 * 583);
    overflow: hidden;

    .info {
      width: 100vw/1920 * 248;
      height: 100vw/1920 * 22;
      font: normal normal 600 1.6rem/2.2rem Noto Sans;
      color: rgba(61, 61, 61, 1);
      white-space: nowrap;
    }
    .title {
      margin-top: 100vw/1920 * 16;
      width: 100vw/1920 * 731;
      //height: 100vw/1920 * 117;
      font-family: Noto Sans;
      font-weight: 800;
      font-size: 28 * $unit-size;
      line-height: 35 * $unit-size;
      overflow-wrap: break-word;
    }
    .author {
      margin-top: 100vw/1920 * 20;
      width: 100vw/1920 * 248;
      height: 100vw/1920 * 22;
      font-family: Noto Sans;

      font-size: 12 * $unit-size;
      line-height: 15 * $unit-size;
      white-space: nowrap;
    }

    .content {
      width: 100vw/1920 * 712;
      //height: 100vw/1920 * 1088;

      //overflow: hidden;
      p {
        width: 100vw/1920 * 712;
        //height: 100vw/1920 * 1088;

        font-family: Noto Sans;

        font-size: 12 * $unit-size;
        line-height: 18 * $unit-size;
        color: rgba(115, 115, 115, 1);
        text-align: justify;
      }

      margin-top: 100vw/1920 * 12;
    }

    .functions {
      display: flex;
      flex-direction: row;
      width: 100vw/1920 * 712;
      height: 100vw/1920 * 48;
      margin-top: 100vw/1920 * 80;
      margin-bottom: 100vw/1920 * 355;
      div {
        cursor: pointer;
      }
      .heart {
        height: 100vw/1920 * 48;
        width: 100vw/1920 * 48;
        img {
          height: auto;
          width: 100%;
        }
      }

      .likes {
        white-space: nowrap;
        margin-left: 100vw/1920 * 19;
        margin-top: 100vw/1920 * 12;
        font: Noto Sans;
        font-size: 11 * $unit-size;
        line-height: 17 * $unit-size;
      }
      .facebook {
        height: 100vw/1920 * 24;
        width: 100vw/1920 * 24;
        margin-left: 100vw/1920 * 460;
        margin-top: 100vw/1920 * 18;
        img {
          height: auto;
          width: 100%;
        }
      }
      .twitter {
        height: 100vw/1920 * 24;
        width: 100vw/1920 * 24;
        margin-left: 100vw/1920 * 31;
        margin-top: 100vw/1920 * 18;
        img {
          height: auto;
          width: 100%;
        }
      }
      .wechat {
        height: 100vw/1920 * 24;
        width: 100vw/1920 * 24;
        margin-left: 100vw/1920 * 25;
        margin-top: 100vw/1920 * 18;
        img {
          height: auto;
          width: 100%;
        }
      }
    }
    .navigations {
      font-family: Noto Sans;
      font-size: 12 * $unit-size;
      line-height: 12 * $unit-size;
      font-weight: 600;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 100 * $unit-size;
      width: 100%;
      // height: 100vw/1920 * 139;
      .button-left {
        display: flex;
        flex-direction: row;
        margin-bottom: 10 * $unit-size;
        img {
          width: 100vw/1920 * 12;
          height: 100vw/1920 * 12;

          margin-top: 0.5%;
        }
        p {
          margin-left: 100vw/1920 * 16;
        }
        cursor: pointer;
      }

      .button-right {
        display: flex;
        flex-direction: row;
        justify-content: right;
        cursor: pointer;
        margin-bottom: 10 * $unit-size;

        img {
          margin-left: 100vw/1920 * 16;
          width: 100vw/1920 * 12;
          height: 100vw/1920 * 12;
          margin-top: 0.5%;
        }
        p {
          margin-left: 100vw/1920 * 280;
          width: 5rem;
        }
      }
      .next {
        position: relative;
      }
      .title-left {
        //height: 100vw/1920 * 101;
        width: 200 * $unit-size;
        font-family: Noto Sans;
        font-size: 15 * $unit-size;
        line-height: 17 * $unit-size;
        font-weight: 600;

        //background-color: red;
      }
      .title-right {
        position: absolute;
        right: 0;
        text-align: right;
        font-family: Noto Sans;
        font-size: 15 * $unit-size;
        line-height: 17 * $unit-size;
        font-weight: 600;

        width: 200 * $unit-size;
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>