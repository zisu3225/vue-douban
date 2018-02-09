import {GET_BOOKS} from '@/store/actions'
import {getNovelBooks, getRealityBooks, getTravelBooks} from '@/lib/api'
// import * as Util from '@/lib/util'

const state = {
  novelBooks: [],
  realityBooks: [],
  travelBooks: [],
  loading: false
}

const actions = {
  async [GET_BOOKS] ({commit, state}) {
    try {
      commit({
        type: `${GET_BOOKS}_PENDING`
      })
      let resNovelBooks = await getNovelBooks()
      let resRealityBooks = await getRealityBooks()
      let resTravelBooks = await getTravelBooks()
      commit({
        type: `${GET_BOOKS}_FULFILLED`,
        novelBooks: resNovelBooks.data.books,
        realityBooks: resRealityBooks.data.books,
        travelBooks: resTravelBooks.data.books
      })
    } catch (err) {
      commit({
        type: `${GET_BOOKS}_REJECTED`
      })
    }
  }
}

const mutations = {
  [`${GET_BOOKS}_PENDING`] (state) {
    state.loading = true
  },
  [`${GET_BOOKS}_FULFILLED`] (state, payload) {
    state.loading = false
    state.novelBooks = payload.novelBooks
    state.realityBooks = payload.realityBooks
    state.travelBooks = payload.travelBooks
  },
  [`${GET_BOOKS}_REJECTED`] (state) {
    state.loading = false
  }
}
export default {
  state,
  actions,
  mutations
}
