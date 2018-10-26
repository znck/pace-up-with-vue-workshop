<script>
export default {
  data() {
    return {
      person: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      fruits: ['Apple', 'Mango'],
      range: 4
    }
  }
}
</script>

<template>
  <div class="iterative-rendering">
    <div data-test="fruits">
      <!-- render items from fruits here -->
      <div data-test="item"></div>
    </div>

    <div data-test="person">
      <!-- render properties from person here -->
      <div data-test="property"></div>
    </div>

    <div data-test="range">
      <!-- render range here -->
      <div data-test="item"></div>
    </div>
  </div>
</template>

<style>
</style>
