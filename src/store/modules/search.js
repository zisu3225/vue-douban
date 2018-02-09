import {getMoviesByKey} from '@/lib/api'
import {SEARCH_BY_KEY} from '@/store/actions'
// import * as Util from '@/lib/util'

const state = {
  keyMovies: [],
  loading: false
}

const actions = {
  async [SEARCH_BY_KEY] ({commit, state}, {query}) {
    try {
      commit({
        type: `${SEARCH_BY_KEY}_PENDING`
      })
      let resKeyMovies = await getMoviesByKey(query)
      commit({
        type: `${SEARCH_BY_KEY}_FULFILLED`,
        keyMovies: resKeyMovies.data.subjects
      })
    } catch (err) {
      commit({
        type: `${SEARCH_BY_KEY}_REJECTED`
      })
    }
  }
}

const mutations = {
  [`${SEARCH_BY_KEY}_PENDING`] (state) {
    state.loading = true
  },
  [`${SEARCH_BY_KEY}_FULFILLED`] (state, payload) {
    state.loading = false
    state.keyMovies = payload.keyMovies
  },
  [`${SEARCH_BY_KEY}_REJECTED`] (state) {
    state.loading = false
  }
}
export default {
  state,
  actions,
  mutations
}
