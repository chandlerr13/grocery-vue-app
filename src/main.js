import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './mock-data.js';

Vue.config.productionTip = false; // note -- maybe not supposed to stay in (see pt 3 of tutorials)

let data = {
  products: mock,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')