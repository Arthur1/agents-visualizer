import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueKonva from 'vue-konva'
import store from './store'

import './assets/scss/app.scss'

Vue.config.productionTip = false

Vue.use(VueKonva)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
