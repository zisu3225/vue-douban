import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'
import Book from '@/pages/Book'
import Group from '@/pages/Group'
import Radio from '@/pages/Radio'
import Detail from '@/pages/Detail'
import Subject from '@/pages/Subject'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'book',
          name: 'book',
          component: Book
        },
        {
          path: 'movie',
          name: 'movie',
          component: Movie
        },
        {
          path: 'group',
          name: 'group',
          component: Group
        },
        {
          path: 'radio',
          name: 'radio',
          component: Radio
        },
        {
          path: ':classify/subject/:id',
          name: 'subject',
          component: Subject
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
