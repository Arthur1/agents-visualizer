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
  state: {
    currentCycle: 0,
  },
  mutations: {
    incrementCurrentCycle(state) {
      state.currentCycle++
    },
    decrimentCurrentCycle(state) {
      state.currentCycle--
    },
    resetCurrentCycle(state) {
      state.currentCycle = 0
    },
  },
  actions: {
    resetCycle({ commit }) {
      commit('resetCurrentCycle')
    },
    nextCycle({ state, commit }) {
      if (state.currentCycle < state.input.T) {
        commit('incrementCurrentCycle')
      }
    },
    prevCycle({ state, commit }) {
      if (state.currentCycle > 0) {
        commit('decrimentCurrentCycle')
      }
    },
  },
  getters: {
    currentAgents(state) {
      if (state.input.agents === null) return []
      if (state.currentCycle === 0) {
        return state.input.agents
      } else {
        return state.input.agents.map((agent) => {
          const currentAgent = state.output.cycles[state.currentCycle - 1].agents[agent.name]
          return {
            name: agent.name,
            color: agent.color,
            targets: agent.targets,
            location: currentAgent.location,
            i: currentAgent.i,
            d: currentAgent.d,
          }
        })
      }
    },
  },
})

export default store
