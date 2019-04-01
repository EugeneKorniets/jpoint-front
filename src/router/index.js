// dependencies
import Vue from 'vue'
import Router from 'vue-router'

// pages
import IndexPage from '../pages/IndexPages'
import AdminPage from '../pages/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/admin',
      component: AdminPage
    }
  ]
})