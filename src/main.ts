import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import windowScreenWidth from "./assets/js/common"
// import server from "./server/admin"

const app = createApp(App)
// app.use(store).use(router).use(windowScreenWidth).mount('#app')
app.use(store).use(router).mount('#app')
// app.use(server)