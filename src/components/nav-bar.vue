<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <nav class="navbar has-bottom-border is-fixed-top is-tranparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">{{ title }}</router-link>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <slot/>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scope>
.navbar.is-fixed-top {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.navbar.has-bottom-border {
  border-bottom: 1px solid rgba(240, 240, 240, 0.97);
}
.navbar a.navbar-end {
  margin-left: auto;
}
</style>
