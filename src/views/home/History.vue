<template>
  <div class="history">
    <div class="gallery">
      <div class="gallery-title">
        <p>MCC History</p>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[0].year }}</p>
          <p class="title">{{ this.content.history[0].title }}</p>
          <p class="content">{{ this.content.history[0].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/Artboard_1@2x.png" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[1].year }}</p>
          <p class="title">{{ this.content.history[1].title }}</p>
          <p class="content">{{ this.content.history[1].content }}</p>
        </div>
        <div class="pic flex-row">
          <img src="../../assets/imgs/home/wooland checkpoint.jpg" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[2].year }}</p>
          <p class="title">{{ this.content.history[2].title }}</p>
          <p class="content">{{ this.content.history[2].content }}</p>
        </div>
        <div class="pic flex-row">
          <img src="../../assets/imgs/home/singapore-expo.jpg" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[3].year }}</p>
          <p class="title">{{ this.content.history[3].title }}</p>
          <p class="content">{{ this.content.history[3].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/组屋.jpg" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[4].year }}</p>
          <p class="title">{{ this.content.history[4].title }}</p>
          <p class="content">{{ this.content.history[4].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/sentosa zong+jubu.png" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[5].year }}</p>
          <p class="title">{{ this.content.history[5].title }}</p>
          <p class="content">{{ this.content.history[5].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/dangga heights.jpg" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[6].year }}</p>
          <p class="title">{{ this.content.history[6].title }}</p>
          <p class="content">{{ this.content.history[6].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/热带雨林.jpg" alt="" />
        </div>
      </div>
      <div class="row-1 flex-row">
        <div class="text flex-column">
          <p class="year">{{ this.content.history[7].year }}</p>
          <p class="title">{{ this.content.history[7].title }}</p>
          <p class="content">{{ this.content.history[7].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/hotel.png" alt="" />
        </div>
      </div>
    </div>
    <gap :height="0"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.content = require("../../assets/homepage/content.json");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.history {
  margin-top: 70px;
  .gallery-title {
    font-size: 5rem;
    color: rgba(31, 118, 173, 1);
    font-weight: 700;
    margin-left: 100px;
  }
  .row-1 {
    height: 100vw/1920 * 500;
    padding-left: 100px;
    padding-bottom: 100px;
    border-bottom: solid rgba(31, 118, 173, 1) 2px;

    .text {
      width: 40%;
      padding: 10% 10% 0 0;

      .year {
        font-size: 5rem;
        color: rgba(31, 118, 173, 1);
        font-weight: 700;
        line-height: 4rem;
      }
      .title {
        font-size: 4rem;
        line-height: 4rem;
      }
      .content {
        font-size: 2rem;
        line-height: 4rem;
      }
    }
    .pic {
      overflow: hidden;
      width: 60%;
      img {
        height: 100%;
      }
    }
  }
}
</style>