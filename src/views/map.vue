<template>

  <div class="page">
    <div class="container">
      <router-view />
    </div>
    <ul class="footer-menu">
      <li v-for="(item,key) in menu" :key="key" :class="activeIndex==key?'active':''" @click="handleIndex(key)">
        <img v-bind:src="activeIndex==key?item.iconActive:item.icon" alt="" srcset="">
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'map',
  // 页面加载时
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const state: any = reactive({
      menu: [
        {
          icon: require('@/assets/images/fm0.png'),
          iconActive: require('@/assets/images/fm0_active.png'),
          text: '首页',
          link: '/home',
        },
        {
          icon: require('@/assets/images/fm1.png'),
          iconActive: require('@/assets/images/fm1_active.png'),
          text: '待办',
          link: '/task',
        },
        {
          icon: require('@/assets/images/fm2.png'),
          iconActive: require('@/assets/images/fm2_active.png'),
          text: '学习',
          link: '/study',
        },
        {
          icon: require('@/assets/images/fm3.png'),
          iconActive: require('@/assets/images/fm3_active.png'),
          text: '我的',
          link: '/my',
        },
      ],
      activeIndex: 0,
    });
    const handleIndex = (key) => {
      state.activeIndex = key;
      router.push(state.menu[key].link);
    };
    return {
      handleIndex,
      ...toRefs(state),
    };
  },
};
</script>
