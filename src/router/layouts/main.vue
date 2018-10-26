<script>
import NavBar from '@components/nav-bar.vue'
import NavBarDropdown from '@components/nav-bar-dropdown.vue'

import { authGetters, cartSummaryGetters } from '@state/helpers'

export default {
  components: { NavBar, NavBarDropdown },
  computed: {
    ...authGetters,
    ...cartSummaryGetters
  }
}
</script>

<template>
  <div class="main">
    <NavBar title="My Store" class="nav">
      <NavBarDropdown v-if="loggedIn" :label="currentUser.name">
        <router-link
          :to="{ name: 'checkout' }"
          class="navbar-item"
        >Checkout (${{ totalCartAmount }})</router-link>
        <router-link :to="{ name: 'wishlist' }" class="navbar-item">Wishlist</router-link>
        <hr class="navbar-divider">
        <router-link :to="{ name: 'logout' }" class="navbar-item">Log out</router-link>
      </NavBarDropdown>
      <div class="navbar-item" v-if="!loggedIn && $route.name !== 'login'">
        <router-link :to="{ name: 'login' }" class="button is-light">Log in</router-link>
      </div>
    </NavBar>
    <div class="container is-fluid">
      <slot/>
    </div>
  </div>
</template>

<style>
.nav {
  margin-bottom: 24px;
}
</style>
