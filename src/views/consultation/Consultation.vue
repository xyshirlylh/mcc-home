<template>
  <div class="consultation">
    <section class="top-container">
      <div class="flex-2">
        <p class="f-s-25 f-c-10 subtitle">
          {{ $t("message.consultation.title-1") }}
        </p>

        <!-- <gap :height="30"/> -->

        <p class="f-s-100 f-c-1 font-bold title" style="letter-spacing: 4px">
          {{ $t("message.consultation.title-2") }}
        </p>

        <gap :height="50" />

        <p class="f-s-25 f-c-1 content">
          {{ $t("message.consultation.description") }}
        </p>

        <gap :height="100" />

        <!--

           <p
          class="f-s-24 f-c-11 font-bold cursor-pointer"
          @click="showAllProject"
        >
          See all projects
        </p>


        -->
      </div>

      <gap :width="124" />

      <ul class="flex-3 flex-row flex-wrap justify-content-between" ref="numbers" :key="componentKey">
        <li
          v-for="(item, i) in numbers"
          :key="item.id"
          :style="{ borderBottomWidth: item.count ? 1 : 0 }"
        >
          <div class="f-c-12 flex-row">
            <p
              class="f-s-80 f-f-rubik"
              :ref="'countRef' + i"
              style="white-space: nowrap; overflow: hidden"
              :style="{ 'font-size': i === 4 || i === 5 ? '4rem' : '8rem' }"
            >
              {{ item.count }}
            </p>
            <p class="f-s-30 flex-row align-items-center">
              {{ item.unit
              }}<sup
                v-show="i === 4"
                style="vertical-align: super; font-size: 3rem"
                >2</sup
              >
            </p>
          </div>

          <p class="f-c-13 f-f-sans f-s-25 label-comment">{{ item.label }}</p>
        </li>
      </ul>
    </section>

    <gap :height="150" />

    <div class="services">
      <div class="services-title">
        <p class="f-f-sans">{{ $t("message.consultation.title-3") }}</p>
      </div>

      <div class="services-row-1 flex-row">
        <ul>
          <li
            v-for="(item, index) in this.content.consultation.services"
            :key="index"
            class="f-f-sans"
          >
            {{ $t("message.consultation.services." + index) }}
          </li>
        </ul>
        <div class="pic">
          <img src="../../assets/imgs/consultation/consultation.jpg" alt="" />
        </div>
      </div>
    </div>
    <gap :height="50" />
    <button @click="updateDom"></button>

  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
//import ProjectImageCard from "../../components/card/ProjectImageCard";

