import {GET_EVENT_LIST} from '@/store/actions'
import {getEventList} from '@/lib/api'

const state = {
  events: [],
  loading: false,
  start: 0,
  count: 5
}

const actions = {
  async [GET_EVENT_LIST] ({commit, state}) {
    try {
      commit({
        type: `${GET_EVENT_LIST}_PENDING`
      })
      let params = {
        loc: 108288,
        start: state.start,
        count: state.count
      }
      let res = await getEventList(params)
      commit({
        type: `${GET_EVENT_LIST}_FULFILLED`,
        events: res.data.events
      })
      console.log(res)
    } catch (err) {
      console.log(err)
      commit({
        type: `${GET_EVENT_LIST}_REJECTED`
      })
    }
  }
}

const mutations = {
  [`${GET_EVENT_LIST}_PENDING`] (state, payload) {
    state.loading = true
  },
  [`${GET_EVENT_LIST}_FULFILLED`] (state, payload) {
    state.start += state.count
    state.loading = false
    state.events = state.events.concat(payload.events)
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
