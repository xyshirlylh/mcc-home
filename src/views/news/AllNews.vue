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
    <div class="gallery">
      <div class="item1">
        <div class="image">
          <img src="../../assets/imgs/news/all-news/2.jpg" alt="" />
        </div>
        <div class="content">
          <p class="title">
            MCC Singapore Was Invited to Participate in the International Built
            Environment Week Exhibition
          </p>
          <p class="text">
            9月3日至6日，新加坡海湾金沙会展中心举办了以 “引领建筑业转型”
            为主题的2019年新加坡国际建筑环境周（IBEW）
          </p>
        </div>
      </div>
      <div class="item2" @click="goNews">
        <div class="image">
          <img src="../../assets/imgs/news/all-news/1.jpg" alt="" />
        </div>
        <div class="content">
          <p>Big Title</p>
        </div>
      </div>
      <div class="item3">
        <div class="image">
          <img src="../../assets/imgs/news/all-news/5.jpg" alt="" />
        </div>
        <div class="content">
          <p>Big Title</p>
        </div>
      </div>
      <div class="item4">
        <div class="image">
          <img src="../../assets/imgs/news/all-news/6.jpg" alt="" />
        </div>
        <div class="content">
          <p>Big Title</p>
        </div>
      </div>
      <div class="item5">
        <div class="image">
          <img src="../../assets/imgs/news/all-news/4.jpg" alt="" />
        </div>
        <div class="content">
          <p>Big Title</p>
        </div>
      </div>
      <div class="item6">
        <div class="image">
          <img src="../../assets/imgs/news/all-news/3.jpg" alt="" />
        </div>
        <div class="content">
          <p>Big Title</p>
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
    return {};
  },

  mounted() {
    let magicGrid = new MagicGrid({
      container: ".gallery",
      items: 10,
      animate: true,
      static: true,
      gutter: 20,
      maxColumns: 5,

      useMin: true,
    });

    magicGrid.listen();
  },

  methods: {
    back: function () {
      this.$router.go(-1);
    },

    goNews: function () {
      this.$router.push("/news");
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
      width: 670px;
      height: 420px;
      background-color: white;
      display: flex;
      flex-direction: column;

      border-radius: 8px;
      .image {
        width: 100%;
        height: 71.5%;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        width: 99.7%;
        height: 28.5%;
        border: 1px;
        border-top: 0;
        border-style: solid;
        border-radius: 0%;

        p {
          width: 70%;
          height: 47px;
          margin-top: 36px;

          text-align: left;
          margin-left: 100px;
          font: normal normal 600 40px/47px Raleway;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
    }

    .item1 {
      height: 860px;
      .title {
        margin-top: 50px;
        margin-left: 100px;
        font-size: 25px;
        line-height: 25px;
      }
      .text {
        width: 360px;
        height: 470px;
        margin-left: 100px;
        white-space: normal;
        margin-top: 40px;
        font: normal normal normal 20px/30px Arial;
      }
    }
  }
}
</style>