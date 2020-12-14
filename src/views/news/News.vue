<template>
  <div>
    <div class="block-1">
      <div class="button-back f-f-sans" @click="back">
        <div class="arrow-back">
          <img src="../../assets/imgs/news/arrow-left.png" alt="" />
        </div>
        <div class="div"><p>Back</p></div>
      </div>
      <div class="gallery">
        <div class="col-1">
          <div class="img-1">
            <img src="../../assets/imgs/news/news-1/4.jpg" alt="" />
          </div>
        </div>
        <div class="col-2">
          <div class="row-1">
            <div class="img-2">
              <img src="../../assets/imgs/news/news-1/1.jpg" alt="" />
            </div>
            <div class="img-3">
              <img src="../../assets/imgs/news/news-1/5.jpg" alt="" />
            </div>
          </div>
          <div class="row-2">
            <div class="img-4">
              <img src="../../assets/imgs/news/news-1/6.jpg" alt="" />
            </div>
            <div class="img-5">
              <img src="../../assets/imgs/news/news-1/2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-all-photo" @click="goAllPhotos">
        <p>Show all photos</p>
      </div>
    </div>
    <div class="block-2">
      <div class="info"><p>Category Name | 6 Sep 2019</p></div>
      <div class="title">
        Participate in the International Built Environment Week Exhibition
      </div>
      <div class="author"><p>Written by author name</p></div>
      <div class="content">
        <p>
          MCC Singapore was invited to participate in the 2019 Singapore
          International Built Environment Week (IBEW), which was held on
          September 6 at Singapore bay sands convention and exhibition centre
          with the theme of "Leading the Transformation of the Construction
          Industry".<br /><br />

          9月3日至6日，新加坡海湾金沙会展中心举办了以 “引领建筑业转型”
          为主题的2019年新加坡国际建筑环境周（IBEW），中冶新加坡也受邀参加了本次展会。<br /><br />
          In this exhibition, MCC Singapore highlights two recent high-end
          projects in Cambodia. Sky Villa, MCC's first residential development
          in Phnom Penh, Cambodia; Another representative project is Dara Sakor
          on the southwest coast of Cambodia. The project is a model of
          Cambodia-China economic cooperation and a key project of "the Belt and
          Road". With eight functional areas including smart industrial park,
          commercial style street, cultural tourism area, overlooking the sea
          apartment, villa resort, yacht dock resort, coastal leisure resort and
          static sea bathing area as the core, aiming to create a new paradise
          for world-class tourism and vacation.<br /><br />
          在本次展览中，中冶新加坡重点展示了近期在柬埔寨的两个高端项目。一是天空别墅（Sky
          Villa）
          ，该项目为中冶新加坡在柬埔寨金边首个住宅开发项目；另一个代表项目，是位于柬埔寨西南海岸的七星海（Dara
          Sakor）。
          该项目是柬中经济合作典范、“一带一路”重点项目，以智慧产业园区、商业风情街、文旅区、瞰海公寓、别墅度假区、游艇码头度假区、滨海休闲度假酒店区、静海浴场八大功能区为核心，
          力求缔造世界级旅行度假新天堂。<br /><br />
          During the exhibition, the MCC Singapore booth hosted thousands of
          visitors from different industries such as construction, water
          conservancy and environment, and hosted the Cambodian Housing
          Development Association and the Saudi Chamber of Commerce Council
          members on the first and second day of the exhibition. Visitors showed
          great interest in the development of MCC Singapore's two key projects
          in Cambodia. The project leaders also gave detailed explanations and
          in-depth discussions on different projects.<br /><br />
          此次展会中，中冶新加坡展台接待了来自建筑、水利、环境等不同行业的上千名访客，并且在展会第一天和第二天分别接待了柬埔寨住房发展协会和沙特商会理事会成员。
          访客们对中冶新加坡在柬埔寨两大重点项目开发展示出极大兴趣，各项目负责人也针对不同项目向大家进行详细地讲解和深入的讨论。
        </p>
      </div>
      <div class="functions">
        <div class="heart">
          <img src="../../assets/imgs/news/heart.png" alt="" />
        </div>
        <div class="likes">128 Likes</div>
        <div class="facebook">
          <img src="../../assets/imgs/news/facebook.png" alt="" />
        </div>
        <div class="twitter">
          <img src="../../assets/imgs/news/tweeter.png" alt="" />
        </div>
        <div class="wechat">
          <img src="../../assets/imgs/news/Wechat.png" alt="" />
        </div>
      </div>

      <div class="navigations">
        <div class="privious">
          <div class="button-left">Privious</div>
          <div class="title-left">
            A beginner’s guide to organizing a product usability testing
          </div>
        </div>
        <div class="next">
          <div class="button-right">Next</div>
          <div class="title-right">
            7 ideation techniques to supercharge your next workshop
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    },

    goAllPhotos: function () {
      this.$router.push("/all-photos");
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "iconfont"; /* project id 2142682 */
  src: url("//at.alicdn.com/t/font_2142682_00fq9li0o918.eot");
  src: url("//at.alicdn.com/t/font_2142682_00fq9li0o918.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.woff") format("woff"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2142682_00fq9li0o918.svg#iconfont")
      format("svg");
}
.block-1 {
  height: 100vw/1920 * (660+60-120.5);
  max-width: 100vw;
  padding: (100vw/1920 * 120.5) 0 0 0;
  .button-back {
    display: flex;
    flex-direction: row;
    padding: 0.2% 0 0 0;
    margin-left: 100vw/1920 * 42;
    height: 100vw/1920 * 34;
    width: 100vw/1920 * 98.45;
    border-radius: 2.5rem;
    text-align: center;
    cursor: pointer;

    .arrow-back {
      height: 100vw/1920 * 13.71;
      width: 100vw/1920 * 9;
      margin-left: 20%;
      margin-right: 10%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:hover {
      background-color: rgba(229, 229, 229, 1);
    }
    font: normal normal normal 2rem/2.8rem Source Sans Pro;
  }

  .gallery {
    display: flex;
    flex-direction: row;
    background-color: white;
    margin-left: 100vw/1920 * 395;
    width: 100vw/1920 * 1129;
    height: 100vw/1920 * 462;
    .col-1 {
      width: 100vw/1920 * 565;
      height: 100vw/1920 * 462;
      img {
        width: 100vw/1920 * 565;
        height: 100vw/1920 * 462;
      }
    }
    .col-2 {
      display: flex;
      flex-direction: column;
      margin-left: 100vw/1920 * 8;
      width: 100vw/1920 * 564;
      height: 100vw/1920 * 462;
      img {
        width: 100vw/1920 * 274;
        height: 100vw/1920 * 232;
      }
      .row-1 {
        display: flex;
        flex-direction: row;
        .img-3 {
          margin-left: 100vw/1920 * 8;
        }
      }
      .row-2 {
        display: flex;
        flex-direction: row;
        margin-top: 100vw/1920 * 7;
        img {
          height: 100vw/1920 * 223;
        }
        .img-5 {
          margin-left: 100vw/1920 * 8;
        }
      }
    }
  }

  .button-all-photo {
    height: 100vw/1920 * 34;
    width: 100vw/1920 * 141;
    margin-left: 100vw/1920 * 1383;
    margin-top: 100vw/1920 * 20;
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 0.5rem;
    cursor: pointer;
    p {
      white-space: nowrap;
      margin-left: 100vw/1920 * 28;
      margin-top: 100vw/1920 * 7;
      font: normal normal normal 1.4rem/2rem Source Sans Pro;
    }
  }
}

.block-2 {
  //height: 100vw/1920 * (2055);
  width: 100vw- (100vw/1920 * 606) - (100vw/1920 * 583);
  padding: 0 (100vw/1920 * 606) 0 (100vw/1920 * 583);
  overflow: hidden;

  .info {
    width: 100vw/1920 * 248;
    height: 100vw/1920 * 22;
    font: normal normal 600 1.6rem/2.2rem Noto Sans;
    color: rgba(61, 61, 61, 1);
    white-space: nowrap;
  }
  .title {
    margin-top: 100vw/1920 * 16;
    width: 100vw/1920 * 731;
    height: 100vw/1920 * 117;
    font: normal normal bold (100vw/1920 * 40) Noto Sans;
    line-height: 5rem;
    overflow-wrap: break-word;
  }
  .author {
    width: 100vw/1920 * 248;
    height: 100vw/1920 * 22;
    font: normal normal 600 1.6rem/2.2rem Noto Sans;
    white-space: nowrap;
  }

  .content {
    width: 100vw/1920 * 712;
    //height: 100vw/1920 * 1088;

    overflow: hidden;
    p {
      width: 100vw/1920 * 712;
      //height: 100vw/1920 * 1088;

      font: (100vw/1920 * 16) Noto Sans;
      line-height: 2.6rem;
      color: rgba(115, 115, 115, 1);
      text-align: justify;
    }

    margin-top: 100vw/1920 * 12;
  }

  .functions {
    display: flex;
    flex-direction: row;
    width: 100vw/1920 * 712;
    height: 100vw/1920 * 48;
    margin-top: 100vw/1920 * 80;
    margin-bottom: 100vw/1920 * 355;
    div {
      cursor: pointer;
    }
    .heart {
      height: 100vw/1920 * 48;
      width: 100vw/1920 * 48;
      img {
        height: auto;
        width: 100%;
      }
    }

    .likes {
      white-space: nowrap;
      margin-left: 100vw/1920 * 19;
      margin-top: 100vw/1920 * 12;
      font: normal normal 600 1.6rem/2.2rem Noto Sans;
    }
    .facebook {
      height: 100vw/1920 * 24;
      width: 100vw/1920 * 24;
      margin-left: 100vw/1920 * 460;
      margin-top: 100vw/1920 * 18;
      img {
        height: auto;
        width: 100%;
      }
    }
    .twitter {
      height: 100vw/1920 * 24;
      width: 100vw/1920 * 24;
      margin-left: 100vw/1920 * 31;
      margin-top: 100vw/1920 * 18;
      img {
        height: auto;
        width: 100%;
      }
    }
    .wechat {
      height: 100vw/1920 * 24;
      width: 100vw/1920 * 24;
      margin-left: 100vw/1920 * 25;
      margin-top: 100vw/1920 * 18;
      img {
        height: auto;
        width: 100%;
      }
    }
  }
  .navigations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100vw/1920 * 68;
    width: 100%;
    height: 100vw/1920 * 139;
    .button-left {
      cursor: pointer;
      font: normal normal bold 1.6rem/2.6rem Noto Sans;
    }
    .button-right {
      cursor: pointer;
      text-align: right;
      font: normal normal bold 1.6rem/2.6rem Noto Sans;
    }
    .title-left {
      font: normal normal bold 2.4rem/3.4rem Noto Sans;
      height: 100vw/1920 * 101;
    }
    .title-right {
      text-align: right;
      height: 100vw/1920 * 101;
      font: normal normal bold 2.4rem/3.4rem Noto Sans;
    }
  }
}
</style>