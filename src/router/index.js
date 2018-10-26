import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@state/store'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,

  mode: 'history',

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  const authRequired = routeTo.matched.some(route => route.meta.authRequired)

  if (authRequired && !store.getters['auth/loggedIn'])
    return next({ name: 'login', query: { redirectFrom: routeTo.fullPath } })

  return next()
})

export default router
