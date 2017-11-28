<template>
  <div class="business">
    <div class="single-page">
      <div id="department-line" class="section"></div>
      <div id="department-map" class="section"></div>
    </div>
  </div>
</template>
<script>
import {businessCity} from '../../data/businessCity.js'
import '../../../node_modules/echarts/dist/extension/bmap.js'

const echarts = require('echarts');

const convertData = (data) => {
  let res = [];
  Object.keys(data).forEach((key) => {
    res.push({
      name: key,
      value: data[key]
    })
  })
  return res;
}

export default {
  name: "",
  data () {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
      this.drawMap();
    })
  },
  methods: {
    drawLine() {
      const types = ['智慧养老服务', '潮爸辣妈学院', '微商城', '短信服务', '金融理财'];
      const lineOptions = {
        title: {
          text: "2017上半年营业情况"
        },
        legend: {
          data: types
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        toolbox: {
          right: '15px',
          feature: {
              saveAsImage: {},
              magicType: {
                  type: ['line', 'bar', 'stack', 'tiled']
              }
          },
        },
        xAxis: {
          boundaryGap: false,
          data: ["一月", "二月", "三月", "四月", "五月", "六月"]
        },
        yAxis: {
          name: "营业额（万）"
        },
        series: [
          {
            name: types[0],
            type:'line',
            areaStyle: {
              normal: {}
            },
            data: [180, 168, 196, 200, 205, 211]
          },
          {
            name: types[1],
            type:'line',
            areaStyle: {
              normal: {}
            },
            data: [100, 80, 96, 108, 116, 121]
          },
          {
            name: types[2],
            type:'line',
            areaStyle: {
              normal: {}
            },
            data: [50, 56, 58, 61, 60, 60]
          },
          {
            name: types[3],
            type:'line',
            areaStyle: {
              normal: {}
            },
            data: [60, 63, 61, 57, 68, 66]
          },{
            name: types[4],
            type:'line',
            areaStyle: {
              normal: {}
            },
            data: [90, 85, 88, 92, 90, 89]
          }
        ]
      };
      const departmentLine = echarts.init(document.getElementById("department-line"));
      departmentLine.setOption(lineOptions);
    },
    drawMap() {
      const MapOptions = {
        backgroundColor: '#404a59',
        title: {
          text: "业务覆盖范围",
          left: "center",
          subtext: "虚拟数据",
          textStyle: {
              color: '#333'
          }
        },
        itemStyle: {
          normal: {
            border: '1px solid rgb(45, 140, 240)'
          }
        },
        tooltip : {
            trigger: 'item'
        },
        bmap: {
          center: [116.307698, 40.056975],
          zoom: 5,
          roam: true,
          mapStyle: {
              style: 'normal'
          }
        },
        series: [
          {
              name: '业务地区',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: convertData(businessCity),
              symbolSize: function (val) {
                  return 20;
              },
              showEffectOn: 'render',
              rippleEffect: {
                  brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                  normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: true
                  }
              },
              itemStyle: {
                  normal: {
                      color: 'purple',
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              zlevel: 1
          }
        ]
      };
      const departmentMap = echarts.init(document.getElementById("department-map"));
      departmentMap.setOption(MapOptions);
    }
  }
}
</script>
<style scoped>
#department-map
{
  height: 600px;
  padding: 0px;
}
</style>
