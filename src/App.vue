<template>
  <div class="d-flex flex-column vh-100">
    <main>
      <main-box></main-box>
    </main>
    <footer class="mt-auto">
      <footer-box></footer-box>
    </footer>
  </div>
</template>

<script>
import MainBox from '@/components/MainBox.vue'
import FooterBox from '@/components/FooterBox.vue'

export default {
  name: 'App',
  components: {
    MainBox,
    FooterBox,
  },
}
</script>
