<template>
  <div>
    <logo />
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
logo {
  width: 100%;
}
</style>
