// activities
export const GET_EVENT_LIST = 'GET_EVENT_LIST'

// movies
export const GET_MOVIES = 'GET_MOVIES'

// books
export const GET_BOOKS = 'GET_BOOKS'

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
