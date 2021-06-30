<template>
  <div class="container-instruction">
    <p class="f-s-14 l-h-20 f-c-17">MCC Singapore</p>

    <p class="f-c-1 f-s-24 f-f-raleway font-bold f-c-1">Construction</p>

    <gap :height="14" />

    <p class="f-c-1 f-s-14 l-h-24 f-f-sans">
      China Jingye Engineering Corporation Limited (Singapore Branch) is a
      registered contractor with the Building and Construction Authority of
      Singapore (BCA) and the only State-owned enterprise in Singapore to obtain
      the highest A1 grade in both General Building (CW01) and Civil Engineering
      (CW02) categories. The company is influential in Singapore with excellent
      performance in both public and private construction sectors. The company
      is the main contractor for Singapore’s iconic landmark projects –
      Universal Studios Singapore and Maritime Experiential Museum, Resorts
      World, Sentosa. <br/><br/>
      
      China Jingye Construction Engineering (Singapore) Private
      Limited has extensive experience in the private civil engineering sector.
      As the general main contractor for MCC Land, it is responsible for most of
      its property development projects. The company has been part of MCC
      Singapore since its inception in 1996. It has accumulated comprehensive
      engineering performance and experiences in turnkey, specialised
      contracting, supply and subcontracting works.
    </p>

    <gap :height="20" />

    <img src="@/assets/imgs/construction/Screenshot_2020-08-17_at_15073@2x.png" />

    <gap :height="17" />

    <p
      class="f-f-raleway f-s-12 f-c-18 font-bold cursor-pointer l-h-14"
      @click="showAllProject"
    >
      See all projects
    </p>
  </div>
</template>
<script>
export default {
  name: "Instruction",
  methods: {
    showAllProject() {
      this.$emit("show-all");
    },
  },
};
</script>
<style lang="scss" scoped>
.container-instruction {
  img {
    width: 28.8rem;
  }
}
</style>