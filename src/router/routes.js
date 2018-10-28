import HomePage from './views/home.vue'
import PageNotFound from './views/404.vue'
import LoginPage from './views/login.vue'
import LogoutPage from './views/logout.vue'

import CheckoutPage from './views/checkout.vue'
import WishlistPage from './views/wishlist.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  // write code here
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: PageNotFound,
    props: true,
  },
  {
    path: '*',
    redirect: '404',
  },
]
