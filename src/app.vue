<script>
export default {

}
</script>

<template>
  <div class="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style src="bulma/css/bulma.css"></style>
<style src="font-awesome/css/font-awesome.css"></style>
<style>
.icon {
  margin-right: 0.4em;
}
</style>
