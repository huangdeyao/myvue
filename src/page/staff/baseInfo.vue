<template>
  <div class="business">
    <div class="single-page">
      <div id="sex-pie" class="section"></div>
      <div id="age-pie" class="section"></div>
      <div id="education-pie" class="section"></div>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts');

const sexOptions = {
    title: {
      text: "性别",
      left: "center"
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['男','女']
    },
    series: [
      {
        name: "人数",
        type: "pie",
        data: [
          {name: "男", value: 186},
          {name: "女", value: 117}
        ]
      }
    ]
};

const ageType = ['20岁以下', '20-30岁', '30-40岁', '40-50岁', '50岁以上'];
const ageOptions = {
    title: {
      text: "年龄",
      left: "center"
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ageType
    },
    series: [
      {
        name: "人数",
        type: "pie",
        radius: ['50%', '70%'],
        label: {
          normal: {
            position: 'center',
            show: false
          },
          emphasis: {
            show: true,
            textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
            }
          }
        },
        data: [
          {name: ageType[0], value: 0},
          {name: ageType[1], value: 135},
          {name: ageType[2], value: 105},
          {name: ageType[3], value: 70},
          {name: ageType[4], value: 2},
        ]
      }
    ]
};

const educationType = ['大专以下', '大专', '本科', '硕士', '博士', '博士以上'];
const educationOptions = {
    title: {
      text: "学历",
      left: "center"
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: educationType
    },
    series: [
      {
        name: "人数",
        type: "pie",
        label: {
          emphasis: {
            show: true,
            textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
            }
          }
        },
        data: [
          {name: educationType[0], value: 8},
          {name: educationType[1], value: 60},
          {name: educationType[2], value: 163},
          {name: educationType[3], value: 65},
          {name: educationType[4], value: 7},
          {name: educationType[5], value: 2},
        ]
      }
    ]
};

export default {
  name: "",
  data () {
    return {
      sexOptions,
      ageOptions,
      educationOptions
    }
  },
  mounted() {
    this.$nextTick(() => {
      //性别图表
      const sexPie = echarts.init(document.getElementById("sex-pie"));
      sexPie.setOption(this.sexOptions);

      //年龄图表
      const agePie = echarts.init(document.getElementById("age-pie"));
      agePie.setOption(this.ageOptions);

      //学历图表
      const educationPie = echarts.init(document.getElementById("education-pie"));
      educationPie.setOption(this.educationOptions);
    })
  }
}
</script>
<style scoped>

</style>
