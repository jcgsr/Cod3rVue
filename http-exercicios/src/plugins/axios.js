import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://cod3er-vue.firebaseio.com/'

Vue.use({
   install(Vue) {
      Vue.prototype.$http = axios
   }
})