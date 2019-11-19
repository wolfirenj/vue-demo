import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/pages/index'
import index2 from '../components/pages/index2'
import index3 from '../components/pages/index3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: index
    },
    {
      path: '/index2',
      name: 'status',
      component: index2
    },
    {
      path: '/index3',
      name: 'complete',
      component: index3
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
