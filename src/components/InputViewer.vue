<template>
  <div>
    <h2 class="text-secondary mt-4">入力</h2>
    <div v-if="$store.state.input.S">
      <dl>
        <dt>(M, N) 最大座標</dt>
        <dd>({{ $store.state.input.M }}, {{ $store.state.input.N }})</dd>
        <dt>A エージェント数</dt>
        <dd>{{ $store.state.input.A }}</dd>
        <dt>T サイクル数</dt>
        <dd>{{ $store.state.input.T }}</dd>
        <dt>I 仕様7での状態更新値</dt>
        <dd>{{ $store.state.input.I }}</dd>
        <dt>S 仕様7の選択方法</dt>
        <dd>{{ $store.state.input.S }}</dd>
        <dt>P 仕様7のパラメータ</dt>
        <dd v-if="$store.state.input.PNames !== null">
          <span
            v-for="name in $store.state.input.PNames"
            :key="name"
            class="mr-3"
          >{{ name }}</span>
        </dd>
        <dd v-if="$store.state.input.PCoordinates !== null">
          <span
            v-for="coordinate in $store.state.input.PCoordinates"
            :key="`${coordinate.x}_${coordinate.y}`"
            class="mr-3"
          >({{ coordinate.x }}, {{ coordinate.y }})</span>
        </dd>
        <dt>agents</dt>
        <dd>
          <table class="table">
            <tbody>
              <tr>
                <th>n</th>
                <th>(x, y)</th>
                <th>i</th>
                <th>s</th>
                <th>t</th>
                <th>p</th>
                <th>...</th>
              </tr>
              <tr v-for="agent in $store.state.input.agents" :key="agent.name">
                <td :style="`color: ${agent.color};`">{{ agent.name }}</td>
                <td>({{ agent.location.x }}, {{ agent.location.y }})</td>
                <td>{{ agent.i }}</td>
                <td>{{ agent.s }}</td>
                <td>{{ agent.t }}</td>
                <td>{{ agent.p }}</td>
                <td>
                  <span
                    v-for="target in agent.targets"
                    :key="`${target.x}_${target.y}`"
                  >({{ target.x }}, {{ target.y }})</span>
                </td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
    </div>
  </div>
</template>
