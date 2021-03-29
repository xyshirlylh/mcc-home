<template>
  <div class="employee-operation">
    <div class="pic">
      <img src="../../assets/imgs/home/employee-operation.jpg" alt="" />
    </div>
    <div class="content">
      <p class="f-f-sans f-s-30 font-bold">Employee Operations</p>
      <div class="logos">
        <ul>
          <li>
            <div class="item flex-column">
              <p>HR Portal</p>
              <a href="https://www.infotech-cloudhr.com.sg/"
                ><img src="../../assets/imgs/home/hr portal.png" alt=""
              /></a>
            </div>
          </li>
          <li>
            <div class="item flex-column">
              <p>Email</p>
              <a href="http://mail.mccsingapore.com.sg/">
                <img src="../../assets/imgs/home/email.png" alt=""
              /></a>
            </div>
          </li>
          <li>
            <div class="item flex-column">
              <p>MCC School</p>
              <a href="https://course.jingye.com.sg/#/home"
                ><img src="../../assets/imgs/home/mcc school.png" alt=""
              /></a>
            </div>
          </li> 
          <li>
            <div class="item flex-column">
              <p>OA</p>
              <a href="http://oa.mccsingapore.com.sg/seeyon/index.jsp"
                ><img src="../../assets/imgs/home/oa.png" alt=""
              /></a>
            </div>
          </li>
          <li>
            <div class="item flex-column">
              <p>AIIS</p>
              <a href="http://aiis.mcc.sg/login.html?version=57926"
                ><img src="../../assets/imgs/home/aiis.png" alt=""
              /></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <gap :height="50" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.employee-operation {
  padding-top: 6.5rem;
  //background-color: red;
  .pic {
    img {
      width: 100%;
    }
  }
  .content {
    padding: 10rem 40rem 10rem 40rem;

    .logos {
      border-bottom: solid grey 1px;
      ul {
        display: flex;
        flex-flow: row wrap;

        margin-top: 5rem;
        p {
          text-align: center;
          font-size: 2rem;
          color: #4a91f2;
          margin-bottom: 1rem;
        }
      }
      .item {
        width: 190px;
        padding: 40px;
        img {
          cursor: pointer;
          width: 100%;
        }
      }
    }
  }
}
</style>