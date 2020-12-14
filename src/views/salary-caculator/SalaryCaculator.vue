<template>
  <div class="salary-caculator">
    <div class="flex-row align-items-center">
      <div class="flex-1 flex-row align-items-center">
        <select class="dropdown dropdown-year" v-model="currentYear">
          <option v-for="yy in Object.keys(json)" :key="yy">{{ yy }}</option>
        </select>

        <select class="dropdown dropdown-month" v-model="currentMonth">
          <template v-for="mm in Object.keys(json[currentYear])">
            <option
              :key="mm"
              :disabled="Number(currentYear) === 2020 && Number(mm) === 10"
            >
              {{ mm }}
            </option>
          </template>
        </select>
      </div>

      <div class="row-language">
        <span @click="onSwitchLanguage('zh')">中文</span
        ><span @click="onSwitchLanguage('en')">English</span>
      </div>
    </div>

    <gap :height="50" />

    <table class="last-month">
      <tr class="text-align-center">
        <td colspan="2" class="justify-content-center font-bold">
          {{ formatMonth(currentMonth - 1 === 0 ? 12 : currentMonth - 1) }}
        </td>
      </tr>
      <tr>
        <td>{{ $t("message.working-days") }}</td>
        <td>
          <input type="number" v-model="lastM.workingDays" />
        </td>
      </tr>
      <tr>
        <td>{{ $t("message.working-days-at-weekend") }}</td>
        <td><input type="number" v-model="lastM.satDays" /></td>
      </tr>
      <tr>
        <td>{{ $t("message.unit-price") }}<span>（$/hour）</span></td>
        <td><input type="number" v-model="lastM.unit" /></td>
      </tr>
      <tr>
        <td>{{ $t("message.total-hours") }}<span>（hours）</span></td>
        <td><input type="number" v-model="lastM.totalHours" /></td>
      </tr>
    </table>

    <table class="current-month">
      <tr class="text-align-center">
        <td colspan="2" class="justify-content-center font-bold">
          {{ formatMonth(currentMonth) }}
        </td>
      </tr>
      <tr>
        <td>{{ $t("message.working-days") }}</td>
        <td><input type="number" v-model="currentM.workingDays" /></td>
      </tr>
      <tr>
        <td>{{ $t("message.working-days-at-weekend") }}</td>
        <td><input type="number" v-model="currentM.satDays" /></td>
      </tr>
      <tr>
        <td>{{ $t("message.unit-price") }}<span>（$/hour）</span></td>
        <td><input type="number" v-model="currentM.unit" /></td>
      </tr>
      <tr>
        <td>{{ $t("message.total-hours") }}<span>（hours）</span></td>
        <td><input type="number" v-model="currentM.totalHours" /></td>
      </tr>
    </table>

    <table class="extra-fee">
      <tr>
        <td>{{ $t("message.dining-fee") }}</td>
        <td><span>$</span><input type="number" v-model="foodFee" /></td>
      </tr>
      <tr>
        <td>{{ $t("message.foreman-fee") }}</td>
        <td><span>$</span><input type="number" v-model="leadingBonus" /></td>
      </tr>
    </table>

    <div class="flex-row justify-content-center">
      <button @click="onCalculate()">{{ $t("message.label-caculate") }}</button>
    </div>

    <table class="result">
      <tr>
        <!-- <td>{{ currentYear }}年{{ currentMonth }}月工资总计：</td> -->
        <td>
          {{
            $t("message.label-total-salary", {
              year: currentYear,
              month: formatMonth(currentMonth),
            })
          }}
        </td>
        <td>
          <span class="total-salary">${{ totalSalary }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
const obj = {
  zh: {
    1: "1 月",
    2: "2 月",
    3: "3 月",
    4: "4 月",
    5: "5 月",
    6: "6 月",
    7: "7 月",
    8: "8 月",
    9: "9 月",
    10: "10 月",
    11: "11 月",
    12: "12 月",
  },
  en: {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "Novermber",
    12: "December",
  },
};
export default {
  data() {
    return {
      lang: '',
      currentYear: "",
      currentMonth: "",
      totalSalary: 0,
      lastM: {
        workingDays: 0,
        satDays: 0,
        unit: 0,
        totalHours: 0,
      },
      currentM: {
        workingDays: 0,
        satDays: 0,
        unit: 0,
        totalHours: 0,
      },
      foodFee: 0,
      leadingBonus: 0,
      json: {
        2020: {
          10: { working: 22, weekend: 5, ph: 0 },
          11: { working: 21, weekend: 3, ph: 1 },
          12: { working: 22, weekend: 4, ph: 1 },
        },
        2021: {
          1: { working: 20, weekend: 5, ph: 1 },
          2: { working: 19, weekend: 3, ph: 2 },
          3: { working: 23, weekend: 4, ph: 0 },
          4: { working: 21, weekend: 4, ph: 1 },
          5: { working: 19, weekend: 4, ph: 3 },
          6: { working: 22, weekend: 4, ph: 0 },
          7: { working: 21, weekend: 5, ph: 1 },
          8: { working: 21, weekend: 4, ph: 1 },
          9: { working: 22, weekend: 4, ph: 0 },
          10: { working: 21, weekend: 5, ph: 0 },
          11: { working: 21, weekend: 4, ph: 1 },
          12: { working: 32, weekend: 3, ph: 1 },
        },
      },
    };
  },
  created() {
    this.initData();
    this.lang = this.$i18n.locale;
  },
  methods: {
    formatMonth(month) {
      return obj[this.$i18n.locale][month];
    },

    initData() {
      const date = new Date();
      const yy = date.getFullYear();
      const mm = date.getMonth() + 1;
      const dd = date.getDate();

      this.currentMonth = dd >= 7 ? mm : mm - 1;
      this.currentYear = yy;
    },

    onCalculate() {
      const yy = this.currentYear;
      const { working, weekend, ph } = this.json[yy][this.currentMonth];
      const { workingDays, satDays, unit, totalHours } = this.currentM;
      console.log(unit, totalHours);

      // 本月基本工资
      const basicS =
        ((Number(workingDays) + Number(satDays) * 0.5 + ph) /
          (working + weekend * 0.5 + ph)) *
        450;
      // 本月加班工资
      const extraS = (Number(workingDays) * 2 + Number(satDays) * 6) * 3.54;

      const { working: workingForL, weekend: weekendForL, ph: phForL } =
        this.currentMonth - 1 === 0
          ? this.json[yy - 1][12]
          : this.json[yy][this.currentMonth - 1];
      const {
        workingDays: workingDaysL,
        satDays: satDaysL,
        unit: unitL,
        totalHours: totalHoursL,
      } = this.lastM;

      // 上月基本工资
      const basicSL =
        ((Number(workingDaysL) + Number(satDaysL) * 0.5 + ph) /
          (workingForL + weekendForL * 0.5 + phForL)) *
        450;
      // 上月加班工资
      const extraSL = (Number(workingDaysL) * 2 + Number(satDaysL) * 6) * 3.54;
      // 上月奖金
      const bonus = unitL * totalHoursL - basicSL - extraSL;

      // 当月工资 = 当月基本工资 + 当月加班工资 + 上月生产奖金 - 餐食费 + 领班费
      this.totalSalary = (
        basicS +
        extraS +
        bonus -
        Number(this.foodFee) +
        Number(this.leadingBonus)
      ).toFixed(2);
    },

    onSwitchLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style lang="scss" scoped type="text/scss">
.salary-caculator {
  padding: 5rem 3rem 3rem 3rem;

  .row-language {
    span:first-child {
      padding-right: 20px;
    }
  }
  .dropdown {
    padding: 10px 20px;
  }

  .dropdown-year {
    margin-right: 30px;
  }

  table {
    width: 100%;
    border: 1px solid #bebebe;

    tr {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #bebebe;
      td {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        padding: 10px;

        input {
          width: 100px;
          height: 30px;
        }
        span {
          font-size: 12px;
        }
      }
      td:nth-child(1) {
        flex: 3;
      }

      td:nth-child(2) {
        flex: 2;
        justify-content: flex-end;
      }
    }
  }

  button {
    margin: 20px 0;
    width: 60%;
    padding: 10px 0;
    background-color: #4a91f2;
    color: #fff;
    border: none;
    font-size: 20px;
  }

  .current-month {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .total-salary {
    font-weight: bold;
    font-size: 28px;
  }
}
</style>