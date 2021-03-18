<template>
  <div class="about">
    <div class="title f-f-sans"><p>About Us</p></div>
    <div class="content">
      <p v-if="this.$store.state.lang === 'english'" class="f-f-sans">
        {{ this.content["about-full"] }}
      </p>

      <p v-if="this.$store.state.lang === 'chinese'" class="f-f-sans">
        中国中冶新加坡（MCC
        SINGAPORE）是中国冶金科工集团有限公司（简称中冶集团）旗下全资子公司中冶建筑研究总院有限公司的海外分公司。中国中冶新加坡（MCC
        SINGAPORE）作为中冶集团的海外区域性公司，代表中冶集团在新加坡开展区域性经营活动，主要从事城市规划、项目策划、城市及地产开发、项目管理、建筑工程及基础工程总承包、钢结构专业工程承包等业务。公司先后在钢结构专业工程、大型综合娱乐项目、房地产开发以及项目管理、公共基础设施项目等领域取得重大突破和显著成效，连续三年被评为“中国企业走进东盟十大成功企业奖”。
        1992年扬帆南洋，经过二十多年的发展，中冶蓝已遍布新加坡全岛的各个角落，并逐步向其他国家和地区延伸。在海外的发展过程中，中冶新加坡始终坚持绿色、可持续、智慧型的发展理念，以城市规划及项目策划为先导，以国际一流的工程承包为基础，推动公司业务持续、稳定、健康发展，力争成为区域有影响力的创新型城市发展与运营商。
        自2006年起，中国中冶新加坡公司的三间公司均在新加坡陆续通过ISO9001、ISO14001和ISO18001、bizSAFE
        Star和bizSAFE
        Partner认证，并陆续获得新加坡建设局颁发的绿色建筑白金奖和超金奖、绿色文明施工企业杰出奖、建筑业生产力实践与创新金奖、新加坡建屋发展局颁发的2012年安全大奖、2012年优质工程奖、2013年优质工程奖、新加坡人力部颁发的企业安全奖、新加坡钢结构协会颁发的钢结构设计大奖等殊荣。
        城市让生活更加美好，我们将不断为城市发展助力，在积极融入世界的同时，也以涓滴之力改变世界面貌，创造无限生活。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      content: "",
    };
  },

  created() {
    this.content = require("../../assets/homepage/content.json");
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 70px 0 0 0;
  //height: 100vh;
  background-image: url("../../assets/imgs/home/Group_920@2x.png"),
    url("../../assets/imgs/home/bady-abbas-MDgRcuGYu58-unsplas@2x.png");
  background-color: white;
  background-position: bottom, center;
  background-repeat: no-repeat;
  background-size: 102.6rem 19.7rem, 100% 100%;
  .title {
    p {
      text-align: center;
      margin-top: 112px;
      font-size: 2.6rem;
      line-height: 4.5rem;
      font-weight: 700;
    }
  }
  .content {
    p {
      white-space: pre-line;
      padding: 0 0 30rem 0;
      text-align: justify;
      margin-left: auto;
      margin-right: auto;
      line-height: 4.5rem;
      width: 90rem;
      font-size: 2.2rem;
    }
  }
}
</style>