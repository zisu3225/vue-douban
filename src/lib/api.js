import axios from 'axios'

export const getEventList = (params) => axios.get('/api/event/list', {params})
export const getSingleEvent = (id) => axios.get(`/api/event/${id}`)
export const getHotMovies = () => axios.get('/api/movie/in_theaters?count=8')
export const getNewMovies = () => axios.get('/api/movie/coming_soon?count=8')
export const getTopMovies = () => axios.get('/api/movie/top250?count=8')
export const getNovelBooks = () => axios.get('/api/book/search?q=虚构类&count=8')
export const getRealityBooks = () => axios.get('/api/book/search?q=非虚构类&count=8')
export const getTravelBooks = () => axios.get('/api/book/search?q=旅行&count=8')
export const getSingleMovie = (id) => axios.get(`/api/movie/subject/${id}`)
export const getSingleBook = (id) => axios.get(`/api/book/${id}`)
export const getMoviesByKey = (query) => axios.get(`/api/movie/search?q=${query}&count=3`)
