import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
