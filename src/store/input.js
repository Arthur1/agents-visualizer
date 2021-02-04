import randomColor from 'randomcolor'

export default {
  namespaced: true,
  state: {
    M: null,
    N: null,
    A: null,
    T: null,
    I: null,
    agents: null,
    S: null,
    PNames: null,
    PCoordinates: null,
  },
  mutations: {
    setM(state, value) {
      state.M = value
    },
    setN(state, value) {
      state.N = value
    },
    setA(state, value) {
      state.A = value
    },
    setT(state, value) {
      state.T = value
    },
    setI(state, value) {
      state.I = value
    },
    initAgents(state) {
      state.agents = []
    },
    addAgent(state, value) {
      state.agents.push(value)
    },
    setS(state, value) {
      state.S = value
    },
    initPNames(state) {
      state.PNames = []
    },
    addPNames(state, value) {
      state.PNames.push(value)
    },
    initPCoordinates(state) {
      state.PCoordinates = []
    },
    addPCoordinates(state, value) {
      state.PCoordinates.push(value)
    },
  },
  actions: {
    scan({ commit, state }, text) {
      const scanner = text.split(/\s+/).filter((token) => token).values()
      commit('setM', Number(scanner.next().value))
      commit('setN', Number(scanner.next().value))
      commit('setA', Number(scanner.next().value))
      commit('setT', Number(scanner.next().value))
      commit('setI', Number(scanner.next().value))
      commit('initAgents')
      for (let j = 0; j < state.A; j++) {
        const agent = {
          name: scanner.next().value,
          location: {
            x: Number(scanner.next().value),
            y: Number(scanner.next().value),
          },
          i: Number(scanner.next().value),
          s: Number(scanner.next().value),
          t: Number(scanner.next().value),
          p: Number(scanner.next().value),
          targets: [],
          color: randomColor({
            luminosity: 'dark',
          }),
        }
        for (let k = 0; k < agent.p; k++) {
          agent.targets.push({
            x: Number(scanner.next().value),
            y: Number(scanner.next().value),
          })
        }
        commit('addAgent', agent)
      }
      commit('setS', Number(scanner.next().value));
      switch (state.S) {
        case 1:
          commit('initPNames')
          // eslint-disable-next-line no-constant-condition
          while (true) {
            let itrObj = scanner.next()
            if (itrObj.done) break
            commit('addPNames', itrObj.value);
          }
          break;
        case 2:
          commit('initPCoordinates')
          // eslint-disable-next-line no-constant-condition
          while (true) {
            let itrObj = scanner.next()
            if (itrObj.done) break
            commit('addXCoordinates', {
              x: Number(itrObj.value),
              y: Number(scanner.next()),
            })
          }
          break;
      }
    },
  },
}
