import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showContectUs: false,
    lang: 'en',
 
  },
  mutations: {
    flip(state) {
      state.showContectUs = !state.showContectUs
    },
    changeLang(state,what ) {
      state.lang = what
    }
  },
  actions: {
  },
  modules: {
  }
})
