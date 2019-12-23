<template>
  <div class="logo-container">
    <img :src="logoUrl" class="logo" alt="" />
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
    logoUrl() {
      return this.$store.getters.getLogoUrl
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
