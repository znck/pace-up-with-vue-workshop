<script>
export default {
  props: {
    label: String,
    value: String
  }

}
</script>

<template>
  <label>
    <div>{{ label }}</div>

    <input type="text" data-test="input">
  </label>
</template>

<style>
</style>
