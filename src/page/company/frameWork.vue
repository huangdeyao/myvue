<template>
  <div class="frame-work">
    <div class="single-page">
      <div id="department-bar" class="section"></div>
      <div id="department-pie" class="section"></div>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts');
const barOptions = {
  title: {
    text: "公司部门"
  },
  color: ['rgb(45, 140, 240)'],
  tooltip: {},
  legend: {
      data:["人员数"]
  },
  xAxis: {
    data: ["市场部", "销售部", "财务部", "研发部", "人事部", "行政部", "客服部"]
  },
  yAxis: {
    name: "人员数"
  },
  series: [
    {
      name: '人员数',
      type: 'bar',
      data: [65, 75, 21, 46, 20, 19, 19]
    }
  ]
};

const types = ['智慧养老服务', '潮爸辣妈学院', '微商城', '短信服务', '金融理财'];
const pieOptions = {
    title : {
        text: '公司业务',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: types
    },
    series : [
        {
          type: "pie",
          name: "营业额（万）",
          data: [
            {value: 2000, name: types[0]},
            {value: 1000, name: types[1]},
            {value: 700, name: types[2]},
            {value: 500, name: types[3]},
            {value: 1000, name: types[4]}
          ]
        }
    ]
};

export default {
  name: "",
  data () {
    return {
      barOptions,
      pieOptions
    }
  },
  mounted() {
    this.$nextTick(() => {
      const departmentBar = echarts.init(document.getElementById("department-bar"));
      departmentBar.setOption(this.barOptions);

      const departmentPie = echarts.init(document.getElementById("department-pie"));
      departmentPie.setOption(this.pieOptions);
    })
  }
}
</script>
<style scoped>

</style>
