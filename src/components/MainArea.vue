<template>
  <b-container>
    <h1 class="text-primary mt-4">OOP Agents Visualizer</h1>
    <help-box />
    <read-files-box />
    <input-viewer />
    <map-canvas />
  </b-container>
</template>
<script>
import HelpBox from '@/components/HelpBox.vue'
import ReadFilesBox from '@/components/ReadFilesBox.vue'
import InputViewer from '@/components/InputViewer.vue'
import MapCanvas from '@/components/MapCanvas.vue'

export default {
  components: {
    HelpBox,
    ReadFilesBox,
    InputViewer,
    MapCanvas,
  },
}
</script>
