<template>
  <div class="all-news">
    <div class="gallery" ref="gallery">
      <div
        class="item"
        v-for="(item, index) in this.allNews"
        :key="index"
        @click="goNews(item)"
      >
        <div class="image">
          <img :src="require('../../assets/news/' + item + '/1.jpg')" />
        </div>
        <div class="content">
          <p class="title">
            {{ $t("message.news." + item + ".title") }}
          </p>
          <!--
            <p class="text">
            9月3日至6日，新加坡海湾金沙会展中心举办了以 “引领建筑业转型”
            为主题的2019年新加坡国际建筑环境周（IBEW）
          </p>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MagicGrid from "magic-grid";
export default {
  name: "all-news",
  data: function () {
    return {
      allNews: [],
    };
  },

  created() {
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
  },

  mounted() {
    let magicGrid = new MagicGrid({
      container: this.$refs["gallery"],
      items: this.allNews.length,
      animate: false,
      static: false,
      gutter: 20,
      maxColumns: 1,

      useMin: true,
    });

    magicGrid.listen();
  },

  methods: {
    back: function () {
      this.$router.go(-1);
    },

    goNews: function (id) {
      this.$router.push("/news/?id=" + id);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@mixin styling($unit-size) {
  .all-news {
    padding: (50px) 0 (100vw/1920 * 119) 0;

    .box {
      width: 100vw/1920 * 1360;
      height: 100vw/1920 * 52.5;
      margin-left: 100vw/1920 * 270;
      border-top: 1px;
      border-style: solid;
    }

    .gallery {
      width: 73vw;
      margin-left: auto;
      margin-right: auto;

      div {
        width: 100rem;
        height: 100 * $unit-size;
        //background-color: red;
        //background-color: white;
        //border: solid rgba(188, 188, 188, 1);
        display: flex;
        flex-direction: row;
        cursor: pointer;

        //border-radius: 8px;
      }

      .item {
        //height: 420px;
        border: solid rgba(188, 188, 188, 1);
        //border: solid black;
        border-width: 1px;
        //background-color: green;

        .image {
          width: 15%;
          img {
            //max-height: 45rem;
            //width: 100%;

            width: 100%;
            object-fit: cover;
          }
        }
        .content {
          width: 90%;
          padding-left: 5%;
          padding-top: 3%;
          display: flex;
          flex-direction: column;
          justify-content: left;

          //background-color: red;
          text-align: left;
          font: normal normal 2.5rem Raleway;
          font-size: 16 * $unit-size;
          line-height: 24 * $unit-size;
          p {
            //background-color: green;
            width: 90%;
          }
        }
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>