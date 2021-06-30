<template>
  <div class="container-awards">
    <div class="f-s-16 f-f-raleway font-bold l-h-19 f-c-1 section-title">Qualified Construction</div>

    <ul class="flex-row flex-wrap justify-content-between">
      <template v-for="item in awards">
        <li :key="item.year" class="text-align-center flex-column position-relative">
          <div class="position-relative"><span class="position-absolute">{{ item.level }}</span></div>
          <p class="f-s-10 l-h-15 f-c-1 f-f-raleway">{{ item.title }}<br/>{{ item.code }}</p>
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
        {level: 'A1', title: 'General Building', code: 'CW01'},
        {level: 'A1', title: 'Civil Engineering', code: 'CW01'},
        {level: 'L6', title: 'Electrical Engineering', code: 'ME05'},
        {level: 'L6', title: 'Plumbing & Sanitary Works', code: 'ME12'},
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
      margin-top: 2.5rem;

      li {
        width: 12.6rem;
        height: 12.4rem;
        margin-bottom: 5rem;
      
        div {
          height: 8.9rem;
          background-image: url("../../../assets/imgs/home/房产叶子.svg");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center top;

          span { 
            top: 1.7rem;
            left: 4.7rem;
            font-family: "Times New Roman", Times, serif;
            font-weight: 700;
            font-size: 2.7rem;
            text-align: center;
          }
        }
        p { margin-top: .9rem; }
      }
    }
  }
</style>