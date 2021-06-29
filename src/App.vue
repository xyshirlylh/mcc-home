<template>
  <div id="app">
    <Header v-if="showHeaderFooter" />

    <gap :height="66" />
    
    <router-view />

    <Footer v-if="showHeaderFooter" />
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
  data() {
    return {
      showHeaderFooter: true,
    };
  },
  created() {
    this.showHeaderFooter = (window.location.href.indexOf('salary-caculator') > -1 || window.location.href.indexOf('sales-on-site') > -1) ? false : true;
  },
  methods: {

  }
};
</script>
<style lang="scss">
@import "./assets/styles/common.scss";
@import "./assets/iconfont/iconfont.css";
@import "./assets/custom-font/custom-font.css";
</style>
