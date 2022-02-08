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
        <swiper :loop="true" :autoplay="true" :slides-per-view="1" :space-between="0" navigation
          :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
          @slideChange="onSlideChange">
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
      <div class="index-chart" style="height:500px" ref="echart"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import * as echarts from 'echarts';
import 'swiper/swiper.scss';
import {
  toRefs,
  reactive,
  onMounted,
  nextTick,
  computed,
  getCurrentInstance,
  watch,
  onActivated,
} from 'vue';
var screen = require('@/assets/js/common.ts');
export default {
  name: 'home',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const state: any = reactive({
      bannerList: [
        {
          icon: require('@/assets/images/signin.png'),
          text: '签到',
          link: '',
          isNew: false,
        },
        {
          icon: require('@/assets/images/ml2.png'),
          text: '审核任务',
          link: '',
          isNew: false,
        },
        {
          icon: require('@/assets/images/ml3.png'),
          text: '拜访查询',
          link: '',
          isNew: false,
        },
        {
          icon: require('@/assets/images/ml4.png'),
          text: '神行太保',
          link: '',
          isNew: true,
        },
        {
          icon: require('@/assets/images/ml5.png'),
          text: '我的保单',
          link: '',
          isNew: false,
        },
        {
          icon: require('@/assets/images/ml6.png'),
          text: '我的催缴',
          link: '',
          isNew: false,
        },
        {
          icon: require('@/assets/images/ml7.png'),
          text: '询价查询',
          link: '',
          isNew: false,
        },
      ],
      myCharts: [],
    });
    const onSwiper = (swiper) => {
      console.log('swiper');
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    // 初始化近7天产品追溯扫码统计
    const initCharts = () => {
      const myChart = echarts.init(proxy.$refs.echart);
      const option = {
        grid: {
          top: 15,
          right: 15,
          bottom: 20,
          left: 30,
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1天', '2天', '3天', '4天', '5天', '6天', '7天'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [12, 32, 11, 34, 90, 23, 21],
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [22, 82, 91, 24, 90, 30, 30],
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [50, 32, 18, 14, 90, 30, 50],
          },
        ],
      };
      myChart.setOption(option);
      state.myCharts.push(myChart);
    };
    onMounted(() => {
      initCharts();
    });
    return {
      onSwiper,
      onSlideChange,
      ...toRefs(state),
    };
  },
  // 页面加载时
  created() {
    screen.windowScreenWidth();
  },
};
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