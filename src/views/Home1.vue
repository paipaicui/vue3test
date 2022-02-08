<template>
  <div class="home">
    <div class="nav flex-box">
      <div class="left">
        首页
      </div>
      <div class="right">
        <span id="tucao"></span>
        <span id="message">
          <i class="badge">99</i>
        </span>
      </div>
    </div>
    <div class="index-banner">
      <div class="banner-wrapper">
        <swiper :loop="true" :autoplay="true" :slides-per-view="1" :space-between="0" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide><img src="~@/assets/images/banner@2x.png" alt="" srcset=""></swiper-slide>
          <swiper-slide><img src="~@/assets/images/banner2.jpg" alt="" srcset=""></swiper-slide>
          <swiper-slide><img src="~@/assets/images/banner3.jpg" alt="" srcset=""></swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="index-menu">
      <ul>
        <li v-for="(item,key) in bannerList" :key="key" :class="item.isNew?'active':''" @click="link(item.link)">
          <img v-bind:src="item.icon" alt="" srcset="">
          <p>{{item.text}}</p>
        </li>
        <li :class="newMore?'newMore':''" @click="golink()">
          <img src="~@/assets/images/ml8.png">
          <p>更多</p>
        </li>
      </ul>
    </div>

    <div class="index-honor">
      <!-- <div class="index-chart" ref="chart"></div> -->
      <div class="index-chart" ref="echart"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import SwiperCore, { Autoplay, Pagination } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

var screen = require("@/assets/js/common.ts");
SwiperCore.use([Autoplay, Pagination]);
import * as echarts from "echarts/core";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  LegendComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart,
]);

