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
      <h4 class="title">荣誉看板</h4>
      <div class="bulletin-board" ref="bulletinBoard">
        <ul class="tab">
          <li @click="handleTab(0)" :class="tabActive==0?'active':''">团队奖</li>
          <li @click="handleTab(1)" :class="tabActive==1?'active':''">个人奖</li>
        </ul>
        <div class="index-chart" style="height:222px" ref="echart"></div>
      </div>
    </div>
    <div style="height:.7rem;background:#f4f6f8"></div>
    <div class="block-btn index-block-btn">
      网点拜访
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import * as echarts from 'echarts';
import 'swiper/swiper.scss';
import {
  toRefs,
  reactive,
  onMounted,
  nextTick,
  computed,
  ref,
  getCurrentInstance,
  watch,
  onActivated,
} from 'vue';
export default {
  name: 'home',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const bulletinBoard = ref();
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
          link: '/verifyTask',
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
      tabActive: 0,
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
        legend: {
          itemWidth: 8,
          itemHeight: 3,
          icon: 'roundRect',
          data: [
            '战神奖',
            '王者新锐奖',
            '团险实战王',
            '金融实战王',
            '转型实战王',
            '综拓实战王',
          ],
          bottom: '4%',
          left: '10',
          width: '90%',
          selectedMode: false,
          textStyle: {
            fontSize: 8,
            color: '#515B65',
            width: 80,
            padding: [0, 10, 0, 3],
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '5%',
          bottom: '21%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 8,
            color: '#8C9AA8',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#F4F6F8',
            },
          },
        },
        yAxis: {
          type: 'category',
          data: ['上海', '苏州', '浙江', '山东', '河北'],
          axisLabel: {
            fontSize: 8,
            color: '#8C9AA8',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#F4F6F8',
            },
          },
        },
        tooltip: false,
        series: [
          {
            name: '战神奖',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight',
            },
            data: [3, 3, 5, 1, 5],
            itemStyle: {
              color: '#ADEEC4',
            },
            barWidth: 15,
          },
          {
            name: '王者新锐奖',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight',
            },
            data: [1, 3, 5, 7, 9],
            itemStyle: {
              color: '#23CAB6',
            },
            barWidth: 15,
          },
          {
            name: '团险实战王',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight',
            },
            data: [2, 4, 6, 8, 10],
            itemStyle: {
              color: '#B2EBF2',
            },
            barWidth: 15,
          },
          {
            name: '金融实战王',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight',
            },
            data: [1, 3, 2, 5, 3],
            itemStyle: {
              color: '#81D4FA',
            },
            barWidth: 15,
          },
          {
            name: '转型实战王',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight',
            },
            data: [4, 1, 3, 5, 7],
            itemStyle: {
              color: '#42A5F5',
            },
            barWidth: 15,
          },
          {
            name: '综拓实战王',
            type: 'bar',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight',
            },
            data: [4, 1, 3, 5, 7],
            itemStyle: {
              color: '#4880FF',
            },
            barWidth: 15,
          },
          {
            name: '',
            type: 'bar',
            label: {
              show: true,
              position: 'right',
              color: '#353A40',
              fontSize: 8,
            },
            data: [15, 15, 24, 31, 41],
            itemStyle: {
              color: 'rgba(0,0,0,0)',
            },
            barWidth: 15,
            barGap: '-100%',
            z: -12,
          },
        ],
      };
      myChart.setOption(option);

      state.myCharts.push(myChart);
      nextTick(() => {
        setTimeout(() => {
          myChart.resize({
            width: bulletinBoard.value.offsetWidth,
          });
        }, 10);
      });
    };

    //路由跳转
    const link = (item) => {
      router.push(item);
    };
    //tab切换
    const handleTab = (index) => {
      state.tabActive = index;
    };

    onMounted(() => {
      initCharts();
    });
    return {
      onSwiper,
      onSlideChange,
      link,
      handleTab,
      bulletinBoard,
      ...toRefs(state),
    };
  },
  // 页面加载时
  created() {},
};
</script>
<style lang="scss">
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