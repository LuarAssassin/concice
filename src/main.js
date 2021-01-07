import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 在最后引用自己的样式文件覆盖样式
import '@/assets/css/minimal-style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
