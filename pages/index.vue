<template>
  <div>
    <div class="logo-container">
      <logo />
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
.logo-container {
  width: 100%;
  height: 100vh;
}
</style>
