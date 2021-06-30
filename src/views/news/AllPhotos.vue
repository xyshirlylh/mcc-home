<template>
  <div class="all-photos">
    <div class="button-back f-f-sans" @click="back">
      <div class="arrow-back">
        <img src="../../assets/imgs/news/arrow-left.png" alt="" />
      </div>
      <div class="div"><p>Back</p></div>
    </div>
    <div class="gallery" ref="gallery">
      <img
        class="item1"
        v-for="(item, index) in allPhotos"
        :key="index"
        :src="
          require('../../assets/news/' + newsID + '/' + (index + 1) + '.jpg')
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
import MagicGrid from "magic-grid";
export default {
  name: "all-photos",
  data: function () {
    return {
      newsID: "",
      content: "",
      allPhotos: [],
    };
  },

  created() {
    const urlParams = new URLSearchParams(window.location.search);
    //this.currentUrl = window.location.href;
    //console.log(this.currentUrl);
    this.newsID = urlParams.get("id");
    this.content = this.$i18n.t("message.news." + this.newsID);
    this.allPhotos = new Array(this.content.photocount);
  },

  mounted() {
    this.loadImgs();
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loadImgs();
      }
    };
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    },

    loadImgs: function () {
      let magicGrid = new MagicGrid({
        container: this.$refs["gallery"],
        items: this.content.photocount,
        animate: true,
        static: false,
        gutter: 20,
        maxColumns: 2,

        useMin: true,
      });

      magicGrid.listen();
    },
  },
};
</script>

<style lang="scss">
@mixin styling($unit-size) {
  .all-photos {
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
    padding: (118px) 0 (167px) 0;

    .gallery {
      width: 70vw;

      margin-left: auto;
      margin-right: auto;

      img {
        width: 500px;
        height: 300px;
        object-fit: cover;

        display: flex;
        justify-content: center;
        align-items: center;

        //width: 500px;
        background-color: white;
      }

      //img {
      //  width: 100%;
      // }

      .item1 {
        //height: 46.2rem;
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>