<template>
  <div class="container-awards">
    <div class="f-s-16 f-f-raleway font-bold l-h-19 f-c-1 section-title">Qualifications & Certificates</div>

    <ul class="flex-row flex-wrap justify-content-between">
      <template v-for="item in awards">
        <li :key="item.year" class="text-align-center flex-column position-relative">
          <p class="f-s-9 f-c-1 f-f-raleway l-h-12">{{ item.year }}</p>
          <p class="f-s-10 f-c-1 f-f-raleway l-h-12 title">{{ item.title }}</p>
          <p class="f-s-10 f-c-1 f-f-raleway l-h-12 font-bold flex-1" v-html="item.subtitle"></p>
          <p class="f-s-10 f-c-1 f-f-raleway l-h-12 font-bold">AWARD</p>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Awards",
  data() {
    return {
      awards: [
        {year: '2010', title: 'BCA Green Mark', subtitle: 'Gold Plus'},
        {year: '2011', title: 'BCA Green Mark', subtitle: 'Platinum'},
        {year: '2014', title: 'BCI Singapore', subtitle: 'Top 10 <br/> Developers'},
        {year: '2015', title: 'BCI Singapore', subtitle: 'Top 10 <br/> Developers'},
        {year: '2016', title: 'BCI Singapore', subtitle: 'Top 10 <br/> Developers'},
        {year: '2017', title: 'BCI Singapore', subtitle: 'Top 10 <br/> Developers'},
        {year: '2018', title: 'BCA Green Mark', subtitle: 'Gold Plus'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .container-awards {
    padding-top: 2rem;
    
    .section-title { letter-spacing: 0.48px; padding-bottom: 1.35rem;  border-bottom: 1px solid rgba(112, 112, 112, .5); }

    ul {
      li {
        width: 28%;
        height: 8.83rem;
        margin-top: 2.5rem;
        background-image: url("../../../assets/imgs/home/房产叶子.svg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center top;

        .title { padding: .4rem 0; }
        p:last-child { position: absolute; bottom: 2rem; left: 36%; }
      }
    }
  }
</style>