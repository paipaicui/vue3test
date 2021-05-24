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

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Autoplay, Pagination]);

@Options({
  components: {
    HelloWorld,
    Swiper,
    SwiperSlide,
  },
})
export default class Home extends Vue {
  onSwiper(swiper: unknown): void {
    console.log(swiper);
  }
  onSlideChange(): void {
    console.log('swiper');
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
