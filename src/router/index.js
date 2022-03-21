import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Axios from '@/components/Axios'
import Router1 from '@/components/Router1'
import Router2 from '@/components/Router2'
import ComputedProperty from '@/components/ComputedProperty'
import Condition from '@/components/Condition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/router1',
      name: 'Router1',
      component: Router1
    },
    {
      path: '/router2',
      name: 'Router2',
      component: Router2
    },
    {
      path: '/computed',
      name: 'ComputedProperty',
      component: ComputedProperty
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    }
  ]
})
