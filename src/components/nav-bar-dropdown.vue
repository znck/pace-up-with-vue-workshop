<script>
export default {
  props: {
    icon: {
      type: [String, Boolean],
      default: false
    },
    label: {
      required: true,
      type: String
    }
  },

  data: () => ({
    open: false
  }),

  computed: {
    hasIcon() {
      return typeof (this.icon) === 'string' && this.icon.length > 0
    }
  },

  methods: {
    toggle() {
      this.open = !this.open

      this.open ? this.registerClickAwayHandler() : this.unregisterClickAwayHandler()
    },

    registerClickAwayHandler() {
      document.addEventListener('click', this.clickAwayHandler)
    },

    unregisterClickAwayHandler() {
      document.removeEventListener('click', this.clickAwayHandler)
    },

    clickAwayHandler(e) {
      if (!this.open) {
        return this.unregisterClickAwayHandler()
      }

      if (e.target !== this.$el && !this.$el.contains(e.target)) {
        return this.toggle()
      }
    }
  },

  beforeDestroy() {
    this.unregisterClickAwayHandler()
  }
}
</script>


<template>
  <div class="navbar-item has-dropdown is-hoverable" :class="{ 'is-active': open }">
    <a class="navbar-link" @click="toggle">
      <span class="icon" v-if="hasIcon">
        <i class="fa" :class="`fa-${icon}`"></i>
      </span>
      <span :class="{ 'is-hidden-mobile': hasIcon }">{{ label }}</span>
    </a>
    <div class="navbar-dropdown is-right">
      <slot/>
    </div>
  </div>
</template>
