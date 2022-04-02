// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import axios from 'axios';
import Qs from 'qs';
import ElementUI from 'element-ui';
import {store} from "./store";

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
  config.headers.languagetype = 'CN';      // 举例，加上一个公共头部
  config.data = Qs.stringify(config.data); // 处理数据，可不写
  return config;
},
err => {
  return Promise.reject(err);
});

//添加一个响应拦截器
axios.interceptors.response.use(res => {
  //在这里对返回的数据进行处理
  console.log(res.data, '网络正常');
  return res.data;
}, err => {
  console.log('网络开了小差！请重试...');
  return Promise.reject(err);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
