import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index.vue'
import bridge from '@/pages/bridge/index.vue'
import genesis from '@/pages/genesis/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/genesis',
      name: 'genesis',
      component: genesis
    },{
      path: '/bridge',
      name: 'bridge',
      component: bridge
    }
  ]
})
