<script>
function isToDoItem(item) {
  if (item === null || typeof item !== 'object') return false

  return ['text', 'done'].every(key => key in item)
}

export default {
  props: {
    items: {
      type: Array,
      validator(items) {
        return items.every(isToDoItem)
      }
    }
  }
}
</script>

<template>
  <div class="todos">
    <div class="item" v-for="item in items">
      {{ item.text }}
    </div>
  </div>
</template>

<style>
</style>
