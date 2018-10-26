<script>
import ToDoList from './todo-list.vue'

export default {
  data() {
    return {
      todos: [
        { text: 'Data binding', done: true },
        { text: 'Event binding', done: true },
        { text: 'Input component', done: false },
      ]
    }
  },
  components: {
    ToDoList
  }
}
</script>

<template>
  <div class="render-logic-separation">
    <ToDoList :items="todos"></ToDoList>
  </div>
</template>

<style>
</style>
