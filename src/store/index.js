import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import {appRouter} from '../router/router.js'
import Util from '../util/util'

Vue.use(Vuex);

const state = {
  user: localStorage.getItem("userName") || "",
  menuList: [],
  token: ''
};
state.menuList = Util.getMenuList(appRouter);

export default new Vuex.Store({
  state,
  mutations
})
