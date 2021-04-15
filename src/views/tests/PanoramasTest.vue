<template>
  <div class="panoramas">
    <div id="viewer" class="photosphere"></div>
  </div>
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
export default {
  data() {
    return {};
  },

  created() {},

  mounted() {
    this.showPhoto();
  },

  methods: {
    showPhoto: function () {
      const viewer = new Viewer({
        container: document.querySelector("#viewer"),
        panorama: require("../../assets/imgs/home/DJI_0556.jpg"),
        navbar: [
          "autorotate",
          "zoom",
          //"move",
          "caption",
          "fullscreen",
          "download",
          "caption",
        ],
      });

      viewer;
    },
  },
};
</script>

<style lang="scss" scoped>
$unit-size: 100vw/1366;
.panoramas {
  height: 100vh;
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