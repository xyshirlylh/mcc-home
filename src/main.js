import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from './components/index';
import * as VueGoogleMaps from 'vue2-google-maps';

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;
Vue.use(components);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqaMato3Fx8Svy8pK66oBpJYHnOLkMGgE',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
