<template>
  <div class="real-estate">
    <section class="top-container">
      <div class="flex-2">
        <p class="f-s-25 f-c-10 subtitle">{{$t('message.consultation.title-1')}}</p>

        <!-- <gap :height="30"/> -->

        <p class="f-s-100 f-c-1 font-bold title" style="letter-spacing: 4px">
          {{$t('message.intro-subtitle-2')}}
        </p>

        <gap :height="50" />

        <p class="f-s-25 f-c-1 content">
          {{ $t('message.realEstate.description') }} 
        </p>

        <gap :height="100" />

        <p
          class="f-s-24 f-c-11 font-bold cursor-pointer"
          @click="showAllProject"
        > 
         {{$t('message.realEstate.see-all')}} 
        </p>
      </div>

      <gap :width="124" />

      <ul class="flex-3 flex-row flex-wrap justify-content-between">
        <li
          v-for="(item, i) in numbers"
          :key="item.id"
          :style="{ borderBottomWidth: item.count ? 1 : 0 }"
        >
          <div class="f-c-12 flex-row">
            <p class="f-s-129 f-f-rubik" :ref="'countRef' + i">
              {{ item.count }}
            </p>
            <p class="f-s-99 flex-row align-items-center">{{ item.unit }}</p>
          </div>

          <p class="f-c-13 f-f-sans f-s-25 label-comment">{{ item.label }}</p>
        </li>
      </ul>
    </section>

    <gap :height="150" />

    <section>
      <label ref="titleOfSectionOne" class="f-s-36"
        >{{$t('message.realEstate.singapore-projects')}}</label
      >

      <ul ref="contentRef" class="flex-row flex-wrap justify-content-between">
        <template v-for="(item, index) in propertiesInSG">
          <li
            :key="index"
            :style="{ width: boxWidth }"
            class="box-container"
            @click="goProjectDetail(projectList[index])"
          >
            <ProjectImageCard :info="item" />
          </li>
        </template>
      </ul>
    </section>

    <gap :height="100" />

    <section>
      <label class="f-s-36">{{$t('message.realEstate.international-projects')}}</label>

      <ul class="flex-row flex-wrap">
        <template v-for="(item, i) in propertiesInInt">
          <li
            :key="item.id"
            :style="{
              marginRight: i % 2 === 0 ? '6.4rem' : 0,
              width: boxWidth,
            }"
            class="box-container"
            @click="goProjectDetail(projectList[11 + i])"
          >
            <ProjectImageCard :info="item" />
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import ProjectImageCard from "../../components/card/ProjectImageCard";
import { mapState } from "vuex";

