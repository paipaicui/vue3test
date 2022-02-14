<template>
  <div class="home">
    <div class="my-header">
      <div class="top">学习</div>
    </div>
    <div class="page-main">
      <ul class="content">
        <li id="school">智学院</li>
        <li id="sky">空中课堂</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
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
  name: 'study',

  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();

    const state: any = reactive({});
    //路由跳转
    const link = (item) => {
      router.push(item);
    };

    return {
      ...toRefs(state),
    };
  },
  // 页面加载时
  created() {},
};
</script>
<style lang="scss" scoped>
.content {
  li {
    position: relative;
    margin: 0 0.26rem;
    font-size: 0.2rem;
    position: relative;
    padding-left: 0.46rem;
    line-height: 1.1rem;
    color: #fff;
    height: 1.1rem;
    overflow: hidden;
    border-radius: 0.1rem;
    margin-bottom: 0.26rem;
    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      height: 0.96rem;
      width: 1.08rem;
    }
    &#school {
      background: linear-gradient(161deg, #0077ff 0, #4bb3fd 100%);
      &::before {
        background: url(~@/assets/images/study1.png) top right / 100% 100%
          no-repeat;
      }
    }
    &#sky {
      background: linear-gradient(341deg, #93a0ff 0, #586cff 100%);
      &::before {
        background: url(~@/assets/images/study2.png) top right / 100% 100%
          no-repeat;
      }
    }
  }
}
</style>
