<template>
  <header class="flex-row position-fix bg-c-0 z-index-100">
    <p class="flex-1 flex-row align-items-center left">
      <router-link to="/">
        <img :src="imgSvg" width="50px" height="45px" class="cursor-pointer" />
      </router-link>
    </p>

    <p
      v-if="!showMenuList"
      ref="boxMenu"
      class="box-menu cursor-pointer"
      @click="onClickMenu"
    >
      <!--

      -->

      <span class="icon-menu position-relative">
        <em class="line line-1"></em>
        <em class="line line-2"></em>
        <em class="line line-3"></em>
      </span>
    </p>

    <div
      class="menu-list"
      :style="{ width: showMenuList ? '413px' : 0 }"
      ref="sideMenu"
      tabindex="0"
    >
      <div
        v-if="showMenuList"
        class="row-icon flex-row"
        @blur="showMenuList = false" 
      >
        <!--
           <p
          class="flex-1 flex-row align-items-center"
          style="background-color: red"
        >
          <img :src="imgSvg" width="50px" height="45px" />
        </p>

        -->

        <p
          class="cursor-pointer position-relative"
          @click="showMenuList = false"
          style="right: 0px; top: 0px"
        >
          <img src="../../assets/imgs/home/close.png" /> <i></i>
        </p>
      </div>

      <div class="links flex-column">
        <div @click="goto('')">{{$t('message.header.home')}}</div>
        <div @click="goto(consultation)">{{$t('message.header.consultation')}}</div>
        <div @click="goto('real-estate')">{{$t('message.header.real-estate')}}</div>
        <div @click="goto('construction')">{{$t('message.header.construction')}}</div>
        <div @click="goto('about-us')">{{$t('message.header.about-us')}}</div>
        <div @click="goto('history')">{{$t('message.header.history')}}</div>
        <div @click="goto('all-news')">{{$t('message.header.mcc-news')}}</div>
        <div> 
          {{$t('message.header.language')}}
          <select
            v-model="$i18n.locale"
            @click="showMenuList = true"
            @change="changeLang($i18n.locale)"
            style="margin-left:1rem"
            
            
          >
            <option
              v-for="(lang, i) in langs"
              :key="`Lang${i}`"
              :value="lang[1]"
            >
              {{ lang[0] }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!--<el-header style="height: 94px; border: 1px solid #eee">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <span style="position: relative; left: 80px"><img
                class="resize"
                src="../assets/img/Group 871.svg"
                style="padding: 23px"
            /></span>
          </div>
          <div class="col-8"></div>
          <div
            class="col-2"
            style="
              padding: 34px;
              color: var(&#45;&#45;unnamed-color-000000);
              text-align: left;
              font: normal normal normal 24px/35px Source Sans Pro;
              letter-spacing: 0.96px;
              color: #000000;
              opacity: 1;
            ">
            Menu

            <svg
              aria-hidden="true"
              width="30px"
              height="30px"
              style="margin-left: 20px"
            >
              <use xlink:href="#iconmenu_normal"></use>
            </svg>
          </div>
        </div>
      </div>
    </el-header>-->
  </header>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import imgSvg from "../../assets/imgs/Group 871.svg";

export default {
  name: "Header",
  data() {
    return {
      imgSvg,
      showMenuList: false,
      timer: null,
      langs: [
        ["English", "en"],
        ["中文", "zh"],
      ],
    };
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    changeLang: function (what) {
      this.showMenuList = false;
      this.$store.commit("changeLang", what);
      
      //console.log(what);
    },
    onClickMenu() {
      const el = this.$refs.boxMenu;
      this.$refs.sideMenu.focus(); 

      anime({
        targets: el,
        translateX: -250,
        easing: "easeInOutQuad",
        duration: 300,
      });

      this.timer = setTimeout(() => {
        this.showMenuList = true;
      }, 200);
    },

    goto: function (where) {
      this.$router.push("/" + where);
      this.showMenuList = false;
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
header {
  border-top: 4px solid #4a91f2;
  border-bottom: 2px solid #e3e3e3;
}

@media screen and (max-width: 1024px) {
  header {
    @include box-size(100%, 50px);

    .left {
      padding-left: 14rem;
    }

    .box-menu {
      @include box-size-line-height(120px, 50px);

      span:first-child {
        letter-spacing: 0.96px;
        padding-left: 17px;
        padding-right: 10px;
        font-size: 15px;
      }

      .icon-menu {
        .line {
          background-color: #1381ce;
          transform-origin: 7px;
          position: absolute;
          height: 2px;
          left: 75%;
          transition: all 500ms ease;
        }
        .line-1 {
          width: 30px;
          margin-top: 15px;
        }
        .line-2 {
          width: 20px;
          margin-top: 25px;
        }
        .line-3 {
          width: 25px;
          margin-top: 35px;
        }
      }

      &:hover {
        .line-2,
        .line-3 {
          width: 30px;
        }
      }
    }

    .menu-list {
      width: 0;
      height: 100vw;
      background-color: rgba(210, 227, 250, 1);
      //padding-left: 14rem;
      //padding-right: 53px;
      box-shadow: 0px 3px 6px #00000029;
      transition: width 300ms ease-in-out;

      .row-icon {
        margin-left: 380.7px;
        margin-top: 15.79px;
      }
      img {
        width: 13.43px;
        height: 13.42px;
      }
      .links {
        padding: 56.79px 0 0 58px;
        div {
          width: fit-content;
          cursor: pointer;
          margin-bottom: 28px;
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (min-width: 1025px) {
  header {
    @include box-size(100%, 6rem);

    .left {
      padding-left: 14rem;

      img {
        width: 6.2rem;
        height: 5.1rem;
      }
    }

    .box-menu {
      //@include box-size-line-height(20.3rem, 9.4rem);
      @include box-size-line-height(20.3rem, 6rem);

      span:first-child {
        letter-spacing: 0.96px;
        padding-left: 5rem;
        padding-right: 10px;
        font-size: 2.4rem;
      }

      .icon-menu {
        .line {
          background-color: #1381ce;
          transform-origin: 7px;
          position: absolute;
          height: 2px;
          left: 75%;
          transition: all 500ms ease;
        }
        .line-1 {
          width: 4.5rem;
          margin-top: 1.8rem;
        }
        .line-2 {
          width: 3rem;
          margin-top: 3.2rem;
        }
        .line-3 {
          width: 3.8rem;
          margin-top: 4.7rem;
        }
      }

      &:hover {
        .line-2,
        .line-3 {
          width: 4.5rem;
        }
      }
    }

    .menu-list {
      width: 0;
      height: 100vw;
      background-color: rgba(210, 227, 250, 1);
      //padding-left: 14rem;
      //padding-right: 53px;
      box-shadow: 0px 3px 6px #00000029;
      transition: width 300ms ease-in-out;

      .row-icon {
        margin-left: 380.7px;
        margin-top: 15.79px;
      }
      img {
        width: 13.43px;
        height: 13.42px;
      }
      .links {
        padding: 56.79px 0 0 58px;
        div {
          width: fit-content;
          cursor: pointer;
          margin-bottom: 28px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
