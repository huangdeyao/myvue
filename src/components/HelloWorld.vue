<template>
  <div class="hello">
    <vu-header></vu-header>
    <vu-menu></vu-menu>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
import Header from './header'
import Menu from './menu'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'vu-header': Header,
    'vu-menu': Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
}
</style>
