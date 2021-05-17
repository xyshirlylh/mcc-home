<template>
  <div class="history">
    <div class="gallery">
      <div class="gallery-title">
        <p>{{ $t("message.history-title") }}</p>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <p class="year">{{ this.content.history[7].year }}</p>
            <p class="title">{{ this.content.history[7].title }}</p>
          </div>
          <p class="content">{{ this.content.history[7].content }}</p>
          <p class="content" style="margin-top: 60%">
            {{ this.content.history[7].content2 }}
          </p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/热带雨林.jpg" alt="" />
          <img src="../../assets/imgs/home/hotel.png" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <p class="year">{{ this.content.history[6].year }}</p>
            <p class="title">{{ this.content.history[6].title }}</p>
          </div>
          <p class="content">{{ this.content.history[6].content }}</p>
        </div>
        <div class="pic flex-row">
          <img src="../../assets/imgs/home/dangga heights.jpg" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <p class="year">{{ this.content.history[5].year }}</p>
            <p class="title">{{ this.content.history[5].title2 }}</p>
          </div>
          <p class="content">{{ this.content.history[5].content }}</p>
          <p class="content" style="margin-top: 40%">
            {{ this.content.history[5].content2 }}
          </p>
        </div>
        <div class="pic flex-row">
          <img
            style="margin-top: 20%"
            src="../../assets/imgs/home/poiz + bedok south.jpg"
            alt=""
          />
          <img
            style="margin-top: 10%"
            src="../../assets/imgs/home/sentorini + canopy.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <div class="flex-row">
              <p class="year">{{ this.content.history[4].year }}</p>
              <p class="title">{{ this.content.history[4].title }}</p>
            </div>
          </div>

          <p class="content">{{ this.content.history[4].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/sentosa zong+jubu.png" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <p class="year">{{ this.content.history[2].year }}</p>
            <p class="title">{{ this.content.history[2].title }}</p>
          </div>
          <p class="content">{{ this.content.history[2].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/组屋.jpg" alt="" />
        </div>
      </div>

      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <p class="year">{{ this.content.history[1].year }}</p>
            <p class="title">{{ this.content.history[1].title }}</p>
          </div>
          <p class="content">{{ this.content.history[1].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/singapore-expo.jpg" alt="" />
        </div>
      </div>
      <div class="row-1 flex-row">
        <div class="text flex-column">
          <div class="flex-row">
            <p class="year">{{ this.content.history[0].year }}</p>
            <p class="title">{{ this.content.history[0].title }}</p>
          </div>
          <p class="content">{{ this.content.history[0].content }}</p>
        </div>
        <div class="pic">
          <img src="../../assets/imgs/home/Artboard_1@2x.png" alt="" />
        </div>
      </div>
    </div>
    <gap :height="0" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      content: "",
    };
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

  created() {
    this.content = this.$i18n.t("message");
    this.updateDom();
  },
  methods: {
    updateDom: function () {
      this.content = this.$i18n.t("message");
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  margin-top: 20rem;
  .gallery {
    padding: 0 100vw/1366 * 145 0 100vw/1366 * 162;
  }

  .gallery-title {
    font-size: 100vw/1366 * 21;
    color: rgba(0, 0, 0, 1);
    font-weight: 700;
    line-height: 25 * 100vw/1366;

    p {
      text-align: center;
    }
  }
  .row-1 {
    min-height: 100vw/1920 * 500;
    //padding-left: 100px;
    padding-bottom: 100px;
    border-bottom: solid rgba(214, 214, 214, 1) 2px;

    .text {
      width: 40%;
      padding: 10% 10% 0 0;

      .year {
        //background-color: green;
        width: fit-content;
        font-size: 100vw/1366 * 35;
        color: rgba(31, 118, 173, 1);
        font-weight: 700;
        line-height: 4rem;
      }
      .title {
        //background-color: red;
        width: fit-content;
        white-space: nowrap;
        margin-left: 100vw/1366 * 15;
        font-size: 100vw/1366 * 25;
        line-height: 4rem;
      }
      .content {
        margin-top: 100vw/1366 * 7;
        font-size: 100vw/1366 * 18;
        line-height: 4rem;
      }
    }
    .pic {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      width: 60%;
      img {
        //height: 100%;
      }
    }
  }
}
</style>