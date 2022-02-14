<template>
  <div class="home my">
    <div class="header">
      <div class="bar">我的</div>
      <div class="info">
        <div class="my-photo">
          <img src="~@/assets/images/photo.png" alt="">
        </div>
        <div class="my-msg">
          <p>陈伟婷</p>
          <p><span>工号: </span>022</p>
          <p><span>职级: </span>高级经理</p>
        </div>
        <div class="my-star-box">
          <div class="star">
            <p>诚信星级</p>
            <p>五颗星</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <swiper>
        <swiper-slide>
          <h4>保费考核总览<span>(万元)</span></h4>
          <div class="circle-charts">

          </div>
        </swiper-slide>
      </swiper>
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
  name: 'my',

  setup() {
    const { proxy } = getCurrentInstance() as any;
    const state: any = reactive({
      myCharts: [],
      tabActive: 0,
    });

    return {
      ...toRefs(state),
    };
  },
  // 页面加载时
  created() {},
};
</script>
