<template>
  <header class="flex-row position-fix bg-c-0 z-index-100">
    <p class="flex-1 flex-row align-items-center left">
      <router-link to="/">
        <img :src="imgSvg" width="50px" height="45px" class="cursor-pointer"/>
      </router-link>
    </p>

    <p v-if="!showMenuList" ref="boxMenu" class="box-menu cursor-pointer" @click="onClickMenu">
      <span>Menu</span>

      <span class="icon-menu position-relative">
        <em class="line line-1"></em>
        <em class="line line-2"></em>
        <em class="line line-3"></em>
      </span>
    </p>

    <div class="menu-list position-absolute" :style="{height: showMenuList ? '300px' : 0}">
      <div v-if="showMenuList" class="row-icon flex-row">
        <p class="flex-1 flex-row align-items-center">
          <img :src="imgSvg" width="50px" height="45px"/>
        </p>

        <p class="cursor-pointer" @click="showMenuList = false">Close <i></i></p>
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
  import anime from 'animejs/lib/anime.es.js';
  import imgSvg from '../../assets/imgs/Group 871.svg';

  export default {
    name: 'Header',
    data() {
      return {
        imgSvg,
        showMenuList: false,
        timer: null
      }
    },
    destroyed() {
      clearTimeout(this.timer);
    },
    methods: {
      onClickMenu() {
        const el = this.$refs.boxMenu;

        anime({
          targets: el,
          translateX: -250,
          easing: 'easeInOutQuad',
          duration: 300
        });

        this.timer = setTimeout(() => {
          this.showMenuList = true;
        }, 200)
      },
    }
  };
</script>

<style scoped lang="scss" type="text/scss">
  @media screen and (max-width: 1024px) {
    header {
      @include box-size(100%, 50px);
      border-bottom: 2px solid #E3E3E3;

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
            background-color: #000000;
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
          .line-2, .line-3 {
            width: 30px;
          }
        }
      }

      .menu-list {
        width: 100%;
        height: 0;
        background-color: #ffffff;
        padding-left: 14rem;
        padding-right: 53px;
        box-shadow: 0px 3px 6px #00000029;
        transition: height 300ms ease-in-out;

        .row-icon {
          margin-top: 23px;
          p:last-child {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1025px) {
    header {
      @include box-size(100%, 9.4rem);
      border-bottom: 2px solid #E3E3E3;

      .left {
        padding-left: 14rem;

        img {
          width: 6.2rem;
          height: 5.1rem;
        }
      }

      .box-menu {
        @include box-size-line-height(20.3rem, 9.4rem);

        span:first-child {
          letter-spacing: 0.96px;
          padding-left: 5rem;
          padding-right: 10px;
          font-size: 2.4rem;
        }

        .icon-menu {
          .line {
            background-color: #000000;
            transform-origin: 7px;
            position: absolute;
            height: 2px;
            left: 75%;
            transition: all 500ms ease;
          }
          .line-1 {
            width: 4.5rem;
            margin-top: 3rem;
          }
          .line-2 {
            width: 3rem;
            margin-top: 4.5rem;
          }
          .line-3 {
            width: 3.8rem;
            margin-top: 6rem;
          }
        }

        &:hover {
          .line-2, .line-3 {
            width: 4.5rem;
          }
        }
      }

      .menu-list {
        width: 100%;
        height: 0;
        background-color: #ffffff;
        padding-left: 14rem;
        padding-right: 53px;
        box-shadow: 0px 3px 6px #00000029;
        transition: height 300ms ease-in-out;

        .row-icon {
          margin-top: 23px;
          p:last-child {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
