// dependencies
import Vue from 'vue'
import Router from 'vue-router'

// pages
import IndexPage from '../pages/IndexPage'
import AdminPage from '../pages/AdminPage'
import AddNewUser from '../pages/AddNewUser'
import AddRating from '../pages/AddRating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage,
      name: 'IndexPage'
    },
    {
      path: '/admin/',
      component: AdminPage,
      name: 'Adminpage',
      children: [
        {
          path: 'add-new-user/',
          component: AddNewUser,
          name: 'AddNewUser'
        },
        {
          path: 'add-rating/',
          component: AddRating,
          name: 'AddRating'
        },
      ]
    }
  ]
})
