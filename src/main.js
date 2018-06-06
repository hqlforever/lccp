// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/normalize.css'
import './assets/css/app.css'
import axios from 'axios'
import ElementUI from 'element-ui';
import layer from 'vue-layer'

import 'element-ui/lib/theme-chalk/index.css';  
import "babel-polyfill";
import BASE_INFO from '../static/config.js'
Vue.prototype.axios = axios;
Vue.prototype.BASE_INFO = BASE_INFO;
Vue.prototype.layer = layer(Vue);
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
