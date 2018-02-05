import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Home from '@/pages/Home'
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
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
