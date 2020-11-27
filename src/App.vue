<template>
  <div id="app">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
@import "./assets/styles/common.scss";
/*@import "assets/iconfont/style.css";*/
/*@import "./assets/iconfont/iconfont.css";*/
@import "./assets/custom-font/custom-font.css";
@font-face {
  font-family: "Avenir";
  src: local("Avenir"),
    url(./assets/custom-font/Avenir-Roman.otf) format("truetype");
}
</style>
