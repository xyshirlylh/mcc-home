<template>
  <section class="project-detail bg-c-1">
    <gap :height="60" />

    <div
      class="section-one position-relative"
      :style="{ backgroundImage: `url(${projectInfo.current.cover})` }"
    >
      <span
        class="position-absolute z-index-50 f-s-50 f-c-0 f-f-raleway font-bold"
        style="background-color: rgba(1, 1, 1, 0.3); padding: 1rem"
      >
        {{ $t("message.realEstate." + this.projectID + ".name") }}
      </span>
    </div>

    <div class="flex-row section-gallery bg-c-0">
      <ul class="flex-row">
        <li
          v-for="item in projectInfo.images"
          :key="item.id"
          :style="{ backgroundImage: `url(${item.imageSrc})` }"
          :class="{ 'current-cover': item.id === projectInfo.current.id }"
          class="cursor-pointer"
          @click="onSwitchCover(item)"
        ></li>
      </ul>
    </div>

    <div class="flex-row justify-content-center">
      <div class="section-infor">
        <gap :height="49" />

        <ul ref="overview" class="row-menu flex-row position-relative">
          <li
            v-for="item in operations"
            :key="item.id"
            class="f-f-arial font-bold cursor-pointer flex-row align-items-center"
            @mouseover="onHoverMenu(item)"
            @click="onClickMenu(item)"
          >
            <i
              :style="{ color: item.id === currentLabel ? 'black' : 'grey' }"
              :class="item.icon"
              class="iconfont f-s-30"
            ></i>
            <span
              class="f-s-18"
              :style="{ color: item.id === currentLabel ? 'black' : 'grey' }"
              >{{ item.label }}</span
            >
          </li>

          <div
            class="menu-line position-absolute"
            :style="{ transform: `translateX(${translateX}rem)` }"
          ></div>
        </ul>

        <p
          class="f-s-24 font-bold title title-detail f-c-2 f-f-Noto"
          v-if="
            this.content['realEstate'][this.projectID]['type'] !==
            'construction'
          "
        >
          <gap :height="64" />
          {{ $t("message.realEstate.details") }}
          <gap :height="14.25" />
        </p>

        <ul
          class="flex-row flex-wrap row-detail"
          v-if="
            this.content['realEstate'][this.projectID]['type'] !==
            'construction'
          "
        >
          <template v-for="(item, i) in overview.details">
            <li :key="i">
              <p class="f-s-14 f-f-sans">{{ item.title }}</p>
              <p class="f-s-16 f-f-arial">{{ item.label }}</p>
            </li>
          </template>
        </ul>

        <gap :height="70.75" />
        <p class="f-s-24 font-bold f-c-2 f-f-Noto title title-description">
          {{ $t("message.realEstate.project-description") }}
        </p>
        <gap :height="48" />

        <p class="f-s-16 f-f-arial row-description">
          {{ overview.description }}
          <!--
             <span class="f-c-12 f-s-16">Read more...</span>
          -->
        </p>

        <p
          class="f-s-24 font-bold f-c-2 f-f-Noto title title-facilities"
          v-if="
            this.content['realEstate'][this.projectID]['type'] !==
            'construction'
          "
        >
          <gap :height="83" />
          {{ $t("message.realEstate.project-facilities") }}
          <gap :height="70" />
        </p>

        <ol
          class="flex-row flex-wrap row-facilities"
          v-if="
            this.content['realEstate'][this.projectID]['type'] !==
            'construction'
          "
        >
          <template v-for="(item, i) in overview.facilities">
            <li :key="i" class="flex-row align-items-center">
              <p><i :class="item.icon" class="iconfont"></i></p>
              <span class="f-s-18 f-f-arial f-c-2">{{ item.label }}</span>
            </li>
          </template>
        </ol>

        <gap :height="54" />

        <div class="external">
          <a :href="this.content['realEstate'][this.projectID]['externalLink']">
            <p>{{ $t("message.realEstate.website") }}</p>
          </a>
        </div>

        <!--
          暂时隐藏site plan和floor plan
          <p class="f-s-24 font-bold f-c-2 f-f-Noto title title-site-plan">
          Site Plans
        </p>
        <gap :height="26" />

        <img class="site-plan-image" :src="sitePlans.imgUrl" />

        <gap :height="99" />
        <p
          ref="floor"
          class="f-s-24 font-bold f-c-2 f-f-Noto title title-floor-plan"
        >
          Floor Plans
        </p>
        <gap :height="25" />

        <floor-plan :floorPlans="floorPlans" />

        -->

        <gap :height="57" />
        <p ref="location" class="f-s-24 font-bold f-c-2 f-f-Noto title">
          {{ $t("message.realEstate.project-location") }}
        </p>
        <gap :height="32" />
      </div>
    </div>

    <div class="row-map">
      <GmapMap
        ref="mapRef"
        :center="location"
        :zoom="17"
        map-type-id="roadmap"
        style="width: 100%; height: 100%"
      >
        <GmapMarker :position="location" :clickable="true" />
      </GmapMap>
    </div>

    <div
      class="row-pagination bg-c-2 flex-row justify-content-center align-items-center"
    >
      <div class="box">
        <div class="flex-row align-items-center">
          <p
            class="flex-1 f-c-2 f-f-Noto f-s-16 flex-row align-items-center"
            v-if="this.projectList.indexOf(this.projectID) !== 0"
          >
            <i class="iconfont iconarrow-left"></i
            ><span class="cursor-pointer" @click="goto(previousID)"
              >Previous</span
            >
          </p>

          <p
            class="flex-1 f-c-2 f-f-Noto f-s-16 flex-row align-items-center"
            v-else
          ></p>
          <p
            class="f-c-2 f-f-Noto f-s-16 cursor-pointer flex-row align-items-center"
            @click="goto(nextID)"
            v-if="
              this.projectList.indexOf(this.projectID) !==
              projectList.length -1
            "
          >
            Next<i class="iconfont iconarrow-right"></i>
          </p>
        </div>

        <gap :height="16" />

        <div class="flex-row">
          <p
            class="flex-1 f-c-2 f-s-24 f-f-Noto font-bold"
            v-if="this.projectList.indexOf(this.projectID) !== 0"
          >
            {{ $t("message.realEstate." + this.previousID + ".name") }}
          </p>
          <p class="flex-1 f-c-2 f-s-24 f-f-Noto font-bold" v-else></p>
          <p
            class="f-c-2 f-s-24 f-f-Noto font-bold"
            v-if="
              this.projectList.indexOf(this.projectID) !==
              projectList.length -1
            "
          >
            {{ $t("message.realEstate." + this.nextID + ".name") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
//import FloorPlan from "./components/FloorPlans";
import { mapState } from "vuex";
export default {
  components: {
    //FloorPlan,
  },
  data() {
    return {
      id: "Queens Peak",
      projectID: null,
      previousID: null,
      nextID: null,
      projectDetails: null,
      projectList: [],
      currentLabel: 0,
      projectInfo: {
        name: "Queens Peak",
        current: {
          id: 0,
          cover: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
        },
        images: [
          {
            id: 0,
            imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          },
          {
            id: 1,
            imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          },
          {
            id: 2,
            imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          },
        ],
      },
      overview: {
        details: [
          {
            title: this.$i18n.t("message.realEstate.project-name"),
            label: "Queens Peak",
          },
          { title: "Project Type", label: "Condominium For Sale" },
          { title: "Developer", label: "MCC Land" },
          { title: "Tenure", label: "99-year Leasehold" },
          { title: "PSF", label: "S$ 1,483.91 psf" },
          { title: "Completion Year", label: "2020" },
          { title: "Total Units", label: "300" },
        ],
        description:
          "In a competitive market and in an area - Alexandra - that shows all the signs of forthcoming investment, development and gentrification, Queens Park still manages to stand out from the crowd courtesy of its location directly opposite Queenstown MRT Station, and the quality of the units on offer. Just 15 – 20 minutes from Orchard Road and the CBD, Queens Park, offers single occupiers, couples and families a chance to affordably live within an easy commute of the city. 736 well designed and smartly functional units range from 1 bedroom flats up to 3, 4 and 5 bedroom apartments plus 4 very spacious penthouse suites.",
        facilities: [
          { icon: "iconbasementcarpark", label: "Basement car park" },
          { icon: "icon2971019", label: "Children’s Playground" },
          { icon: "icondropoff", label: "Drop Off Point" },
          { icon: "icon3788750", label: "Gymnasium room" },
          { icon: "icon3582873", label: "Lift lobby" },
          { icon: "icon763860", label: "Swimming pool" },
          { icon: "iconXMLID_642_", label: "Main entrance" },
          { icon: "icon783192", label: "24 hours security" },
        ],
      },
      sitePlans: {
        imgUrl: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
      },
      floorPlans: {
        current: {
          id: 0,
          type: "C3",
          area: "(AREA 79sqm / 850 sq ft)",
          imgSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
        },
        list: [
          {
            id: 0,
            type: "C3",
            area: "(AREA 79sqm / 850 sq ft)",
            imgSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          },
          {
            id: 1,
            type: "C4",
            area: "(AREA 79sqm / 850 sq ft)",
            imgSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          },
          {
            id: 2,
            type: "C5",
            area: "(AREA 79sqm / 850 sq ft)",
            imgSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
          },
        ],
      },
      location: {
        lat: 1.2948546,
        lng: 103.8045647,
      },
      operations: [],
      translateX: 0,
    };
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.projectID = urlParams.get("id");
    this.content = require("../../assets/homepage/content.json");

    this.updateDom();

    this.location.lat = this.content["realEstate"][this.projectID]["lat"];
    this.location.lng = this.content["realEstate"][this.projectID]["lng"];

    this.projectInfo.images = [];
    for (
      let i = 0;
      i < this.content["realEstate"][this.projectID]["numOfPics"];
      i++
    ) {
      this.projectInfo.images.push({
        id: i,
        imageSrc: require("../../assets/imgs/real-estate/" +
          this.content["realEstate"][this.projectID]["name"] +
          "/" +
          (i + 1) +
          ".jpg"),
      });
    }
    this.projectInfo.current.cover = this.projectInfo.images[0].imageSrc;

    if (this.content["realEstate"][this.projectID]["type"] !== "construction") {
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
    } else {
      this.projectList = [
        "resortsWorldSentosa",
        "singaporeExpo",
        "sunshineGarden",
        "emerald",
        "anchorvaleHorizon",
        "T311MrtStation",
        "daraSakor",
      ];
    }
    this.previousID = this.projectList[
      this.projectList.indexOf(this.projectID) - 1
    ];
    this.nextID = this.projectList[
      this.projectList.indexOf(this.projectID) + 1
    ];
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

  methods: {
    goto(where) {
      this.$router.push("/project-detail/?id=" + where);
      const urlParams = new URLSearchParams(window.location.search);
      this.projectID = urlParams.get("id");
      this.content = require("../../assets/homepage/content.json");

      this.updateDom();

      this.location.lat = this.content["realEstate"][this.projectID]["lat"];
      this.location.lng = this.content["realEstate"][this.projectID]["lng"];

      this.projectInfo.images = [];
      for (
        let i = 0;
        i < this.content["realEstate"][this.projectID]["numOfPics"];
        i++
      ) {
        this.projectInfo.images.push({
          id: i,
          imageSrc: require("../../assets/imgs/real-estate/" +
            this.content["realEstate"][this.projectID]["name"] +
            "/" +
            (i + 1) +
            ".jpg"),
        });
      }
      this.projectInfo.current.cover = this.projectInfo.images[0].imageSrc;

      if (
        this.content["realEstate"][this.projectID]["type"] !== "construction"
      ) {
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
      } else {
        this.projectList = [
          "resortsWorldSentosa",
          "singaporeExpo",
          "sunshineGarden",
          "emerald",
          "anchorvaleHorizon",
          "T311MrtStation",
          "daraSakor",
        ];
      }
      this.previousID = this.projectList[
        this.projectList.indexOf(this.projectID) - 1
      ];
      this.nextID = this.projectList[
        this.projectList.indexOf(this.projectID) + 1
      ];
    },

    updateDom: function () {
      this.overview = {
        details: [
          {
            title: this.$i18n.t("message.realEstate.project-name"),

            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".name"
            ),
          },
          {
            title: this.$i18n.t("message.realEstate.project-type"),
            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".type"
            ),
          },
          {
            title: this.$i18n.t("message.realEstate.developer"),
            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".developer"
            ),
          },
          {
            title: this.$i18n.t("message.realEstate.tenure"),
            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".tenure"
            ),
          },
          {
            title: this.$i18n.t("message.realEstate.psf"),
            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".psf"
            ),
          },
          {
            title: this.$i18n.t("message.realEstate.completion-year"),
            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".top"
            ),
          },
          {
            title: this.$i18n.t("message.realEstate.total-units"),
            label: this.$i18n.t(
              "message.realEstate." + this.projectID + ".unitNum"
            ),
          },
        ],
        description: this.$i18n.t(
          "message.realEstate." + this.projectID + ".description"
        ),
        facilities: [
          {
            icon: "iconbasementcarpark",
            label: this.$i18n.t("message.realEstate.facilities.carpark"),
          },
          {
            icon: "icon2971019",
            label: this.$i18n.t("message.realEstate.facilities.playground"),
          },
          {
            icon: "icondropoff",
            label: this.$i18n.t("message.realEstate.facilities.drop-off"),
          },
          {
            icon: "icon3788750",
            label: this.$i18n.t("message.realEstate.facilities.gym"),
          },
          {
            icon: "icon3582873",
            label: this.$i18n.t("message.realEstate.facilities.lift"),
          },
          {
            icon: "icon763860",
            label: this.$i18n.t("message.realEstate.facilities.swim"),
          },
          {
            icon: "iconXMLID_642_",
            label: this.$i18n.t("message.realEstate.facilities.entrance"),
          },
          {
            icon: "icon783192",
            label: this.$i18n.t("message.realEstate.facilities.security"),
          },
        ],
      };

      this.operations = [
        {
          id: 0,
          label: this.$i18n.t("message.realEstate.overview"),
          icon: "icongailan",
          translate: 0,
          ref: "overview",
        },
        /*
        {
          id: 1,
          label: "Floor Plans",
          icon: "iconMaskGroup25",
          translate: 19,
          ref: "floor",
        },
        
        */

        {
          id: 1,
          label: this.$i18n.t("message.realEstate.location"),
          icon: "icon535239",
          //translate: 39,
          translate: 19,
          ref: "location",
        },
      ];
    },

    onSwitchCover({ id, imageSrc }) {
      this.projectInfo.current.id = id;
      this.projectInfo.current.cover = imageSrc;
    },

    switchFloorPlan(item) {
      this.floorPlans.current = item;
    },

    onHoverMenu(item) {
      this.translateX = item.translate;
    },

    onClickMenu(item) {
      const $ = window.$;
      const el = this.$refs[item.ref];
      const h = $(el).offset().top;
      this.currentLabel = item.id;
      console.log(item.id);
      console.log(this.currentLabel);

      $("body,html").animate({ scrollTop: h - 100 }, 200);
    },
  },
};
</script>
<style lang="scss" scoped type="text/scss">
.project-detail {
  .icongailan {
    font-size: 3.5rem;
    margin-left: -4px;
  }
  .iconMaskGroup25 {
    font-size: 2.5rem;
  }
  .icon535239 {
    font-size: 2rem;
  }
  .icon3788750 {
    margin-left: -8px;
  }
  .icon3582873 {
    margin-left: -2px;
  }
  .icon783192 {
    margin-left: -4px;
  }
  .icondropoff {
    font-size: 16px !important;
  }

  .section-one {
    height: 71rem;
    background-size: cover;
    background-position: center center;

    span {
      line-height: 5.9rem;
      top: 11.2rem;
      left: 14rem;
    }
  }

  .section-gallery {
    padding-left: 49.9rem;
    ul {
      padding: 1.1rem 0 2.3rem 0;

      li {
        width: 16rem;
        height: 10rem;
        background-size: cover;
        background-position: center center;
        opacity: 0.53;
        margin-right: 12px;
        backdrop-filter: blur(50px);
      }

      .current-cover {
        opacity: 1;
      }
    }
  }

  .section-infor {
    width: 92.1rem;
    // padding-left: 49.9rem;

    .row-menu {
      height: 6rem;
      line-height: 6rem;

      li {
        color: #8b8b8b;
        margin-right: 5.5rem;

        i {
          padding-right: 7.74px;
        }
        span {
          padding-right: 19px;
        }

        &:hover {
          color: #000000;
        }
      }

      .menu-line {
        bottom: 0;
        width: 14rem;
        border-bottom: 2px solid #000000;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    .title {
      line-height: 5rem;
    }

    .row-detail {
      max-width: 80rem;

      li {
        width: 16.9rem;
        border-bottom: 1px dashed #707070;
        margin-right: 1.95rem;
        margin-bottom: 2.575rem;

        p:first-child {
          line-height: 2rem;
          color: rgba(0, 0, 0, 0.5);
        }
        p:last-child {
          margin-top: 1.175rem;
          margin-bottom: 1.45rem;
          //line-height: 5rem;
          line-height: 3rem;
          color: #3d3d3d;
        }
      }
    }

    .row-description {
      padding: 0 1rem 0 0;
      white-space: pre-line;

      text-align: justify;
      max-width: 92rem;
      //max-height: 16.1rem;
      line-height: 2.6rem;
    }

    .row-facilities {
      max-width: 92.1rem;

      li {
        min-width: 30rem;
        margin-bottom: 2.9rem;

        p {
          width: 35px;
          i {
            font-size: 20px;
          }
        }
      }
    }

    .site-plan-image {
      width: 92.1rem;
    }
    .external {
      //border: solid black;
      a {
        text-decoration: none;
      }
      cursor: pointer;
      border-radius: 1rem;
      width: 100vw/1366 * 157;
      height: 100vw/1366 * 43;
      background-color: rgba(74, 145, 242, 1);

      p {
        text-align: center;
        color: white;
        line-height: 100vw/1366 * 43;
        white-space: nowrap;
        font-size: 100vw/1366 * 14;
      }
    }
  }

  .row-map {
    @include box-size(100%, 70.3rem);
  }

  .row-pagination {
    @include box-size(100%, 36.6rem);

    .box {
      width: 92.1rem;

      .iconarrow-left {
        padding-right: 16px;
      }
      .iconarrow-right {
        padding-left: 16px;
      }
    }
  }
}
</style>