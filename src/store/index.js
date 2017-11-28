import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'

Vue.use(Vuex);

const state = {
  user: localStorage.getItem("userName") || ""
};

export default new Vuex.Store({
  state,
  mutations
})
