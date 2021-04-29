// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ...
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
// ...

Vue.use(VueFullPage);
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
/* eslint-disable no-new */
import Antd from 'ant-design-vue';
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
