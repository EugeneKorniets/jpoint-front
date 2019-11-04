// dependencies
import Vue from 'vue'
import Router from 'vue-router'

// pages
import MainPage from '../pages/main-page'
import AdminPage from '../pages/admin-page'
import AddNewUserPage from '../pages/add-new-user-page'
import AddRatingPage from '../pages/add-rating-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      name: 'MainPage'
    },
    {
      path: '/admin/',
      component: AdminPage,
      name: 'AdminPage',
      children: [
        {
          path: 'add-new-user/',
          component: AddNewUserPage,
          name: 'AddNewUserPage'
        },
        {
          path: 'add-rating/',
          component: AddRatingPage,
          name: 'AddRatingPage'
        },
      ]
    }
  ]
})
