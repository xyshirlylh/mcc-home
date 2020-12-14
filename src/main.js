import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from './components/index';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueCarousel from 'vue-carousel';
import messages from './i18n/index';
import VueI18n from 'vue-i18n';
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
Vue.use(VueCarousel);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
