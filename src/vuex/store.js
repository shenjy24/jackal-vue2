import Vue from "vue"
import Vuex from "vuex"

import counter from '@/vuex/modules/counter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    // 所有要管理的module都列在这里
    counter
  },
  strict: debug,
  middlewares: []
})
