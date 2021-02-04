<template>
  <div v-if="$store.state.input.M">
    <v-stage :config="configKonva">
      <v-layer>
        <v-line
          v-for="i of ($store.state.input.M + 1)"
          :key="`xLine_${i}`"
          :config="xLineConfig(i)"
        ></v-line>
        <v-line
          v-for="j of ($store.state.input.N + 1)"
          :key="`yLine_${j}`"
          :config="yLineConfig(j)"
        ></v-line>
        <template
          v-for="agent in agents"
        >
          <v-circle
            v-for="target in agent.targets"
            :key="`target_${agent.name}_${target.x}_${target.y}`"
            :config="targetConfig(agent, target)"
          ></v-circle>
        </template>
        <v-circle
          v-for="agent in agents"
          :key="`circle_${agent.name}`"
          :config="agentCircleConfig(agent)"
        ></v-circle>
        <v-text
          v-for="agent in agents"
          :key="`text_${agent.name}`"
          :config="agentTextConfig(agent)"
        ></v-text>
        <template
          v-for="agent in agents"
        >
          <v-text
            v-if="agent.d"
            :key="`arrow_${agent.name}`"
            :config="agentArrowConfig(agent)"
          ></v-text>
        </template>
      </v-layer>
    </v-stage>
    <div class="text-center mb-3">
      <b-button
        variant="dark"
        :disabled="$store.state.currentCycle <= 0"
        @click="goPrev"
      >Prev</b-button>
      <b-button
        variant="info"
        :disabled="$store.state.currentCycle >= $store.state.input.T"
        @click="goNext"
      >Next</b-button><br>
      Cycle {{ $store.state.currentCycle }} / {{ $store.state.input.T }}
    </div>
  </div>
</template>
<script>
const padding = 60
const cellSideLength = 50
export default {
  computed: {
    agents() {
      return this.$store.getters.currentAgents
    },
    canvasWidth() {
      if (!this.$store.state.input.M) return 0
      return (this.$store.state.input.M) * cellSideLength + padding * 2
    },
    canvasHeight() {
      if (!this.$store.state.input.N) return 0
      return (this.$store.state.input.N) * cellSideLength + padding * 2
    },
    configKonva() {
      return {
        width: this.canvasWidth,
        height: this.canvasHeight,
      }
    },
    xLineConfig() {
      return function (i) {
        i--
        return {
          points: [i * cellSideLength + padding, padding, i * cellSideLength + padding, this.canvasHeight - padding],
          stroke: '#cccccc',
        }
      }
    },
    yLineConfig() {
      return function(j) {
        j--
        return {
          points: [padding, j * cellSideLength + padding, this.canvasWidth - padding, j * cellSideLength + padding],
          stroke: '#cccccc',
        }
      }
    },
    targetConfig() {
      return (agent, target) => {
        return {
          x: padding + target.x * cellSideLength,
          y: padding + target.y * cellSideLength,
          radius: 4,
          stroke: agent.color,
        }
      }
    },
    agentCircleConfig() {
      return (agent) => {
        return {
          x: padding + agent.location.x * cellSideLength,
          y: padding + agent.location.y * cellSideLength,
          radius: 10,
          fill: agent.color,
        }
      }
    },
    agentTextConfig() {
      return (agent) => {
        return {
          x: padding + agent.location.x * cellSideLength - 10,
          y: padding + agent.location.y * cellSideLength - 10,
          width: 20,
          height: 20,
          fontFamily: 'Noto Sans JP',
          fontSize: 10,
          align: 'center',
          verticalAlign: 'middle',
          text: agent.i,
          fill: 'white',
        }
      }
    },
    agentArrowConfig() {
      return (agent) => {
        let dx = -10
        let dy = -10
        let text
        switch (agent.d) {
          case 'N':
            dy -= 20
            text = '↑'
            break
          case 'S':
            dy += 20
            text = '↓'
            break
          case 'E':
            dx += 20
            text = '→'
            break
          case 'W':
            dx -= 20
            text = '←'
            break
        }
        return {
          x: padding + agent.location.x * cellSideLength + dx,
          y: padding + agent.location.y * cellSideLength + dy,
          text,
          width: 20,
          height: 20,
          fontFamily: 'Noto Sans JP',
          fontSize: 10,
          fontStyle: 'bold',
          align: 'center',
          verticalAlign: 'middle',
          fill: agent.color,
        }
      }
    },
  },
  methods: {
    async goNext() {
      await this.$store.dispatch('nextCycle')
    },
    async goPrev() {
      await this.$store.dispatch('prevCycle')
    },
  },
  /*
  watch: {
    agents(value, old) {

    }
  },
  */
}
</script>
<style>
.konvajs-content {
  margin: auto;
}
</style>
