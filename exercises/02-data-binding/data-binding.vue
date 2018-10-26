<script>
export default {
  data() {
    return {
      name: 'John',
      a: 0.1,
      b: 0.2,
      classNames: ['content']
    }
  }
}
</script>

<template>
  <div class="content">
    <h1>Hello John!</h1>

    <p data-test="expr">a + b = 0.3</p>
  </div>
</template>

<style>
.content {
  color: crimson;
}
</style>
