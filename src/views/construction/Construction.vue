<template>
  <div class="real-estate">
    <section class="top-container">
      <div class="top-left-container">
        <p class="f-c-10 subtitle">
          {{ $t("message.consultation.title-1") }}
        </p>

        <p class="f-c-1 f-f-Raleway font-bold title">
          {{ $t("message.header.construction") }}
        </p>

        <p class="f-f-sans f-s-25 f-c-1 content">
          {{ $t("message.construction.description") }}
        </p>

        <gap :height="16" />

        <img class="top-left-img"
          src="../../assets/imgs/construction/Screenshot_2020-08-17_at_15073@2x.png"
          
        />

        <gap :height="50" />
        <p
          class="f-s-24 f-c-11 font-bold cursor-pointer"
          @click="showAllProject"
        >
          {{ $t("message.realEstate.see-all") }}
        </p>
      </div>

      <gap :width="39" />

      <div
        class="flex-column  justify-content-between top-right-container"
      >
        <!--
          <li v-for="(item, i) in numbers" :key="item.id">
          <div class="f-c-12 flex-row">
            <p class="f-s-129 f-f-rubik" :ref="'countRef' + i">
              {{ item.count }}
            </p>
            <p class="f-s-99 flex-row align-items-center">{{ item.unit }}</p>
          </div>

          <p
            class="f-c-13 f-f-sans f-s-25 label-comment"
            :style="{ borderBottomWidth: item.count ? 1 : 0 }"
          >
            {{ item.label }}
          </p>
        </li>

        -->
        <div class="title-right">
          <p class="f-f-Raleway">Qualified Construction</p>
        </div>

        <div class="awards flex-column">
          <div
            class="row-1 justify-content-between flex-row"
            style=" margin-top: 10%"
          >
            <div class="award flex-column">
              <p class="award-title">A1</p>
              <p class="award-content">General Building <br> CW01</p>
            </div>
            <div class="award flex-column">
              <p class="award-title">A1</p>
              <p class="award-content">General Building <br> CW01</p>
            </div>
          </div>
          <div
            class="row-2 justify-content-between flex-row"
            style=" margin-top: 10%"
          >
            <div class="award flex-column">
              <p class="award-title">L6</p>
              <p class="award-content">Electrical Engineering ME05</p>
            </div>
            <div class="award flex-column">
              <p class="award-title">L6</p>
              <p class="award-content">Plumbing &amp; Sanitary Works ME12</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <gap :height="206.03" />

    <section class="image-list">
      <label ref="titleOfSectionOne">{{
        $t("message.construction.class-1")
      }}</label>

      <ul ref="contentRef" class="flex-row flex-wrap justify-content-between">
        <template v-for="item in buildingEndlessJoy">
          <li
            :key="item.id"
            :style="{ width: boxWidth }"
            class="box-container"
            @click="goProjectDetail(item.id)"
          >
            <ProjectImageCard :info="item" />
          </li>
        </template>
      </ul>
    </section>

    <gap :height="100" />

    <section class="image-list">
      <label ref="titleOfSectionOne">{{
        $t("message.construction.class-2")
      }}</label>

      <ul class="flex-row flex-wrap justify-content-between">
        <template v-for="item in buildingOurHome">
          <li
            :key="item.id"
            :style="{ width: boxWidth }"
            class="box-container"
            @click="goProjectDetail(item.id)"
          >
            <ProjectImageCard :info="item" />
          </li>
        </template>
      </ul>
    </section>

    <gap :height="100" />

    <section class="image-list">
      <label ref="titleOfSectionOne">{{
        $t("message.construction.class-3")
      }}</label>

      <ul class="flex-row flex-wrap justify-content-between">
        <template v-for="item in buildingOurCity">
          <li
            :key="item.id"
            :style="{ width: boxWidth }"
            class="box-container"
            @click="goProjectDetail(item.id)"
          >
            <ProjectImageCard :info="item" />
          </li>
        </template>
      </ul>
    </section>

    <gap :height="100" />

    <section class="image-list">
      <label class="f-s-36">{{ $t("message.construction.class-4") }}</label>

      <ul class="flex-row flex-wrap">
        <template v-for="(item, i) in buildingOurWorld">
          <li
            :key="item.id"
            :style="{
              marginRight: i % 2 === 0 ? '6.4rem' : 0,
              width: boxWidth,
            }"
            class="box-container"
            @click="goProjectDetail(item.id)"
          >
            <ProjectImageCard :info="item" />
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>

