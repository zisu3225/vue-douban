import {GET_EVENT_LIST, createAsyncAction} from '@/store/actions'
import {getEventList} from '@/lib/api'

const state = {
  events: [],
  loading: false,
  start: 0,
  count: 5
}

const actions = {
  [GET_EVENT_LIST]: createAsyncAction(GET_EVENT_LIST, async ({commit, state}) => {
    let params = {
      loc: 108288,
      start: state.start,
      count: state.count
    }
    let res = await getEventList(params)
    return res
  })
}

const mutations = {
  [`${GET_EVENT_LIST}_PENDING`] (state, payload) {
    state.loading = true
  },
  [`${GET_EVENT_LIST}_FULFILLED`] (state, payload) {
    state.start += state.count
    state.loading = false
    state.events = state.events.concat(payload.data.events)
  },
  [`${GET_EVENT_LIST}_REJECTED`] (state) {
    state.loading = false
  }
}
export default {
  state,
  actions,
  mutations
}
