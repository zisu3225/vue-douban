import Vue from 'vue'
import Vuex from 'vuex'
import activities from './modules/activities'
import movies from './modules/movies'
import books from './modules/books'
import groups from './modules/groups'
import search from './modules/search'
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
    activities,
    movies,
    books,
    groups,
    search
  },
  strict: debug
})
