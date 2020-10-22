<template>
  <div id="app">
    <Header/>
    <router-view/>
<!--    <Footer/>-->
  </div>
</template>

<script>
  import Header from "./components/Header";
  // import Footer from "./components/Footer";
  export default {
    name: 'app',
    components: {
      Header,
      // Footer
    }
  }
</script>


<style lang="scss">
  @import "./assets/styles/common.scss";
  /*@import "assets/iconfont/style.css";*/
  /*@import "./assets/iconfont/iconfont.css";*/
  @import "./assets/custom-font/custom-font.css";
</style>
