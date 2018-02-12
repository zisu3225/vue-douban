import {GET_NOVEL_BOOKS, GET_REALITY_BOOKS, GET_TRAVEL_BOOKS, createAsyncAction} from '@/store/actions'
import {getNovelBooks, getRealityBooks, getTravelBooks} from '@/lib/api'
// import * as Util from '@/lib/util'

const state = {
  novelBooks: [],
  realityBooks: [],
  travelBooks: [],
  novelLoading: false,
  realityLoading: false,
  travelLoading: false
}

const actions = {
  [GET_NOVEL_BOOKS]: createAsyncAction(GET_NOVEL_BOOKS, async ({commit, state}) => {
    let res = await getNovelBooks()
    return res
  }),
  [GET_REALITY_BOOKS]: createAsyncAction(GET_REALITY_BOOKS, async ({commit, state}) => {
    let res = await getRealityBooks()
    return res
  }),
  [GET_TRAVEL_BOOKS]: createAsyncAction(GET_TRAVEL_BOOKS, async ({commit, state}) => {
    let res = await getTravelBooks()
    return res
  })
}

const mutations = {
  [`${GET_NOVEL_BOOKS}_PENDING`] (state) {
    state.novelLoading = true
  },
  [`${GET_NOVEL_BOOKS}_FULFILLED`] (state, payload) {
    state.novelLoading = false
    state.novelBooks = payload.data.books
  },
  [`${GET_NOVEL_BOOKS}_REJECTED`] (state) {
    state.novelLoading = false
  },
  [`${GET_REALITY_BOOKS}_PENDING`] (state) {
    state.realityLoading = true
  },
  [`${GET_REALITY_BOOKS}_FULFILLED`] (state, payload) {
    state.realityLoading = false
    state.realityBooks = payload.data.books
  },
  [`${GET_REALITY_BOOKS}_REJECTED`] (state) {
    state.realityLoading = false
  },
  [`${GET_TRAVEL_BOOKS}_PENDING`] (state) {
    state.travelLoading = true
  },
  [`${GET_TRAVEL_BOOKS}_FULFILLED`] (state, payload) {
    state.travelLoading = false
    state.travelBooks = payload.data.books
  },
  [`${GET_TRAVEL_BOOKS}_REJECTED`] (state) {
    state.travelLoading = false
  }
}
export default {
  state,
  actions,
  mutations
}
