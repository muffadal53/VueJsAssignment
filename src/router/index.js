import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import EditUser from '@/components/EditUser'
import ViewUser from '@/components/ViewUser'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      component: EditUser,
      props: true     
    },
    {
      path: '/ViewUser',
      name: 'ViewUser',
      component: ViewUser,
      props: true 
    }
  ]
})
