import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SelectWacth',
      name: 'SelectWacth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SelectWacth.vue')
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/User',
      name : 'User',
      component: () => import('./views/User.vue')
    }
  ]
})
