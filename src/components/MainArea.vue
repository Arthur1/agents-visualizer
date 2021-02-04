<template>
  <b-container>
    <h1 class="text-primary mt-4">OOP Agents Visualizer</h1>
    <read-files-box></read-files-box>
    <input-viewer></input-viewer>
    <map-canvas></map-canvas>
  </b-container>
</template>
<script>
import ReadFilesBox from '@/components/ReadFilesBox.vue'
import InputViewer from '@/components/InputViewer.vue'
import MapCanvas from '@/components/MapCanvas.vue'

export default {
  components: {
    ReadFilesBox,
    InputViewer,
    MapCanvas,
  },
}
</script>
