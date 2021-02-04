export default {
  namespaced: true,
  state: {
    cycles: null,
  },
  mutations: {
    initCycles(state) {
      state.cycles = []
    },
    addCycle(state, value) {
      state.cycles.push(value)
    }
  },
  actions: {
    scan({ commit }, payload) {
      const scanner = payload.text.split(/\s+/).filter((token) => token).values()
      commit('initCycles')
      for (let j = 0; j < payload.T; j++) {
        scanner.next() // "Cycle" を読み飛ばす
        const cycle = {
          id: Number(scanner.next().value),
          agents: {},
        }
        for (let k = 0; k < payload.A; k++) {
          const agent = {
            name: scanner.next().value,
            location: {
              x: Number(scanner.next().value),
              y: Number(scanner.next().value),
            },
            i: Number(scanner.next().value),
            d: scanner.next().value,
          }
          cycle.agents[agent.name] = agent
        }
        commit('addCycle', cycle)
      }
    },
  },
}
