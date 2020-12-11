<template>
  <div class="real-estate">
    <section class="top-container">
      <div class="flex-2">
        <p class="f-s-25 f-c-10 subtitle">MCC Singapore</p>

        <p class="f-s-100 f-c-1 font-bold title">Construction</p>

        <gap :height="21"/>

        <p class="f-s-25 f-c-1 content">MCC Land develops and manages a wide range of properties including residential, commercial, office, and landmark projects, like Universal Studios Singapore and Resorts World. <br/><br/>They are mostly known for their high-rise luxury condominium projects.</p>

        <gap :height="89"/>

        <p class="f-s-24 f-c-11 font-bold cursor-pointer" @click="showAllProject">See all projects</p>

        <img src="../../assets/imgs/construction/Screenshot_2020-08-17_at_15073@2x.png" width="100%"/>
      </div>

      <gap :width="39"/>

      <ul class="flex-row flex-3 flex-wrap justify-content-between">
        <li v-for="(item, i) in numbers" :key="item.id">
          <div class="f-c-12 flex-row">
            <p class="f-s-129 f-f-rubik" :ref="'countRef' + i">{{item.count}}</p>
            <p class="f-s-99 flex-row align-items-center">{{item.unit}}</p>
          </div>

          <p class="f-c-13 f-f-sans f-s-25 label-comment" :style="{borderBottomWidth: item.count ? 1 : 0}">{{item.label}}</p>
        </li>
      </ul>
    </section>

    <gap :height="200"/>

    <section class="image-list">
      <label ref="titleOfSectionOne" class="f-s-36">Singapore construction projects</label>

      <ul ref="contentRef" class="flex-row flex-wrap justify-content-between">
        <template v-for="item in propertiesInSG">
          <li :key="item.id" :style="{width: boxWidth}" class="box-container" @click="enterProjectDetail()">
            <ProjectImageCard :info="item"/>
          </li>
        </template>
      </ul>
    </section>

    <gap :height="100"/>

    <section class="image-list">
      <label class="f-s-36">International construction projects</label>

      <ul class="flex-row flex-wrap">
        <template v-for="(item, i) in propertiesInInt">
          <li :key="item.id" :style="{marginRight: i%2===0 ? '6.4rem': 0, width: boxWidth}" class="box-container" @click="enterProjectDetail()">
            <ProjectImageCard :info="item"/>
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>

<script>
  import ProjectImageCard from "../../components/card/ProjectImageCard";
  import anime from "animejs";

  export default {
    name: "Construction",
    components: {ProjectImageCard},
    data() {
      return {
        boxWidth: 0,
        numbers: [
          {id: '5', count: '', unit: '', label: ''},
          {id: '0', count: '89.2', unit: '', label: 'Total No. of completed projects'},
          {id: '1', count: '56.1', unit: 'm', label: 'Total No. of turnkey contract'},
          {id: '2', count: '24.3', unit: 'm', label: 'Total sq. ft.'},
          {id: '3', count: '66', unit: 'm', label: 'Sq. ft. of industrial property'},
          {id: '4', count: '43', unit: 'm', label: 'Year of First International Acquisition'},
        ],
        propertiesInSG: [
          {id: '0', imageSrc: require('../../assets/imgs/construction/sentosa-006@2x.png'), type: 'Residential property', year: '2018', name: 'Resorts World Sentosa', location: 'Central, Singapore'},
          {id: '1', imageSrc: require('../../assets/imgs/construction/woodlands-checkpoint-002@2x.png'), type: 'Residential property', year: '2018', name: 'Woodlands Checkpoint', location: 'Central, Singapore'},
          {id: '2', imageSrc: require('../../assets/imgs/construction/singapore-expo-001@2x.png'), type: 'Residential property', year: '2018', name: 'Singapore Expo', location: 'Central, Singapore'},
          {id: '3', imageSrc: require('../../assets/imgs/construction/sunshine-garden-img-006@2x.png'), type: 'Residential property', year: '2018', name: 'Sunshine Garden', location: 'Central, Singapore'},
          {id: '4', imageSrc: require('../../assets/imgs/construction/emerald-img-001@2x.png'), type: 'Residential property', year: '2018', name: 'Emerald', location: 'Central, Singapore'},
          {id: '5', imageSrc: require('../../assets/imgs/construction/anchorvale-horizon-img-006@2x.png'), type: 'Residential property', year: '2018', name: 'Anchorvale Horizon', location: 'Central, Singapore'},
        ],
        propertiesInInt: [
          {id: '0', imageSrc: require('../../assets/imgs/construction/Dara-Sakor-Slider-5@2x.png'), type: 'Residential property', year: '2018', name: 'Dara Sakor', location: 'Central, Singapore'},
        ],
      }
    },
    created() {
      setTimeout(() => {
        const width = this.$refs.contentRef.clientWidth;
        this.boxWidth = `${((width - 50)/2)}px`;

        this.animateNumber();
      }, 100)
    },
    destroyed() {
      clearTimeout(this.timer);
    },
    methods: {
      enterProjectDetail() {
        this.$router.push({path: '/project-detail'});
      }, 

      showAllProject() {
        const $ = window.$;
        const el = this.$refs.titleOfSectionOne;
        const h = $(el).offset().top;

        const marginTop = $(this.$refs.contentRef).css('marginTop');
        $('body,html').animate({scrollTop: h - parseFloat(marginTop) - 40}, 200);
      },

      animateNumber() {
        for (let i = 0; i < this.numbers.length; i++) {
          const item = this.numbers[i];
          const el = this.$refs[`countRef${i}`];


          item.count && anime({
            targets: el,
            innerHTML: [0, item.count],
            easing: 'easeOutElastic(1, .6)',
            round: 10,
            duration: 1800,
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .real-estate {
    width: calc(100% - 28rem);
    min-height: 100%;
    // padding: 14rem 14rem 0 14rem;
    padding: 17.9rem 14rem 0 14rem;

    .top-container {
      display: flex;
      flex-direction: row;

      .subtitle {
        height: 3.6rem; 
        line-height: 3.6rem;
      }
      .title {
        letter-spacing: 4px; 
        height: 14.2rem; 
        line-height: 14.2rem;
      }
      .content {
        line-height: 3.6rem;
      }
    }

    @media screen and (max-width: 1023px) {
      .top-container {
        flex-direction: column;
      }
    }

    @media screen and (max-width: 768px) {
      .box-container {
        width: 100% !important;
      }
    }

    section:nth-child(1) {
      ul {
        padding-top: 8.5rem;

        li {
          width: 42.2rem;

          div {
            p:first-child {
              width: 28rem;
              letter-spacing: .5rem;
            }
            p {
              line-height: 11rem;
            }
          }

          .label-comment {
            padding: 1.6rem 0;
            border-bottom: 0.5px solid rgba(0,0,0,0.5);
          }
        }
      }
    }

    .image-list {
      label {
        line-height: 5.1rem;
        color: rgba(0,0,0,0.5);
      }

      ul {
        margin-top: 6rem;

        li {
          margin-bottom: 5.7rem;
        }

        @media screen and (max-width: 375px) {
          li {
            width: 100% !important;
          }
        }
      }
    }
  }
</style>
