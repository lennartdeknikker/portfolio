<template>
  <div>
    <div v-if="logo" class="logo-container">
      <Logo />
    </div>
    <Main v-if="main" />
    <Footer v-if="footer" />
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Footer from '../components/Footer.vue'
import Main from '../components/Main.vue'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  components: {
    Logo,
    Footer,
    Main
  },
  data() {
    return {
      logo: false,
      main: true,
      footer: true
    }
  }
}
</script>

<style>
.logo-container {
  width: 100%;
  height: 100vh;
  background-color: #2aa198;
}
</style>
