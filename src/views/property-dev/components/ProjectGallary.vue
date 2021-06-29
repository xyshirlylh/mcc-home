<template>
  <div class="flex-row project-gallery">
    <div class="flex-1 left position-relative" :style="{backgroundImage: 'url(' + currentImage + ')'}">
      <ul class="position-absolute flex-row justify-content-center align-items-center">
        <template v-for="(item, i) in data.images">
          <li :key="i" :style="{backgroundImage: 'url(' + item + ')'}" @click="switchImage(item)"></li>
        </template>
      </ul>
    </div>

    <div class="right flex-row align-items-center">
      <div class="content">
        <p class="f-s-30 f-f-raleway font-bold l-h-35 f-c-1">{{ data.name }}</p>
        <gap :height="7" />
        <p class="f-s-14 l-h-16 location"><i class="iconfont icon535239"></i>{{ data.location }}</p>
        <gap :height="39" />
        <div class="f-s-16 l-h-30 f-c-1 f-f-arial desc">{{ data.desc }}</div>
        <gap :height="38" />
        <button class="f-s-14 f-c-0">Find out more -></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectGallary",
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      currentImage: this.data.images[0]
    }
  },
  methods: {
    switchImage(item) {
      this.currentImage = item;
    }
  }
}
</script>
<style lang="scss" scoped>
  .project-gallery {
    height: 44.8rem;
    margin-top: 2.55rem;

    .left { 
      background-size: cover;
      background-position: center;

      ul {
        bottom: 0;
        left: 0; 
        right: 0; 
        height: 7rem; 
        background-color: rgba(226, 238, 255, .37);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        li { 
          width: 8rem; 
          height: 4.9rem; 
          margin-right: 2rem;
          background-size: cover;
          background-position: center;
        }
      }
    }
    .right { 
      width: 39.75%; 
      background-color: #E2EEFF;
      .content {
        padding: 0 10rem 0 2.4rem;

        text-align: right;
        .location { 
          color: rgba(0, 0, 0, .5);
          i { padding-right: 1rem; }
        }
        .desc { letter-spacing: 0.08px; }
        button { border-radius: 4px; border: 0; background-color: #4A91F2; width: 15.7rem; height: 4.3rem; }
      }
    }
  }
</style>