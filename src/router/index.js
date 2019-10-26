import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageTest from '@/components/pages/PageTest'
import PageUser from '@/components/pages/PageUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PageTest',
      // name: 'pagetest',
      component: PageTest
    },
    {
      //網址附加ID
      path: '/PageUser/id/:num',
      // name: 'PageUser',
      component: PageUser
    },
    {
      path: '/PageUser/:name',
      // name: 'PageUser',
      component: PageUser
    }
  ]
})
