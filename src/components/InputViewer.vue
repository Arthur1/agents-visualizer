<template>
  <div>
    <h2 class="text-secondary mt-4">入力</h2>
    <div v-if="$store.state.input.S">
      <dl>
        <dt>M</dt>
        <dd>{{ $store.state.input.M }}</dd>
        <dt>N</dt>
        <dd>{{ $store.state.input.N }}</dd>
        <dt>A</dt>
        <dd>{{ $store.state.input.A }}</dd>
        <dt>T</dt>
        <dd>{{ $store.state.input.T }}</dd>
        <dt>I</dt>
        <dd>{{ $store.state.input.I }}</dd>
        <dt>S</dt>
        <dd>{{ $store.state.input.S }}</dd>
        <dt>P</dt>
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
      </dl>
    </div>
  </div>
</template>
