import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import components from './components/index';
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;
Vue.use(components);
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