export default {
  name: "RealEstate",
  //components: { ProjectImageCard },
  data() {
    return {
      content: null,
      locale: this.$store.state.locale, 
      boxWidth: 0,
      componentKey : 0,
      numbers:[],
      projectList: null,
      propertiesInSG: [
        {
          id: "0",
          imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          type: "Residential property",
          year: "2020",
          name: "Queens Peak",
          location: "Central, Singapore",
        },
        {
          id: "1",
          imageSrc: require("../../assets/imgs/real-estate/alps-residences-img-001@2x.png"),
          type: "Residential property",
          year: "2019",
          name: "The Alps Residences",
          location: "East, Singapore",
        },
        {
          id: "2",
          imageSrc: require("../../assets/imgs/real-estate/northwave-img-002@2x.png"),
          type: "Residential property",
          year: "2019",
          name: "Northwave",
          location: "North, Singapore",
        },
        {
          id: "3",
          imageSrc: require("../../assets/imgs/real-estate/poiz-img-002@2x.png"),
          type: "Residential property",
          year: "2018",
          name: "The Poiz",
          location: "Central, Singapore",
        },
        {
          id: "4",
          imageSrc: require("../../assets/imgs/real-estate/santorini-img-002@2x.png"),
          type: "Residential property",
          year: "2018",
          name: "The Santorini",
          location: "East, Singapore",
        },
        {
          id: "5",
          imageSrc: require("../../assets/imgs/real-estate/sea-horizon-img-003@2x.png"),
          type: "Residential property",
          year: "2017",
          name: "Sea Horizon",
          location: "East, Singapore",
        },
        {
          id: "6",
          imageSrc: require("../../assets/imgs/real-estate/forestville-img-008@2x.png"),
          type: "Residential property",
          year: "2016",
          name: "Forestville",
          location: "North, Singapore",
        },
        {
          id: "7",
          imageSrc: require("../../assets/imgs/real-estate/one-canberra-img-004@2x.png"),
          type: "Residential property",
          year: "2015",
          name: "One Canberra",
          location: "North, Singapore",
        },
        {
          id: "8",
          imageSrc: require("../../assets/imgs/real-estate/nautical-img-001@2x.png"),
          type: "Residential property",
          year: "2015",
          name: "The Nautical",
          location: "North, Singapore",
        },
        {
          id: "9",
          imageSrc: require("../../assets/imgs/real-estate/canberra-residences-img-007@2x.png"),
          type: "Residential property",
          year: "2013",
          name: "Canberra Residences",
          location: "North, Singapore",
        },
        {
          id: "10",
          imageSrc: require("../../assets/imgs/real-estate/canopy-img-001@2x.png"),
          type: "Residential property",
          year: "2014",
          name: "The Canopy",
          location: "Central, Singapore",
        },
      ],
      propertiesInInt: [
        {
          id: "0",
          imageSrc: require("../../assets/imgs/real-estate/Dara-Sakor-Slider-5@2x.png"),
          type: "Residential property",
          year: "2019",
          name: "Dara Sakor",
          location: "South, Cambodia",
        },
        {
          id: "1",
          imageSrc: require("../../assets/imgs/real-estate/skyvilla-img-002@2x.png"),
          type: "Residential property",
          year: "2018",
          name: "Sky Villa",
          location: "Central, Cambodia",
        },
      ],
      timer: null,
    };
  },





  created() {
    this.content = require("../../assets/homepage/content.json");
    this.locale = this.$store.state.lang


    this.timer = setTimeout(() => {
      //const width = this.$refs.contentRef.clientWidth;
      //this.boxWidth = `${(width - 50) / 2}px`;

      this.animateNumber();
    }, 100);

     this.numbers=[
        { id: "5", count: "", unit: "", label: "" },
        {
          id: "0",
          count: this.$i18n.t("message.consultation.count-1"),
          unit: "",
          label: this.$i18n.t("message.consultation.label-1"),
        },
        {
          id: "1",
          count: "8",
          unit: "",
          label: this.$i18n.t("message.consultation.label-2"),
        },
        {
          id: "2",
          count: "4",
          unit: this.$i18n.t("message.consultation.unit-1"),
          label: this.$i18n.t("message.consultation.label-3"),
        },
        {
          id: "3",
          count: "0 - 360",
          unit: "KM",
          label: this.$i18n.t("message.consultation.label-4"),
        },
        {
          id: "4",
          count: "200 - 2000",
          unit: this.$i18n.t("message.consultation.unit-2"),
          label: this.$i18n.t("message.consultation.label-5"),
        },
      ]

    
  },

  mounted(){
    if(this.$store.state === "zh"){
      this.updateDom
    }
  },


  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    goProjectDetail: function (id) {
      this.$router.push("/project-detail/?id=" + id);
      window.scrollTo(0, 0);
    },

    updateDom:function(){
      console.log(this.locale)
      this.numbers = [
        { id: "5", count: "", unit: "", label: "" },
        {
          id: "0",
          count: this.$i18n.t("message.consultation.count-1"),
          unit: "",
          label: this.$i18n.t("message.consultation.label-1"),
        },
        {
          id: "1",
          count: "8",
          unit: "",
          label: this.$i18n.t("message.consultation.label-2"),
        },
        {
          id: "2",
          count: "4",
          unit: this.$i18n.t("message.consultation.unit-1"),
          label: this.$i18n.t("message.consultation.label-3"),
        },
        {
          id: "3",
          count: "0 - 360",
          unit: "KM",
          label: this.$i18n.t("message.consultation.label-4"),
        },
        {
          id: "4",
          count: "200 - 2000",
          unit: this.$i18n.t("message.consultation.unit-2"),
          label: this.$i18n.t("message.consultation.label-5"),
        },
      ]
    },

    


    enterProjectDetail() {
      this.$router.push({ path: "/project-detail" });
    },

    showAllProject() {
      const $ = window.$;
      const el = this.$refs.titleOfSectionOne;
      const h = $(el).offset().top;

      const marginTop = $(this.$refs.contentRef).css("marginTop");
      $("body,html").animate(
        { scrollTop: h - parseFloat(marginTop) - 40 },
        200
      );
    },

    animateNumber() {
      for (let i = 2; i < this.numbers.length; i++) {
        const item = this.numbers[i];
        const el = this.$refs[`countRef${i}`];

        item.count &&
          anime({
            targets: el,
            innerHTML: [0, item.count],
            easing: "easeOutElastic(1, .6)",
            round: 10,
            duration: 1800,
          });
      }
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
.consultation {
  width: calc(100% - 28rem);
  min-height: 100%;
  padding: 17.9rem 14rem 0 14rem;

  .top-container {
    display: flex;
    flex-direction: row;

    .subtitle {
      height: 3.6rem;
      line-height: 3.6rem;
    }
    .title {
      white-space: nowrap;
      letter-spacing: 4px;
      height: 14.2rem;
      line-height: 14.2rem;
    }
    .content {
      //overflow-y: scroll;
      //height: 50rem;
      padding: 0 1rem 1rem 1rem;
      white-space: pre-line;
      text-align: justify;
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
      li {
        width: 42.2rem;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);

        div {
          p:first-child {
            width: 28rem;
            letter-spacing: 0.5rem;
          }

          p {
            line-height: 11rem;
          }
        }

        .label-comment {
          margin: 2rem 0;
        }
      }
    }
  }

  section {
    label {
      line-height: 5.1rem;
      color: rgba(0, 0, 0, 0.5);
    }

    ul {
      margin-top: 7rem;
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

  .services {
    .services-title {
      font-size: 5rem;
      font-weight: 700;
    }
    ul {
      margin-top: 30px;
      width: 40%;
    }
    .pic {
      width: 60%;
      img {
        width: 100%;
        margin-left: 10%;
        height: auto;
        object-fit: cover;
      }
    }
    li {
      font-size: 2.7rem;
      margin-bottom: 3rem;
    }
  }
}
</style>
