import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showContectUs: false
  },
  mutations: {
    flip(state) {
      state.showContectUs = !state.showContectUs
    }
  },
  actions: {
  },
  modules: {
  }
})
