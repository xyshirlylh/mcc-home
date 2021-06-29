<template>
  <div class="container-sales flex-row">
    <div class="container-left">
      <h1>UNIT DISTRIBUTION CHART</h1>

      <ul class="flex-row row-1">
        <li v-for="i in 13" :key="i">{{ i - 1 | filterVal}}</li>
      </ul>

      <ol class="flex-row top-floor">
        <li style="width: 50px; line-height: 40px;">35</li>

        <template v-for="item in topFloor">
          <li :key="item.type" 
              :style="{width: `${item.width}px`, backgroundColor: item.color}" 
              @click="onClickTopFloor(item)">
              <span>{{ item.type }}</span><br/>
              <span>{{ item.unit }}</span>
              </li>
        </template>
      </ol>

      <template v-for="floor in floors">
        <ol :key="floor.floorNum" class="flex-row">
          <li>{{ floor.floorNum }}</li>

          <li
            v-for="unit in floor.units"
            :key="unit.label"
            :style="{ backgroundColor: unit.color }"
            @click="onClickUnit(floor, unit)"
          >
            {{ unit.label }}
          </li>
        </ol>
      </template>
    </div>

    <ul class="container-right">
      <template v-for="item in iconList">
        <li :key="item.color"><p :style="{backgroundColor: item.color}"></p><span>{{ item.label }}</span></li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      floors: [],
      iconList: [
        {color: '#46bfbf', label: '1-Bedroom'},
        {color: '#6aab72', label: '2-Bedroom'},
        {color: '#cd9cdc', label: '2-Bedroom + Study'},
        {color: '#e2ab2d', label: '3-Bedroom'},
        {color: '#999b9e', label: '3-Bedroom Penthouse'},
        {color: '#585a5f', label: '5-Bedroom Penthouse'},
      ],
      topFloor: [],
    };
  },
  filters: {
    filterVal(val) {
      if (val > 0) {
        return val < 10 ? ('0' + val) : val;
      } else {
        return '';
      }
    }
  },
  created() {
    // 先查询本地localStorage中是否存在数据
    // 如果有，就从本地获取数据
    // 如果没有就需要初始化数据
    const data = window.localStorage.getItem("sales-data");
    const topFloorData = window.localStorage.getItem("top-floor");

    data ? (this.floors = JSON.parse(data)) : this.initFloorData();

    if (topFloorData) {
      this.topFloor = JSON.parse(topFloorData);
    } else {
      this.topFloor = [
        {type: 'E1', unit: '#35-01', color: '#585a5f', width: 305},
        {type: 'E2', unit: '#35-03', color: '#999b9e', width: 152},
        {type: 'E3', unit: '#35-02', color: '#999b9e', width: 152},
      ];
    }
  },
  methods: {
    initFloorData() {
      for (let i = 33; i >= 5; i--) {
        const unitTypes = [
          { label: "B2", color: "#6aab72" },
          { label: "B3", color: "#6aab72" },
          { label: "A2", color: "#46bfbf" },
          { label: "A1", color: "#46bfbf" },
          { label: "A3", color: "#46bfbf" },
          { label: "B1", color: "#6aab72" },
          { label: "B4", color: "#6aab72" },
          { label: "BS4", color: "#cd9cdc" },
          { label: "BS3", color: "#cd9cdc" },
          { label: "BS2", color: "#cd9cdc" },
          { label: "BS1", color: "#cd9cdc" },
          { label: "C1", color: "#e2ab2d" },
        ];

        let units = [];
        unitTypes.forEach((item, index) => {
          units.push({
            unitNo: index,
            label: item.label,
            color: item.color,
            selected: false,
          });
        });

        this.floors.push({ floorNum: i, units });
      }
    },

    onClickUnit(selFloor, selUnit) {
      if (!this.checkUserRights()) return false;

      this.floors.forEach((floor) => {
        if (floor.floorNum === selFloor.floorNum) {
          floor.units.forEach((unit) => {
            if (unit.label === selUnit.label) {
              unit.color = "red";
              return false;
            }
          });
        }
      });

      // 每次点击以后需要把最新的数据存储在本地
      window.localStorage.setItem("sales-data", JSON.stringify(this.floors));
    },

    onClickTopFloor(selUnit) {
      if (!this.checkUserRights()) return false;

      this.topFloor.forEach(item => {
        if (selUnit.unit === item.unit) {
          item.color = 'red';
        }
      });

      window.localStorage.setItem('top-floor', JSON.stringify(this.topFloor));
    },

    checkUserRights() {
      return this.$route.query.roleId === '0';
    },
  },
};
</script>
<style lang="scss" scoped>
.container-sales {
  padding-top: 10px;
  justify-content: center;

  .container-left {
    h1 { font-size: 20px; }
    .row-1 {
      border: 1px solid black;
      border-right: none;

      li {
        width: 50px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
        border-right: 1px solid black;
      }
    }

    .top-floor {
      li:first-child { color: black; }
      li { 
        height: 40px; 
        color: #fff;
        span:first-child { font-weight: bold; }
      }
    }

    ol {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      margin: 0;

      li:first-child {
        cursor: default;
      }

      li {
        cursor: pointer;
        width: 50px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-right: 1px solid black;
      }
    }
  }

  .container-right {
    margin-top: 50px;
    margin-left: 50px;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      p { width: 30px; height: 30px; margin-right: 10px; }
      span { font-size: 14px; font-weight: bold; }
    }
  }
}
</style>