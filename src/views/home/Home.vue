<template>
  <div class="home">
    <section class="top-container">
      <div id="ID01">
        <span>01</span>
      </div>

      <svg class="Line_76" viewBox="0 0 145 1">
        <path id="Line_76" d="M 0 0 L 145 0"></path>
      </svg>

      <div id="What_we_do">
        <span>What we do</span>
      </div>

      <div id="Group_872">
        <svg class="Ellipse_179">
          <ellipse
            id="Ellipse_179"
            rx="6.5"
            ry="6.5"
            cx="6.5"
            cy="6.5"
          ></ellipse>
        </svg>
        <svg class="Ellipse_180">
          <ellipse
            id="Ellipse_180"
            rx="47.5"
            ry="47.5"
            cx="47.5"
            cy="47.5"
          ></ellipse>
        </svg>
      </div>

     <gap :height="364"/>

      <div id="Consultation">
        <span>Consultation</span>
      </div>

      <div id="Real_Estate">
        <span>Real Estate</span>
      </div>

      <div id="Construction">
        <span>Construction</span>
      </div>

      
    </section>
    <gap :height="3000"/>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
#ID01 {
  left: 140px;
  top: 213px;
  position: absolute;
  overflow: visible;
  width: 49px;
  white-space: nowrap;
  text-align: left;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 41px;
  color: rgba(191, 214, 246, 1);
  letter-spacing: 0.4px;
}
#What_we_do {
  left: 210px;
  top: 295px;
  position: absolute;
  overflow: visible;
  width: 142px;
  white-space: nowrap;
  text-align: left;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  color: rgba(113, 113, 113, 1);
  letter-spacing: 0.4px;
}

#Line_76 {
  fill: transparent;
  stroke: rgba(113, 113, 113, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Line_76 {
  overflow: visible;
  position: absolute;
  width: 145px;
  height: 1px;
  left: 140px;
  top: 268.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

#Group_872 {
  position: absolute;
  width: 95px;
  height: 95px;
  left: 140px;
  top: 359px;
  overflow: visible;
}

#Group_899 {
  position: absolute;
  width: 95px;
  height: 95px;
  left: 0px;
  top: 118px;
  overflow: visible;
}

#Ellipse_179 {
  fill: transparent;
  stroke: rgba(59, 125, 216, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Ellipse_179 {
  position: absolute;
  overflow: visible;
  width: 13px;
  height: 13px;
  left: 42px;
  top: 42px;
}

#Ellipse_180 {
  fill: transparent;
  stroke: rgba(227, 227, 227, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Ellipse_180 {
  position: absolute;
  overflow: visible;
  width: 95px;
  height: 95px;
  left: 0px;
  top: 0px;
}



#Consultation {
  position: relative;
  left: 252px;
  overflow: visible;
  width: 355px;
  white-space: nowrap;
  text-align: left;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 61px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: 0.4px;
}
#Real_Estate {
  position: relative;
  left: 252px;
  overflow: visible;
  width: 303px;
  white-space: nowrap;
  text-align: left;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 61px;
  color: rgba(227, 227, 227, 1);
  letter-spacing: 0.4px;
}
#Construction {
  position: relative;
  left: 252px;
  overflow: visible;
  width: 358px;
  white-space: nowrap;
  text-align: left;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 61px;
  color: rgba(227, 227, 227, 1);
  letter-spacing: 0.4px;
}
</style>
