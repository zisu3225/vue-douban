import axios from 'axios'

export const getEventList = (params) => axios.get('/api/event/list', {params})