<script>
import ProjectImageCard from "../../components/card/ProjectImageCard";
import anime from "animejs";
import { mapState } from "vuex";

export default {
  name: "Construction",
  components: { ProjectImageCard },
  data() {
    return {
      content: null,
      boxWidth: 0,
      numbers: [
        { id: "5", count: "", unit: "", label: "" },
        {
          id: "0",
          count: "89.2",
          unit: "",
          label: "Total No. of completed projects",
        },
        {
          id: "1",
          count: "56.1",
          unit: "m",
          label: "Total No. of turnkey contract",
        },
        { id: "2", count: "24.3", unit: "m", label: "Total sq. ft." },
        {
          id: "3",
          count: "66",
          unit: "m",
          label: "Sq. ft. of industrial property",
        },
        {
          id: "4",
          count: "43",
          unit: "m",
          label: "Year of First International Acquisition",
        },
      ],

      buildingOurWorld: "",

      buildingOurHome: "",

      buildingOurCity: "",

      buildingEndlessJoy: "",
    };
  },
  created() {
    this.content = require("../../assets/homepage/content.json");
    this.updateDom();

    setTimeout(() => {
      const width = this.$refs.contentRef.clientWidth;
      this.boxWidth = `${(width - 50) / 2}px`;

      this.animateNumber();
    }, 100);
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

  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    updateDom: function () {
      this.buildingOurWorld = [
        {
          id: "daraSakor",
          imageSrc: require("../../assets/imgs/construction/Dara-Sakor-Slider-5@2x.png"),
          type: this.$i18n.t("message.realEstate.daraSakor.type"),
          year: "2019",
          name: this.$i18n.t("message.realEstate.daraSakor.name"),
          location: this.$i18n.t("message.realEstate.daraSakor.location"),
        },
      ];
      this.buildingOurHome = [
        {
          id: "sunshineGarden",
          imageSrc: require("../../assets/imgs/construction/sunshine-garden-img-006@2x.png"),
          type: this.$i18n.t("message.realEstate.sunshineGarden.type"),
          year: "2001",
          name: this.$i18n.t("message.realEstate.sunshineGarden.name"),
          location: this.$i18n.t("message.realEstate.sunshineGarden.location"),
        },
        {
          id: "emerald",
          imageSrc: require("../../assets/imgs/construction/emerald-img-001@2x.png"),
          type: this.$i18n.t("message.realEstate.emerald.type"),
          year: "2014",
          name: this.$i18n.t("message.realEstate.emerald.name"),
          location: this.$i18n.t("message.realEstate.emerald.location"),
        },
        {
          id: "anchorvaleHorizon",
          imageSrc: require("../../assets/imgs/construction/anchorvale-horizon-img-006@2x.png"),
          type: this.$i18n.t("message.realEstate.anchorvaleHorizon.type"),
          year: "2010",
          name: this.$i18n.t("message.realEstate.anchorvaleHorizon.name"),
          location: this.$i18n.t(
            "message.realEstate.anchorvaleHorizon.location"
          ),
        },
      ];
      this.buildingOurCity = [
        {
          id: "woodlandsCheckpoint",
          imageSrc: require("../../assets/imgs/construction/woodlands-checkpoint-002@2x.png"),
          type: this.$i18n.t("message.realEstate.woodlandsCheckpoint.type"),
          year: "2018",
          name: this.$i18n.t("message.realEstate.woodlandsCheckpoint.name"),
          location: this.$i18n.t(
            "message.realEstate.woodlandsCheckpoint.location"
          ),
        },
        {
          id: "T311MrtStation",
          imageSrc: require("../../assets/imgs/real-estate/T311 MRT Station/1.jpg"),
          type: this.$i18n.t("message.realEstate.T311MrtStation.type"),
          year: "2024",
          name: this.$i18n.t("message.realEstate.T311MrtStation.name"),
          location: this.$i18n.t("message.realEstate.T311MrtStation.location"),
        },
      ];
      this.buildingEndlessJoy = [
        {
          id: "resortsWorldSentosa",
          imageSrc: require("../../assets/imgs/construction/sentosa-006@2x.png"),
          type: this.$i18n.t("message.realEstate.resortsWorldSentosa.type"),
          year: "2010",
          name: this.$i18n.t("message.realEstate.resortsWorldSentosa.name"),
          location: this.$i18n.t(
            "message.realEstate.resortsWorldSentosa.location"
          ),
        },
        {
          id: "singaporeExpo",
          imageSrc: require("../../assets/imgs/construction/singapore-expo-001@2x.png"),
          type: this.$i18n.t("message.realEstate.singaporeExpo.type"),
          year: "1999",
          name: this.$i18n.t("message.realEstate.singaporeExpo.name"),
          location: this.$i18n.t("message.realEstate.singaporeExpo.location"),
        },
      ];
    },

    enterProjectDetail() {
      this.$router.push({ path: "/project-detail" });
    },

    goProjectDetail: function (id) {
      this.$router.push("/project-detail/?id=" + id);
      window.scrollTo(0, 0);
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
$unit-size: 100vw/1366;
.real-estate {
  width: calc(100% - 28rem);
  min-height: 100%;
  // padding: 14rem 14rem 0 14rem;
  padding: 132px 14rem 0 14rem;

  .top-container {
    display: flex;
    flex-direction: row;

   
    .top-left-container {
      max-height: $unit-size*400;
      flex: 790 * $unit-size;

       .top-left-img{
      width: 288*$unit-size;
    }

      .subtitle {
        height: $unit-size * 20;
        line-height: $unit-size * 20;
        font-size: $unit-size * 14;
      }
      .title {
        letter-spacing: 4px;
        height: $unit-size * 29;
        line-height: $unit-size * 29;
        font-size: $unit-size * 24;
        letter-spacing: 0;
      }
      .content {
        white-space: pre-line;
        //padding: 0rem 1rem 1rem 1rem;
        //overflow-y: scroll;
        //height: 50rem;
        text-align: justify;
        line-height: $unit-size * 20;
        margin-top: 14px;
        font-size: $unit-size * 12;
      }
    }

    .top-right-container {
      //background-color: red;
      flex: $unit-size * 344;
      height: 60%;
      .title-right {
        margin-left: auto;
        margin-right: auto;
        
        font-size: 100vw/1366 * 16;
        width: 100%;
        
        white-space: nowrap;
        font-weight: 500;
        border-bottom: solid rgba(112, 112, 112, 0.5);
        border-width: 1px;
        line-height: 100vw/1366 * (13.5 * 2+19);
      }

      .awards {
        //margin-bottom: 125%;
        //background-color: yellow;

        .award {
          width: $unit-size * 114.32;
          height: $unit-size * 123.98;
          //background-color: green;
          background-image: url("../../assets/imgs/home/建筑叶子.svg");
          background-size: 100% 70%;
          background-repeat: no-repeat;
          background-position: center top;

          .award-title {
            font-family: "Times New Roman", Times, serif;
            font-weight: 700;
            font-size: $unit-size * 27;
            text-align: center;
            margin-top: 10%;
          }

          .award-content {
            font-family: Arial, Helvetica, sans-serif;
            line-height: $unit-size * 15;
            font-size: $unit-size * 10;
            text-align: center;
            margin-top: 50%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .top-container {
      flex-direction: column;
    }
    .awards{
      .row-1{
        justify-content: space-around;
      }
      .row-2{
        justify-content: space-around;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .box-container {
      width: 100% !important;

      .awards{
      .row-1{
        justify-content: space-around;
      }
      .row-2{
        justify-content: space-around;
      }
    }
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
            letter-spacing: 0.5rem;
          }
          p {
            line-height: 11rem;
          }
        }

        .label-comment {
          padding: 1.6rem 0;
          border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .image-list {
    label {
      line-height: 5.1rem;
      color: rgba(0, 0, 0, 0.5);
      font-size: $unit-size * 17;
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
