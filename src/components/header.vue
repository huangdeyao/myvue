<template>
  <div class="vu-header-wrap">
    <div class="container">
      <h2>公司管理系统</h2>
      <template v-if="user">
        <Button size="large" type="text" class="user-admin">你好，{{ user }}</Button>
        <Button size="large" type="text" class="out-login-btn" @click="outLogin">退出</Button>
      </template>
      <Button size="large" type="text" class="go-login-btn" @click="goLogin" v-else>登录</Button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'header',
  data () {
    return {

    }
  },
  computed: mapState([
    'user'
  ]),
  methods: {
    ...mapMutations([
      'OUT_LOGIN'
    ]),
    goLogin() {
      this.$router.push({path: '/login'});
    },
    outLogin() {
      this.$Modal.confirm({
        title: "信息",
        content: "确定要退出吗",
        onOk: () => {
          this.OUT_LOGIN();
        }
      })
    }
  }
}
</script>

<style>
.vu-header-wrap{
    background-color: #242f42;
    position: relative;
}
.container{
    height: 60px;
    color: #fff;
    line-height: 60px;
    width: 90%;
    margin: 0 auto;
    position: relative;
}
.go-login-btn,
.user-admin,
.out-login-btn
{
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 16px;
}
.user-admin{
  right: 65px;
  border-right: 3px solid #ccc;
}
.user-admin:hover{
  color: inherit!important;
  border-right: 3px solid #ccc;
}
</style>
