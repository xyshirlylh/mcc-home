<template>
  <div class="all-news">
    <div class="button-back f-f-sans" @click="back">
      <div class="arrow-back">
        <img src="../../assets/imgs/news/arrow-left.png" alt="" />
      </div>
      <div class="div"><p>Back</p></div>
    </div>
    <div class="head">
      <p>Latest News</p>
    </div>
    <div class="box"></div>
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
            {{ require("../../assets/news/" + item + "/content.json").title }}
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
.all-news {
  padding: (100vw/1920 * 126) 0 (100vw/1920 * 119) 0;
  .button-back {
    display: flex;
    flex-direction: row;
    padding: 0.2% 0 0 0;
    margin-left: 100vw/1920 * 42;
    height: 100vw/1920 * 34;
    width: 100vw/1920 * 98.45;
    border-radius: 2.5rem;
    text-align: center;

    .arrow-back {
      height: 100vw/1920 * 13.71;
      width: 100vw/1920 * 9;
      margin-left: 20%;
      margin-right: 10%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:hover {
      background-color: rgba(229, 229, 229, 1);
    }
    font: normal normal normal 2rem/2.8rem Source Sans Pro;
  }

  .head {
    margin-left: 100vw/1920 * 268;
    margin-bottom: 100vw/1920 * 12.5;
    font: normal normal bold 2.8rem/5rem Noto Sans;
    text-align: left;
    p {
      width: 17.1rem;
      height: 3.8rem;
    }
  }
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
      height: 20rem;
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
        width: 30%;
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
        font: normal normal  2.5rem Raleway; 
        p {
          //background-color: green;
          width: 90%;
          line-height:4rem;
        }
      }
    }
  }
}
</style>