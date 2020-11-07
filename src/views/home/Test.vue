<template>
  <section>
    <div class="container container-1 flex-column">
      <gap :height="213" />

      <div class="section-title f-s-30">01 <br/> What we do</div>

      <div class="flex-row flex-1 section-content">
        <ul>
          <li>Consultation</li>
          <li>Real Estate</li>
          <li>Construction</li>
        </ul>

        <div class="flex-1 right">
          <img src="../../assets/imgs/home/realestate.png" width="100%">

          <gap :height="42" />

          <p style="border-bottom: 1px solid #4A91F2"></p>

          <gap :height="32" />

          <div class="f-s-20 f-f-sans article">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </div>

          <gap :height="64" />

          <p class="f-s-22 btn-read-more">Read more</p>
        </div>
      </div>

      <gap :height="60" />
    </div>
    <div class="container container-2">Container 2</div>
    <div class="container container-3">Container 3</div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss" type="text/scss">
  section {
    padding: 0 14rem 0 14rem;
    background-color: red;
    min-height: 100%;

    .container {
      font-size: 30px;
    }

    .container-1 {
      background-color: yellow;
      // height: 100vh;

      .section-title {
        height: 15rem;
        background-color: purple;
      }

      .section-content {
        .right {

          .article {
            line-height: 2.8rem;
            letter-spacing: 0.08rem;
            background-color: blue;
          }

          .btn-read-more {
            width: 22rem; 
            height: 5.4rem;
            border: 1px solid #000000; 
            text-align: center; 
            line-height: 5.4rem;
          }
        }
      }

      @media screen and (max-width: 767px) {
        .section-content {
          display: flex;
          flex-direction: column;
        }
      }

      ul {
        width: 71.8rem;

        li {
          position: relative;
          height: 9.5rem;
          line-height: 9.5rem;
          margin-bottom: 3.1rem;
          font-size: 6.1rem;
          padding-left: 11.2rem;

          &::before {
            content: "";
            position: absolute;
            width: 9.5rem;
            height: 9.5rem;
            border: 1px solid #E3E3E3;
            border-radius: 4.75rem;
            left: 0;
          }
        }
      }
    }

    .container-2 {
      background-color: green;
      height: 100vh;
    }

    .container-3 {
      background-color: pink;
      height: 100vh;
    }
  }
</style>