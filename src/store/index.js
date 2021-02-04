import Vue from 'vue'
import Vuex from 'vuex'
import input from './input'
import output from './output'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    input,
    output,
  },
})

export default store
