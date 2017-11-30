<template>
  <div class="vu-menu-wrap">
    <Menu theme="dark" width="auto" :active-name="$route.name" :open-names="openNamesArr" @on-select="handleMenu" ref="menu" accordion>
      <template v-for="item in menuList">
        <router-link :to="item.path + '/' + item.children[0].path" v-if="item.access === 0">
          <MenuItem :name="item.name"><span>{{ item.text }}</span></MenuItem>
        </router-link>

        <Submenu :name="item.name" v-else>
          <template slot="title">{{ item.text }}</template>
          <router-link :to="datas.path" v-for="datas in item.children" :key="datas.name">
            <MenuItem :name="datas.name"><span>{{ datas.text }}</span></MenuItem>
          </router-link>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'menu',
  data() {
    return {
      openNamesArr: []
    }
  },
  computed: mapState([
    'menuList'
  ]),
  mounted() {
    //do something after mounting vue instance
    // console.log(this.menuList)
    this.openNamesArr[0] = this.$route.meta.openNames;
    this.$nextTick(() => {
      this.$refs.menu.updateOpened();
    })
  },
  watch: {
    $route (to) {
    }
  },
  methods: {
    handleMenu() {
    }
  }
}
</script>

<style>
.vu-menu-wrap{
  width: 160px;
  height: 100%;
  background-color: #324157;
  position: fixed;
}
</style>
