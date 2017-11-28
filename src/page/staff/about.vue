<template>
  <div class="business">
    <div class="single-page">
      <div id="hobby-pie" class="section"></div>
      <div class="section">
        <Select v-model="time.value" class="time-select" @on-change="changeTimeOption">
          <Option v-for="timeItem in time.list" :value="timeItem.value" :key="timeItem.value">{{ timeItem.label }}</Option>
        </Select>

        <div id="time-bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {amateurTime} from '../../data/time.js'

const echarts = require('echarts');

const hobbyType = ['运动', '阅读', '电影', '写作', '游戏', '书法', '其他'];
const hobbyOptions = {
  title: {
    text: "兴趣爱好",
    left: "center"
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: hobbyType
  },
  series: [
    {
      name: "人数",
      type: "pie",
      data: [
        {name: hobbyType[0], value: 216},
        {name: hobbyType[1], value: 187},
        {name: hobbyType[2], value: 260},
        {name: hobbyType[3], value: 80},
        {name: hobbyType[4], value: 160},
        {name: hobbyType[5], value: 76},
        {name: hobbyType[6], value: 80}
      ]
    }
  ]
}

const timeOptions = {
  title: {
    text: ""
  },
  color: ['rgb(45, 140, 240)'],
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}h"
  },
  legend: {
      data:["时长"]
  },
  xAxis: {
    data: hobbyType
  },
  yAxis: {
    name: "时间（h）"
  },
  series: [
    {
      name: "平均时长",
      type: "bar",
      itemStyle: {
        normal: {
          barBorderRadius: 6,
          shadowBlur: 10,
          shadowColor: 'rgb(45, 140, 240)'
        }
      },
      data: []
    }
  ]
};

export default {
  name: "",
  data () {
    return {
      hobbyOptions,
      timeOptions,
      timeBar: "",
      time: {
        value: 0,
        list: [
          {
            value: 1,
            label: "周业余时间"
          },
          {
            value: 2,
            label: "月业余时间"
          },
          {
            value: 3,
            label: "年业余时间"
          }
        ],
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //兴趣爱好图表
      const hobbyPie = echarts.init(document.getElementById("hobby-pie"));
      hobbyPie.setOption(this.hobbyOptions);

      this.timeBar = echarts.init(document.getElementById("time-bar"));
      this.time.value = 1;
      this.timeBar.setOption(this.timeOptions);
    })
  },
  methods: {
    changeTimeOption(option) {
        const arrays = ['', 'week', 'month', 'year'];
        this.setTimeBarOption(arrays[option]);
    },
    setTimeBarOption(data) {
      this.timeOptions.series[0].data = amateurTime[data];
      this.timeBar.setOption(this.timeOptions);
    }
  }
}
</script>
<style scoped>
.time-select{
  width: 200px;
  margin: 15px;
}
#time-bar{
  height: 600px;
}

</style>
