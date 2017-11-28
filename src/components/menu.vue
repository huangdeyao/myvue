<template>
  <div class="vu-menu-wrap">
    <Menu theme="dark" width="auto" :active-name="$route.name" :open-names="['company']">
      <!-- <router-link to="/home">
        <MenuItem name="home"><span>首页</span></MenuItem>
      </router-link>
      <Submenu name="base">
        <template slot="title">
          基本信息
        </template>
      </Submenu> -->
      <template v-for="item in menuList">
        <router-link :to="item.link" v-if="!item.children">
          <MenuItem :name="item.name"><span>{{ item.text }}</span></MenuItem>
        </router-link>

        <Submenu :name="item.name" v-else>
          <template slot="title">{{ item.text }}</template>
          <router-link :to="datas.link" v-for="datas in item.children" :key="datas.name">
            <MenuItem :name="datas.name"><span>{{ datas.text }}</span></MenuItem>
          </router-link>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
const companyList = [
  {text: "公司架构", name: "frameWork", link: "/company/frameWork"},
  {text: "公司业务", name: "business", link: "/company/business"}
];
const staffList = [
  {text: "基本情况", name: "baseInfo", link: "/staff/baseInfo"},
  {text: "信息调查", name: "about", link: "/staff/about"}
];
const menuList = [
  {text: "首页", name: "home", link: "/home"},
  {text: "公司基本信息", name: "company", children: companyList},
  {text: "员工基本信息", name: "staff", children: staffList}
];
export default {
  name: 'menu',
  data() {
    return {
      menuList
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
