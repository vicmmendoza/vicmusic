import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
