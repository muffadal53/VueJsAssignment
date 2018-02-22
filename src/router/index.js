import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TransitionSample from '@/components/TransitionSample'
import MixinTest from '@/components/MixinTest'
import User from '@/components/User'


Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
