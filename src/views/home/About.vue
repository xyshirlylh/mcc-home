<template>
  <div class="about">
    <div class="title f-f-sans">
      <p>{{ $t("message.about-title") }}</p>
    </div>
    <div class="content">
      <p v-if="this.$store.state.lang === 'english'" class="f-f-sans">
        {{ $t("message.about-full") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      content: "",
    };
  },

  created() {
    this.content = require("../../assets/homepage/content.json");
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 70px 0 0 0;
  //height: 100vh;
  background-image: url("../../assets/imgs/home/Group_920@2x.png"),
    url("../../assets/imgs/home/bady-abbas-MDgRcuGYu58-unsplas@2x.png");
  background-color: white;
  background-position: bottom, center;
  background-repeat: no-repeat;
  background-size: 102.6rem 19.7rem, 100% 100%;
  .title {
    p {
      text-align: center;
      margin-top: 112px;
      font-size: 2.6rem;
      line-height: 4.5rem;
      font-weight: 700;
    }
  }
  .content {
    p {
      white-space: pre-line;
      padding: 0 0 30rem 0;
      text-align: justify;
      margin-left: auto;
      margin-right: auto;
      line-height: 4.5rem;
      width: 90rem;
      font-size: 2.2rem;
    }
  }
}
</style>