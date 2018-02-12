import {GET_HOT_MOVIES, GET_NEW_MOVIES, GET_TOP_MOVIES, createAsyncAction} from '@/store/actions'
import {getHotMovies, getNewMovies, getTopMovies} from '@/lib/api'

const state = {
  hotMovies: [],
  newMovies: [],
  topMovies: [],
  hotLoading: false,
  newLoading: false,
  topLoading: false
}

const actions = {
  [GET_HOT_MOVIES]: createAsyncAction(GET_HOT_MOVIES, async ({commit, state}) => {
    let res = await getHotMovies()
    return res
  }),
  [GET_NEW_MOVIES]: createAsyncAction(GET_NEW_MOVIES, async ({commit, state}) => {
    let res = await getNewMovies()
    return res
  }),
  [GET_TOP_MOVIES]: createAsyncAction(GET_TOP_MOVIES, async ({commit, state}) => {
    let res = await getTopMovies()
    return res
  })
}

const mutations = {
  [`${GET_HOT_MOVIES}_PENDING`] (state) {
    state.hotLoading = true
  },
  [`${GET_HOT_MOVIES}_FULFILLED`] (state, payload) {
    state.hotLoading = false
    state.hotMovies = payload.data.subjects
  },
  [`${GET_HOT_MOVIES}_REJECTED`] (state) {
    state.hotLoading = false
  },
  [`${GET_NEW_MOVIES}_PENDING`] (state) {
    state.newLoading = true
  },
  [`${GET_NEW_MOVIES}_FULFILLED`] (state, payload) {
    state.newLoading = false
    state.newMovies = payload.data.subjects
  },
  [`${GET_NEW_MOVIES}_REJECTED`] (state) {
    state.newLoading = false
  },
  [`${GET_TOP_MOVIES}_PENDING`] (state) {
    state.topLoading = true
  },
  [`${GET_TOP_MOVIES}_FULFILLED`] (state, payload) {
    state.topLoading = false
    state.topMovies = payload.data.subjects
  },
  [`${GET_TOP_MOVIES}_REJECTED`] (state) {
    state.topLoading = false
  }
}
export default {
  state,
  actions,
  mutations
}
