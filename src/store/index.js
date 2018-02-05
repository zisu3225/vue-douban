import Vue from 'vue'
import Vuex from 'vuex'
import activities from './modules/activities'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  modules: {
    activities:
  },
  strict: debug
})
