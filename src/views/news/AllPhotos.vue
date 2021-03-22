<template>
  <div class="all-photos">
    <div class="button-back f-f-sans" @click="back">
      <div class="arrow-back">
        <img src="../../assets/imgs/news/arrow-left.png" alt="" />
      </div>
      <div class="div"><p>Back</p></div>
    </div>
    <div class="gallery">
      <div class="item1" v-for="(item, index) in allPhotos" :key="index">
        <img
          :src="
            require('../../assets/news/' + newsID + '/' + (index + 1) + '.jpg')
          "
          alt=""
        />
      </div>
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
    this.content = require("../../assets/news/" +
      this.newsID +
      "/content.json");
    this.allPhotos = new Array(this.content.photocount);
  },

  mounted() {
    let magicGrid = new MagicGrid({
      container: ".gallery",
      items: 10,
      animate: true,
      static: true,
      gutter: 14,
      maxColumns: 5,

      useMin: true,
    });

    magicGrid.listen();
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.all-photos {
  padding: (100vw/1920 * 118) 0 (100vw/1920 * 167) 0;
  .button-back {
    display: flex;
    flex-direction: row;
    padding: 0.2% 0 0 0;
    margin-left: 100vw/1920 * 42;
    height: 100vw/1920 * 34;
    width: 100vw/1920 * 98.45;
    border-radius: 2.5rem;
    text-align: center;
    cursor: pointer;

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
  .gallery {
    width: 70vw;
    margin-left: auto;
    margin-right: auto;

    div {
      //width: 100vw/1920 * 554;
      //height: 39rem;
      width: 500px;
      background-color: antiquewhite;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }

    img {
      width: 100%;
      //height: 100%;
    }

    .item1 {
      //height: 46.2rem;
    }
  }
}
</style>