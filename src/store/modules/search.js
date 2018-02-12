import {getMoviesByKey} from '@/lib/api'
import {SEARCH_BY_KEY, createAsyncAction} from '@/store/actions'
// import * as Util from '@/lib/util'

const state = {
  keyMovies: [],
  loading: false
}

const actions = {
  [SEARCH_BY_KEY]: createAsyncAction(SEARCH_BY_KEY, async ({commit, state}, {query}) => {
    let res = await getMoviesByKey(query)
    return res
  })
}

const mutations = {
  [`${SEARCH_BY_KEY}_PENDING`] (state) {
    state.loading = true
  },
  [`${SEARCH_BY_KEY}_FULFILLED`] (state, payload) {
    state.loading = false
    state.keyMovies = payload.data.subjects
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
