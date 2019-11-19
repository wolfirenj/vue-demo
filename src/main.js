// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/reset.css'
import './assets/js/rem'

Vue.config.productionTip = false

import commonCom from './components/common'
for(var i in commonCom){
  Vue.component(i,commonCom[i])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
