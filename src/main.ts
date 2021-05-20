import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import windowScreenWidth from "./assets/js/common"

const app = createApp(App)
app.use(store).use(router).use(windowScreenWidth).mount('#app')
