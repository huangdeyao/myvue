<template>
  <div class="vu-login">
    <div class="login-wrap" @keyup.enter="handleSubmit('formValidate')">
      <header class="title"><h2>欢迎你的到来</h2></header>
      <div class="content">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="top">
          <FormItem prop="userName">
            <Input placeholder="请输入用户名" v-model="formValidate.userName">
              <Icon type="person" slot="prepend" size=19></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input placeholder="请输入密码" v-model="formValidate.password" type="password">
              <Icon type="locked" slot="prepend" size=19></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" class="login-btn" @click="handleSubmit('formValidate')">登录</Button>
            <span>输入任意用户名和密码即可</span>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  name: "",
  data: () => ({
    formValidate: {
      userName: "",
      password: ""
    },
    ruleValidate: {
      userName: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
      password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
    }
  }),
  methods: {
    ...mapMutations([
      'USER_NAME'
    ]),
    handleSubmit (name) {
      var vm = this;
      vm.$refs[name].validate((valid) => {
        if(valid){
          vm.USER_NAME(vm.formValidate.userName);
          vm.$Message.success('登录成功');
          setTimeout(function () {
            vm.$router.push({path: 'home'});
          }, 2000);
        }
      })
    }
  }
}
</script>
<style scoped>
  .vu-login{
    height: 100%;
    width: 100%;
    background: url('../assets/indexbg2.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .login-wrap{
    width: 400px;
    height: 500px;
    border: 1px solid rgba(0, 0, 0);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(30%);
    border-radius: 4px;
    color: #fff;
  }
  .login-wrap .title{
    text-align: center;
    padding: 50px 0px;
  }
  .login-wrap .content{
    width: 80%;
    margin: 0 auto;
  }
  .login-btn{
    width: 100%;
    margin-bottom: 20px;
  }
</style>
