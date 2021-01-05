import Vue from 'vue'
import Vuex from 'vuex'

// modules
import canvas from './modules/canvas'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    canvas,
  }
})

export default store
