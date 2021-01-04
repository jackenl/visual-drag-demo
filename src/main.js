import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import './assets/style/reset.css'
import './assets/style/animate.css'
import 'element-ui/lib/theme-chalk/index.css'

// plugins
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
