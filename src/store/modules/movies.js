import {GET_MOVIES} from '@/store/actions'
import {getHotMovies, getNewMovies, getTopMovies} from '@/lib/api'
// import * as Util from '@/lib/util'

const state = {
  hotMovies: [],
  newMovies: [],
  topMovies: [],
  loading: false
}

const actions = {
  async [GET_MOVIES] ({commit, state}) {
    try {
      commit({
        type: `${GET_MOVIES}_PENDING`
      })
      let resHotMovies = await getHotMovies()
      let resNewMovies = await getNewMovies()
      let resTopMovies = await getTopMovies()
      commit({
        type: `${GET_MOVIES}_FULFILLED`,
        hotMovies: resHotMovies.data.subjects,
        newMovies: resNewMovies.data.subjects,
        topMovies: resTopMovies.data.subjects
      })
    } catch (err) {
      commit({
        type: `${GET_MOVIES}_REJECTED`
      })
    }
  }
}

const mutations = {
  [`${GET_MOVIES}_PENDING`] (state) {
    state.loading = true
  },
  [`${GET_MOVIES}_FULFILLED`] (state, payload) {
    state.loading = false
    state.hotMovies = payload.hotMovies
    state.newMovies = payload.newMovies
    state.topMovies = payload.topMovies
  },
  [`${GET_MOVIES}_REJECTED`] (state) {
    state.loading = false
  }
}
export default {
  state,
  actions,
  mutations
}
