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

    <swiper :loop="true" :autoplay="true" :slides-per-view="1" :space-between="50" navigation
      :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>

    <swiper @swiper="setControlledSwiper"> </swiper>
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
  display: inline-flex;
  justify-content: flex-end;
}
.nav {
  height: 0.68rem;
  line-height: 0.68rem;
  background: $blue;
}
</style>
