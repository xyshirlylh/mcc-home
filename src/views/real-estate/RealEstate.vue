<template>
  <div class="real-estate">
    <section class="top-container">
      <div class="flex-2">
        <p class="f-s-25 f-c-10">MCC Land</p>
        <gap :height="30"/>

        <p class="f-s-100 f-c-1 font-bold" style="letter-spacing: 4px">Real estate</p>

        <gap :height="50"/>

        <p class="f-s-25 f-c-1">MCC Land develops and manages a wide range of properties including residential, commercial, office, and landmark projects, like Universal Studios Singapore and Resorts World. <br/><br/><br/>They are mostly known for their high-rise luxury condominium projects.</p>

        <gap :height="69"/>
        <p class="f-s-24 f-c-11 font-bold">See all projects</p>
      </div>

      <gap :width="124"/>

      <ul class="flex-3 flex-row flex-wrap justify-content-between">
        <li v-for="(item) in numbers" :key="item.id">
          <p class="f-c-12"><span class="f-s-129 f-f-rubik">{{item.count}}</span><span class="f-s-99">{{item.unit}}</span></p>
          <p class="f-c-13 f-f-sans f-s-25">{{item.label}}</p>
        </li>
      </ul>
    </section>

    <gap :height="200"/>

    <section>
      <label class="f-s-36">Singapore property projects</label>

      <ul ref="contentRef" class="flex-row flex-wrap justify-content-between">
        <template v-for="item in propertiesInSG">
          <li :key="item.id" :style="{width: boxWidth}">
            <ProjectImageCard :info="item"/>
          </li>
        </template>
      </ul>
    </section>

    <gap :height="100"/>

    <section>
      <label class="f-s-36">International property projects</label>

      <ul class="flex-row flex-wrap">
        <template v-for="(item, i) in propertiesInInt">
          <li :key="item.id" :style="{marginRight: i%2===0 ? '6.4rem': 0, width: boxWidth}">
            <ProjectImageCard :info="item"/>
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>

<script>
  import ProjectImageCard from "../../components/card/ProjectImageCard";
  export default {
    name: "RealEstate",
    components: {ProjectImageCard},
    data() {
      return {
        boxWidth: 0,
        numbers: [
          {id: '5', count: '', unit: '', label: ''},
          {id: '0', count: '13', unit: '', label: 'Total No. of completed projects'},
          {id: '1', count: '52', unit: 'm', label: 'Total No. of turnkey contract'},
          {id: '2', count: '97.3', unit: 'm', label: 'Total sq. ft.'},
          {id: '3', count: '68.2', unit: 'm', label: 'Sq. ft. of industrial property'},
          {id: '4', count: '21.6', unit: 'm', label: 'Year of First International Acquisition'},
        ],
        propertiesInSG: [
          {id: '0', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Queens Peak', location: 'Central, Singapore'},
          {id: '1', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'The Alps Residences', location: 'Central, Singapore'},
          {id: '2', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Northwave', location: 'Central, Singapore'},
          {id: '3', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'The Poiz', location: 'Central, Singapore'},
          {id: '4', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'The Santorini', location: 'Central, Singapore'},
          {id: '5', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Sea Horizon', location: 'Central, Singapore'},
          {id: '6', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Forestville', location: 'Central, Singapore'},
          {id: '7', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'One Canberra', location: 'Central, Singapore'},
          {id: '8', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'The Nautical', location: 'Central, Singapore'},
          {id: '9', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Canberra Residences', location: 'Central, Singapore'},
          {id: '10', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'The Canopy', location: 'Central, Singapore'},
        ],
        propertiesInInt: [
          {id: '0', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Dara Sakor', location: 'Central, Singapore'},
          {id: '1', imageSrc: require('../../assets/imgs/s-1.jpg'), type: 'Residential property', year: '2018', name: 'Sky Villa', location: 'Central, Singapore'},
        ],
      }
    },
    created() {
      setTimeout(() => {
        const width = this.$refs.contentRef.clientWidth;
        this.boxWidth = `${((width - 50)/2)}px`
      }, 100)
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .real-estate {
    width: calc(100% - 28rem);
    min-height: 100%;
    padding: 18.1rem 14rem 0 14rem;

    .top-container {
      display: flex;
      flex-direction: row;
    }

    @media screen and (max-width: 375px) {
      .top-container {
        flex-direction: column;
      }
    }

    section:nth-child(1) {
      ul {
        li {
          width: 42.2rem;
          border-bottom: 1px solid rgba(0,0,0,0.5);

          p:first-child {
            span:first-child {
              padding-right: 2rem;
              letter-spacing: .5rem;
            }
          }
          p:last-child {
            margin: 1.6rem 0;
          }
        }
      }
    }
    section {
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
