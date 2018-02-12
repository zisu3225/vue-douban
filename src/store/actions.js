// activities
export const GET_EVENT_LIST = 'GET_EVENT_LIST'

// movies
export const GET_HOT_MOVIES = 'GET_HOT_MOVIES'
export const GET_NEW_MOVIES = 'GET_NEW_MOVIES'
export const GET_TOP_MOVIES = 'GET_TOP_MOVIES'

// books
export const GET_NOVEL_BOOKS = 'GET_NOVEL_BOOKS'
export const GET_REALITY_BOOKS = 'GET_REALITY_BOOKS'
export const GET_TRAVEL_BOOKS = 'GET_TRAVEL_BOOKS'

// groups
export const GET_GROUPS = 'GET_GROUPS'

// search
export const SEARCH_BY_KEY = 'SEARCH_BY_KEY'

export const createAsyncAction = (type, fn) => async ({commit, state}, payload) => {
  commit({
    type: `${type}_PENDING`,
    params: payload
  })
  try {
    let res = await fn({commit, state}, payload)
    commit({
      type: `${type}_FULFILLED`,
      data: res.data,
      params: payload
    })
    return res.data
  } catch (e) {
    commit({
      type: `${type}_REJECTED`,
      params: payload
    })
    throw e
  }
}
