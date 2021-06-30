<template>
  <section class="project-detail bg-c-1">
    <ImageGallery :name="projectInfo.name" :images="projectInfo.images" />

    <div class="flex-row justify-content-center">
      <div class="section-infor">
        <gap :height="60" />

        <Menu/>

        <gap :height="60" />

        <Details :details="details" />

        <gap :height="32.4" />

        <Description :desc="description" />

        <gap :height="47" />

        <Facilities :data="facilities" />

        <gap :height="30" />

        <div class="external">
          <a>
            <p>{{ $t("message.realEstate.website") }}</p>
          </a>
        </div>

        <gap :height="43" />

        <p ref="location" class="f-s-17 font-bold f-c-2 f-f-arial title">
          {{ $t("message.realEstate.project-location") }}
        </p>
        <gap :height="32" />

      </div>
    </div>

    <Location :location="location"/>

    <Pagination/>
  </section>
</template>
<script>
import json from '@/json/index.js';
import ImageGallery from './components/ImageGallery.vue';
import Menu from "./components/Menu.vue";
import Details from "./components/Details";
import Description from "./components/Description";
import Facilities from "./components/Facilities";
import Location from "./components/Location";
import Pagination from "./components/Pagination"

import { mapState } from "vuex";
export default {
  components: {
    ImageGallery, Menu, Details, Description, Facilities, Location, Pagination
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
      details: [
        { title: this.$i18n.t("message.realEstate.project-name"), label: "Queens Peak" },
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
    };
  },
  created() {
    this.init();
  },
  /* created() {
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
  }, */

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
    init() {
      const {name, images} = json[this.$route.query.id];
      this.projectInfo.name = name;
      this.projectInfo.images = images;
    },
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
  },
};
</script>
<style lang="scss" scoped type="text/scss">
.project-detail {
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

  .section-infor {
    width: 65.9rem;
    
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
}
</style>