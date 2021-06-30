<template>
  <div>
    <div class="about">
      <div class="title f-f-sans">
        <p>{{ $t("message.about-title") }}</p>
      </div>
      <div class="content">
        <p class="f-f-sans">
          {{ $t("message.about-full") }}
        </p>
      </div>
    </div>
    <Gallary />
    <Cultures />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Gallary from "./components/Gallary.vue";
import Cultures from "./components/Cultures.vue";
export default {
  data: function () {
    return {
      content: "",
    };
  },

  components: {
    Gallary,
    Cultures,
  },

  computed: {
    userStyle() {
      return {};
    },

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
    this.content = require("../../assets/homepage/content.json");
  },
};
</script>

<style lang="scss" scoped>
@mixin styling($unit-size) {
  .about {
    padding: 106 * $unit-size 0 0 0;
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
        font-size: 22 * $unit-size;
        line-height: 26 * $unit-size;
        font-weight: 700;
      }
    }
    .content {
      p {
        //background-color: red;
        white-space: pre-line;
        padding: 0 0 250 * $unit-size 0;
        margin-top: 27 * $unit-size;
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
        line-height: 30 * $unit-size;
        width: 1166 * $unit-size;
        font-size: 16 * $unit-size;
      }
    }
  }
}
@media (max-width: 100vw) {
  @include styling($unit-size: 100vw/1366);
}
</style>