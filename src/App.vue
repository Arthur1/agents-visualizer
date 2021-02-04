<template>
  <div class="d-flex flex-column vh-100">
    <main>
      <main-area></main-area>
    </main>
    <footer class="mt-auto">
      <footer-area></footer-area>
    </footer>
  </div>
</template>

<script>
import MainArea from '@/components/MainArea.vue'
import FooterArea from '@/components/FooterArea.vue'

export default {
  name: 'App',
  components: {
    MainArea,
    FooterArea,
  },
}
</script>