@Options({
  components: {
    HelloWorld,
    Swiper,
    SwiperSlide,
  },
})
export default class Home extends Vue {
  newMore: boolean = true;
  bannerList: object[] = [
    {
      icon: require("@/assets/images/signin.png"),
      text: "签到",
      link: "",
      isNew: false,
    },
    {
      icon: require("@/assets/images/ml2.png"),
      text: "审核任务",
      link: "",
      isNew: false,
    },
    {
      icon: require("@/assets/images/ml3.png"),
      text: "拜访查询",
      link: "",
      isNew: false,
    },
    {
      icon: require("@/assets/images/ml4.png"),
      text: "神行太保",
      link: "",
      isNew: true,
    },
    {
      icon: require("@/assets/images/ml5.png"),
      text: "我的保单",
      link: "",
      isNew: false,
    },
    {
      icon: require("@/assets/images/ml6.png"),
      text: "我的催缴",
      link: "",
      isNew: false,
    },
    {
      icon: require("@/assets/images/ml7.png"),
      text: "询价查询",
      link: "",
      isNew: false,
    },
  ];
  public created(): void {
    screen.windowScreenWidth();
  }
  public mounted(): void {
    let _this = this;
    this.$nextTick(() => {
      _this.drawCharts();
    });
  }
  drawCharts() {
    // let myChart: any = echarts.init(this.$refs.chart as HTMLCanvasElement);

    let date: string[] = [];
    for (var i = 0; i < this.mGetDate() + 2; i++) {
      if (!date[i]) {
        date[i] = " ";
      }
    }

    let option: ECOption = {
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        type: "category",
        data: date,
        axisLabel: {
          show: false,
        },
      },
      grid: {
        left: 0,
        right: 1,
        top: "15%",
        bottom: 10,
        containLabel: true,
      },
      yAxis: {
        type: "value",
        max: 125,
        position: "right",
        axisLabel: {
          inside: true,
          color: "#999",
          fontSize: 7,
          formatter: function (value, index) {
            var t = "";
            if (value > 100) {
              t = "超额";
            } else {
              t = value + "%";
            }
            return t;
          },
          padding: [0, -5, 5, 0],
        },
        interval: 25,
        axisTick: {
          show: false,
        },
        axisPointer: {
          show: false,
          type: "none",
        },
        axisLine: {
          lineStyle: {
            color: "#F5F7F8",
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#F5F7F8",
          },
        },
      },
      series: [
        {
          data: [0, 0, 10, 25, 50, 125],
          type: "line",
          symbol: "none",
          smooth: true,
          lineStyle: {
            color: "#6C50FF",
            width: 1,
          },
          markPoint: {
            symbol: "image://../static/images/charts_point1.png",
            symbolSize: 20,
            data: [
              {
                name: "",
                value: 0,
                xAxis: 5,
                yAxis: 125,
              },
            ],
          },
        },
        {
          data: [
            20, 30, 45, 45, 65, 75, 30, 45, 45, 75, 20, 30, 45, 45, 65, 75, 30,
            45, 45, 75, 20, 30, 45, 45, 65, 75, 30, 45, 45, 75, 90,
          ],
          type: "line",
          symbol: "none",
          smooth: true,
          lineStyle: {
            color: "#0077FF",
            width: 1,
          },
          markPoint: {
            symbol: "image://../static/images/charts_point2.png",
            symbolSize: 20,
            data: [
              {
                name: "",
                value: 0,
                xAxis: 30,
                yAxis: 90,
              },
            ],
          },
        },
        {
          data: [0, 20, 20, 25, 40, 45],
          type: "line",
          symbol: "none",
          smooth: true,
          lineStyle: {
            color: "#04CE7C",
            width: 1,
          },
          markPoint: {
            symbol: "image://../static/images/charts_point3.png",
            symbolSize: 20,
            data: [
              {
                name: "",
                value: 0,
                xAxis: 5,
                yAxis: 45,
              },
            ],
          },
        },
      ],
    };
    let honorOption: ECOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        itemWidth: 8,
        itemHeight: 3,
        icon: "roundRect",
        data: [
          "战神奖",
          "王者新锐奖",
          "团险实战王",
          "金融实战王",
          "转型实战王",
          "个团实战王",
        ],
        bottom: "4%",
        left: "10",
        width: "90%",
        selectedMode: false,
        textStyle: {
          fontSize: 8,
          color: "#515B65",
          width: 80,
          padding: [0, 10, 0, 3],
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        top: "5%",
        bottom: "21%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLabel: {
          fontSize: 8,
          color: "#8C9AA8",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#F4F6F8",
          },
        },
      },
      yAxis: {
        type: "category",
        data: ["上海", "苏州", "浙江", "山东", "河北"],
        axisLabel: {
          fontSize: 8,
          color: "#8C9AA8",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#F4F6F8",
          },
        },
      },
      series: [
        {
          name: "战神奖",
          type: "bar",
          stack: "总量",
          label: {
            show: false,
            position: "insideRight",
          },
          data: [3, 3, 5, 1, 5],
          itemStyle: {
            color: "#ADEEC4",
          },
          barWidth: 15,
        },
        {
          name: "王者新锐奖",
          type: "bar",
          stack: "总量",
          label: {
            show: false,
            position: "insideRight",
          },
          data: [1, 3, 5, 7, 9],
          itemStyle: {
            color: "#23CAB6",
          },
          barWidth: 15,
        },
        {
          name: "团险实战王",
          type: "bar",
          stack: "总量",
          label: {
            show: false,
            position: "insideRight",
          },
          data: [2, 4, 6, 8, 10],
          itemStyle: {
            color: "#B2EBF2",
          },
          barWidth: 15,
        },
        {
          name: "金融实战王",
          type: "bar",
          stack: "总量",
          label: {
            show: false,
            position: "insideRight",
          },
          data: [1, 3, 2, 5, 3],
          itemStyle: {
            color: "#81D4FA",
          },
          barWidth: 15,
        },
        {
          name: "转型实战王",
          type: "bar",
          stack: "总量",
          label: {
            show: false,
            position: "insideRight",
          },
          data: [4, 1, 3, 5, 7],
          itemStyle: {
            color: "#42A5F5",
          },
          barWidth: 15,
        },
        {
          name: "个团实战王",
          type: "bar",
          stack: "总量",
          label: {
            show: false,
            position: "insideRight",
          },
          data: [4, 1, 3, 5, 7],
          itemStyle: {
            color: "#4880FF",
          },
          barWidth: 15,
        },
        {
          name: "",
          type: "bar",
          label: {
            show: true,
            position: "right",
            color: "#353A40",
            fontSize: 8,
          },
          data: [15, 15, 24, 31, 41],
          itemStyle: {
            color: "rgba(0,0,0,0)",
          },
          barWidth: 15,
          barGap: "-100%",
          z: -12,
        },
      ],
    };

    this.$nextTick(() => {
      const chart = echarts.init(this.$refs.echart as HTMLCanvasElement);
      console.log(chart);
      chart.clear();
      chart.resize();
      chart.setOption(honorOption);
    });
  }
  mGetDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = new Date(year, month, 0);
    return d.getDate();
  }
}
</script>

<style lang="scss" scoped>
:deep(.swiper-container-horizontal > .swiper-pagination-bullets) {
  height: 20px;
  display: inline-block;
  position: absolute;
  bottom: 10px;
  font-size: 14px;
  width: auto;
  right: 10px;
  text-align: right;
}

:deep(.swiper-pagination-bullet) {
  width: 0.06rem;
  height: 0.06rem;
  opacity: 1 !important;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.1rem;
  margin: 0 0.04rem !important;
}
:deep(.swiper-pagination-bullet-active) {
  width: 0.16rem;
  height: 0.06rem;
  background: #f4f6f8;
  border-radius: 0.1rem;
}
</style>
