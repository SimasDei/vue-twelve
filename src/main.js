import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from './App.vue';
/* eslint-disable */
import firebae from './firebase';
import auth from './auth';
/* eslint-enable */
import router from './router';
import store from './store/index';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
