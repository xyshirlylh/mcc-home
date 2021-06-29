<template>
  <div class="container-instruction">
    <p class="f-s-14 l-h-20 f-c-17">MCC Land</p>

    <p class="f-c-1 f-s-24 f-f-raleway font-bold f-c-1">Property Development</p>

    <gap :height="13" />

    <p class="f-c-1 f-s-14 l-h-25 f-f-arial">
      In 2010, MCC Land (Singapore) Pte Ltd was established to undertake real
      estate development in Singapore and the surrounding regions for China
      Metallurgical Group Corporation. As the representative for the group’s
      joint-stock company, it is also responsible for the business activities in
      Singapore. The company has been ranked among the Top Ten Property
      Developers in Singapore for four consecutive years and has received Asia’s
      Top Influential Brand Award as well as Singapore Prestige Brand Award
      (SPBA) Global Brands Award. <br /><br />

      MCC Land (Singapore) Pte Ltd has developed 15 commercial and residential
      complexes, private condominiums, executive condominiums, and other real
      estate projects in Singapore through sole proprietorship, joint venture
      and management, with more than 8,000 residential units and a total
      saleable area of over 600,000 square meters, ‘transforming lives’ for
      millions of owners in a limited space.
    </p>

    <gap :height="33" />

    <img src="@/assets/imgs/home/sentorini + canopy.jpg" />

    <gap :height="17" />

    <p
      class="f-f-raleway f-s-12 f-c-18 font-bold cursor-pointer l-h-14"
      @click="showAllProject">
      See all projects
    </p>
  </div>
</template>
<script>
export default {
  name: "Instruction",
  methods: {
    showAllProject() {
      this.$emit('show-all');
    },
  },
};
</script>
<style lang="scss" scoped>
.container-instruction {
  img {
    width: 52.7rem;
  }
}
</style>