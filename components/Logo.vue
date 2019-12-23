<template>
  <div class="logo-container">
    {{ logoSvgCode }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  components: {},
  computed: {
    logoSvgCode() {
      return this.$store.getters.getLogoSvgCode
    }
  }
}
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 100vh;
}
</style>
