<template>
  <div class="panoramas">
    <div id="viewer" class="photosphere"></div>
    <div class="buttons">
      <button @click="previousPhoto()">Previous</button>
      <button @click="nextPhoto()">Next</button>
    </div>
  </div>
</template>
 
<script>
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
export default {
  data() {
    return {
      viewer: null,
      currentPhotoIndex: 0,
      photos: [],
    };
  },

  created() {
    this.photos = [
      require("../../assets/imgs/home/DJI_0556.jpg"),
      require("../../assets/imgs/home/NP360_VIEW_SMALL.jpg"),
      //require("../../assets/imgs/home/NP_360_VIEW.jpg"),  //2021-04-19:XY 由于图片太大，暂时注释本行代码 
    ];
  },

  mounted() {
    this.showPhoto();
  },

  methods: {
    showPhoto: function () {
      this.viewer = new Viewer({
        container: document.querySelector("#viewer"),

        panorama: this.photos[this.currentPhotoIndex],
        navbar: [
          "autorotate",
          "zoom",
          //"move",
          "caption",
          "fullscreen",
          //"download",
          "caption",
        ],
      });
    },

    nextPhoto: function () {
      this.currentPhotoIndex += 1;

      if (this.viewer) {
        this.viewer.destroy();
      }
      this.$nextTick(() => {
        this.showPhoto();
      });
    },
    previousPhoto: function () {
      this.currentPhotoIndex -= 1;

      if (this.viewer) {
        this.viewer.destroy();
      }
      this.$nextTick(() => {
        this.showPhoto();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$unit-size: 100vw/1366;
.panoramas {
  height: 100vh;
  .buttons{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

/* the viewer container must have a defined size */
.photosphere {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  width: 16px * 70;
  height: 9px * 70;
}
</style>