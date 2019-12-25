<template>
  <div class="container">
    <transition name="slide-in">
      <Main v-if="main" />
    </transition>
    <transition @leave="showMain" name="slide-out">
      <Logo v-if="logo" @show-main="logo = false" />
    </transition>
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
      logo: true,
      main: false,
      footer: true
    }
  },
  methods: {
    showMain() {
      setTimeout(() => {
        this.main = true
      }, 300)
    }
  }
}
</script>

<style>
.container {
  height: 100vh;
}

.slide-out-leave-active {
  transform: translateY(0);
  transition: transform 0.3s linear;
}
.slide-out-leave-to {
  transform: translateY(100%);
}

.slide-in-enter-active {
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}
.slide-in-enter-to {
  transform: translateY(0);
}
</style>
