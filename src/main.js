import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import draggable from 'vuedraggable'

import ApiPlugin from '@/plugins/api'

Vue.config.productionTip = false
Vue.use(ApiPlugin)
Vue.component('draggable', draggable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