export default {
  name: "RealEstate", 
  components: { ProjectImageCard },
  data() {
    return {
      content: null,
      boxWidth: 0,
      numbers: [
        { id: "5", count: "", unit: "", label: "" },
        {
          id: "0",
          count: "13",
          unit: "",
          label: "Total No. of completed projects",
        },
        {
          id: "1",
          count: "52",
          unit: "m",
          label: "Total No. of turnkey contract",
        },
        { id: "2", count: "97.3", unit: "m", label: "Total sq. ft." },
        {
          id: "3",
          count: "68.2",
          unit: "m",
          label: "Sq. ft. of industrial property",
        },
        {
          id: "4",
          count: "21.6",
          unit: "m",
          label: "Year of First International Acquisition",
        },
      ],
      projectList: null,
      propertiesInSG: [],
      propertiesInInt: [],
      timer: null,
    };
  },
  computed: {
 
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
    this.projectList = [
      "queensPeak",
      "theAlpsResidences",
      "northwave",
      "thePoiz",
      "theSantorini",
      "seaHorizon",
      "forestville",
      "oneCanberra",
      "theNautical",
      "canberraResidences",
      "theCanopy",
      "daraSakor",
      "skyVilla",
    ];
 
    this.updateDom();

    this.timer = setTimeout(() => {
      const width = this.$refs.contentRef.clientWidth;
      this.boxWidth = `${(width - 50) / 2}px`;

      this.animateNumber();
    }, 100);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    updateDom: function () {
      this.propertiesInSG = [
        {
          id: "0",
          imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          type: this.$i18n.t('message.realEstate.queensPeak.type') ,
          year: "2020",
          name: this.$i18n.t('message.realEstate.queensPeak.name') ,
          location: this.$i18n.t('message.realEstate.queensPeak.location'), 
        },
        {
          id: "1",
          imageSrc: require("../../assets/imgs/real-estate/alps-residences-img-001@2x.png"),
          type: this.$i18n.t('message.realEstate.theAlpsResidences.type'),
          year: "2019",
          name: this.$i18n.t('message.realEstate.theAlpsResidences.name'),
          location: this.$i18n.t('message.realEstate.theAlpsResidences.location'),
        },
        {
          id: "2",
          imageSrc: require("../../assets/imgs/real-estate/northwave-img-002@2x.png"),
          type: this.$i18n.t('message.realEstate.northwave.type'),
          year: "2019",
          name: this.$i18n.t('message.realEstate.northwave.name'),
          location: this.$i18n.t('message.realEstate.northwave.location'),
        },
        {
          id: "3",
          imageSrc: require("../../assets/imgs/real-estate/poiz-img-002@2x.png"),
          type: this.$i18n.t('message.realEstate.thePoiz.type'),
          year: "2018",
          name: this.$i18n.t('message.realEstate.thePoiz.name'),
          location: this.$i18n.t('message.realEstate.thePoiz.location'),
        },
        {
          id: "4",
          imageSrc: require("../../assets/imgs/real-estate/santorini-img-002@2x.png"),
          type: this.$i18n.t('message.realEstate.theSantorini.type'),
          year: "2018",
          name: this.$i18n.t('message.realEstate.theSantorini.name'),
          location: this.$i18n.t('message.realEstate.theSantorini.location'),
        },
        {
          id: "5",
          imageSrc: require("../../assets/imgs/real-estate/sea-horizon-img-003@2x.png"),
          type: this.$i18n.t('message.realEstate.seaHorizon.type'),
          year: "2017",
          name: this.$i18n.t('message.realEstate.seaHorizon.name'),
          location: this.$i18n.t('message.realEstate.seaHorizon.location'),
        },
        {
          id: "6",
          imageSrc: require("../../assets/imgs/real-estate/forestville-img-008@2x.png"),
          type: "Residential property",
          year: "2016",
          name: "Forestville",
          location: this.$i18n.t('message.realEstate.forestville.location'),
          
        },
        {
          id: "7",
          imageSrc: require("../../assets/imgs/real-estate/one-canberra-img-004@2x.png"),
          type: "Residential property",
          year: "2015",
          name: "One Canberra",
          location: this.$i18n.t('message.realEstate.oneCanberra.location'),
        },
        {
          id: "8",
          imageSrc: require("../../assets/imgs/real-estate/nautical-img-001@2x.png"),
          type: "Residential property",
          year: "2015",
          name: "The Nautical",
          location: this.$i18n.t('message.realEstate.theNautical.location'),
        },
        {
          id: "9",
          imageSrc: require("../../assets/imgs/real-estate/canberra-residences-img-007@2x.png"),
          type: "Residential property",
          year: "2013",
          name: "Canberra Residences",
          location: this.$i18n.t('message.realEstate.canberraResidences.location'),
        },
        {
          id: "10",
          imageSrc: require("../../assets/imgs/real-estate/canopy-img-001@2x.png"),
          type: "Residential property",
          year: "2014",
          name: "The Canopy",
          location: this.$i18n.t('message.realEstate.theCanopy.location'),
        },
      ],

      this.propertiesInInt = [
        {
          id: "0",
          imageSrc: require("../../assets/imgs/real-estate/Dara-Sakor-Slider-5@2x.png"),
          type: this.$i18n.t('message.realEstate.daraSakor.type'),
          year: "2019",
          name: this.$i18n.t('message.realEstate.daraSakor.name'),
          location: this.$i18n.t('message.realEstate.daraSakor.location'),
        },
        {
          id: "1",
          imageSrc: require("../../assets/imgs/real-estate/skyvilla-img-002@2x.png"),
          type: this.$i18n.t('message.realEstate.skyVilla.type'),
          year: "2018",
          name: this.$i18n.t('message.realEstate.skyVilla.name'),
          location: this.$i18n.t('message.realEstate.skyVilla.location'),
        },
      ]
      
    },

    goProjectDetail: function (id) {
      this.$router.push("/project-detail/?id=" + id);
      window.scrollTo(0, 0);
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
      for (let i = 0; i < this.numbers.length; i++) {
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
.real-estate {
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
}
</style>
