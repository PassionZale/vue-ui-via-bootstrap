import Vue from 'vue'
import App from './App.vue'
import BootstrapUI from "./index"

Vue.use(BootstrapUI)

new Vue({
  el: '#app',
  render: h => h(App),
})