<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('./styles/common/normalize.css');
@import url('./styles/common/common.css');
#app, html, body{
  width: 100%;
  height: 100%;
}
</style>
