<script>
export default {
  data() {
    return {
      name: 'John'
    }
  }
}
</script>

<template>
  <div class="two-way-binding">
    <input type="text">

    <p>
      Hello <span data-test="target">{{ name }}</span>
    </p>
  </div>
</template>

<style>
</style>
