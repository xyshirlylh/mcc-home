<template>
  <section class="project-detail bg-c-1">
    <gap :height="94" />

    <div class="section-one position-relative" :style="{ backgroundImage: `url(${projectInfo.current.cover})`}">
      <span class="position-absolute z-index-50 f-s-50 f-c-0 f-f-raleway font-bold">{{ projectInfo.name }}</span>
    </div>

    <div class="flex-row justify-content-center section-gallery bg-c-0">
      <ul class="flex-row">
        <li v-for="item in projectInfo.images" 
            :key="item.id" 
            :style="{ backgroundImage: `url(${item.imageSrc})`}" 
            :class="{'current-cover': item.id === projectInfo.current.id}"
            class="cursor-pointer" @click="onSwitchCover(item)"></li>
      </ul>
    </div>

    <div class="section-infor">
      <gap :height="49" />

      <ul class="row-menu flex-row">
        <li v-for="item in operations" :key="item.id" class="f-s-18 f-f-arial font-bold cursor-pointer">
          <i :class="item.icon" class="iconfont"></i>
          <span>{{ item.label }}</span>
        </li>
      </ul>

      <gap :height="64" />
      <p class="f-s-24 font-bold title title-detail f-c-2 f-f-Noto">Details</p>
      <gap :height="14.25" />

      <ul class="flex-row flex-wrap row-detail">
        <template v-for="(item, i) in overview.details">
          <li :key="i">
            <p class="f-s-14 f-f-sans">{{ item.title }}</p>
            <p class="f-s-16 f-f-arial">{{ item.label }}</p>
          </li>
        </template>
      </ul>

      <gap :height="70.75" />
      <p class="f-s-24 font-bold f-c-2 f-f-Noto title title-description">Description</p>
      <gap :height="48" />

      <p class="f-s-16 f-f-arial row-description">{{overview.description}}<span class="f-c-12 f-s-16">Read more...</span></p>

      <gap :height="83" />
      <p class="f-s-24 font-bold f-c-2 f-f-Noto title title-facilities">Facilities & Amenities</p>
      <gap :height="70" />

      <ol class="flex-row flex-wrap row-facilities">
        <template v-for="(item, i) in overview.facilities">
          <li :key="i">
            <p><i :class="item.icon" class="iconfont"></i></p>
            <span class="f-s-18 f-f-arial f-c-2">{{ item.label }}</span>
          </li>
        </template>
      </ol>

      <gap :height="54" />
      <p class="f-s-24 font-bold f-c-2 f-f-Noto title title-site-plan">Site Plans</p>
      <gap :height="26" />

      <img :src="sitePlans.imgUrl" width="921px"/>

      <gap :height="99" />
      <p class="f-s-24 font-bold f-c-2 f-f-Noto title title-floor-plan">Floor Plans</p>
      <gap :height="25" />

      <div style="height: 300px; background-color: green;"></div>

      <gap :height="57" />
      <p class="f-s-24 font-bold f-c-2 f-f-Noto title">Location</p>
      <gap :height="32" />
    </div>

    <div class="row-map" style="background-color: purple">

    </div>
    <div style="background-color: green;"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      id: "Queens Peak",
      projectInfo: {
        name: "Queens Peak",
        current: {
          id: 0,
          cover: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
        },
        images: [
          { id: 0, imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png") },
          { id: 1, imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png") },
          { id: 2, imageSrc: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png") },
        ],
      },
      overview: {
        details: [
          {title: 'Project Name', label: 'Queens Peak'},
          {title: 'Project Type', label: 'Condominium For Sale'},
          {title: 'Developer', label: 'MCC Land'},
          {title: 'Tenure', label: '99-year Leasehold'},
          {title: 'PSF', label: 'S$ 1,483.91 psf'},
          {title: 'Completion Year', label: '2020'},
          {title: 'Total Units', label: '300'},
        ],
        description: 'In a competitive market and in an area - Alexandra - that shows all the signs of forthcoming investment, development and gentrification, Queens Park still manages to stand out from the crowd courtesy of its location directly opposite Queenstown MRT Station, and the quality of the units on offer. Just 15 – 20 minutes from Orchard Road and the CBD, Queens Park, offers single occupiers, couples and families a chance to affordably live within an easy commute of the city. 736 well designed and smartly functional units range from 1 bedroom flats up to 3, 4 and 5 bedroom apartments plus 4 very spacious penthouse suites.',
        facilities: [
          {icon: '', label: 'Basement car park'},
          {icon: '', label: 'Children’s Playground'},
          {icon: '', label: 'Drop Off Point'},
          {icon: '', label: 'Gymnasium room'},
          {icon: '', label: 'Lift lobby'},
          {icon: '', label: 'Swimming pool'},
          {icon: '', label: 'Main entrance'},
          {icon: '', label: '24 hours security'},
        ]
      },
      sitePlans: {
        imgUrl: require("../../assets/imgs/real-estate/queens-peak-img-006_ct@2x.png"),
      },
      floorPlans: {},
      location: {},
      operations: [
        {id: 0, label: 'Overview', icon: ''},
        {id: 1, label: 'Floor Plans', icon: ''},
        {id: 2, label: 'Location', icon: ''},
      ]
    };
  },
  methods: {
    onSwitchCover({id, imageSrc}) {
      this.projectInfo.current.id = id;
      this.projectInfo.current.cover = imageSrc;
    }
  }
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

  .section-gallery {
    ul {
      padding: 1.1rem 0 2.3rem 0;

      li {
        width: 16rem;
        height: 10rem;
        background-size: cover;
        background-position: center center;
        opacity: .53;
        margin-right: 12px;
        backdrop-filter: blur(50px);
      }

      .current-cover {
        opacity: 1;
      }
    }
  }

  .section-infor {
    padding-left: 49.9rem;

    .row-menu {
      height: 6rem;
      line-height: 6rem;

      li {
        color: #8B8B8B;
        margin-right: 5.5rem;
        i {
          padding-right: 7.74px;
        }
        span {
          padding-right: 19px;
        }

        &:hover {
          color: #000000;
          border-bottom: 2px solid #3E3E3E;
        }
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
          color: rgba(0, 0, 0, .5);
        }
        p:last-child {
          margin-top: 1.175rem;
          margin-bottom: 1.45rem;
          line-height: 5rem;
          color: #3D3D3D;
        }
      }
    }

    .row-description {
      max-width: 92rem;
      max-height: 16.1rem;
      line-height: 2.6rem;;
    }

    .row-facilities {
      max-width: 92.1rem;

      li {
        min-width: 30rem;
        margin-bottom: 2.9rem;
        p {
          @include box-size-line-height(15px, 20px);
        }
      }
    }
  }

  .row-map {
    @include box-size(100%, 70.3rem);
  }
}
</style>