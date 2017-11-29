import Vue from 'vue'
import Router from 'vue-router'
import {appRouter} from './router.js'
import store from '../store'

Vue.use(Router)

const router =  new Router({
  routes: appRouter
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

export default router;
