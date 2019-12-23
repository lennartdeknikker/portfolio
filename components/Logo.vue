<template>
  <transition-group
    class="logo"
    tag="svg"
    name="draw-logo-1"
    viewbox="0 0 300 300"
  >
    <g key="logo" v-if="drawLogo" class="red">
      <path
        v-for="path in logoPaths"
        :key="path.title"
        :d="path.path"
        stroke="#2AA198"
        fill="transparent"
        class="red"
      ></path>
    </g>
  </transition-group>
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
  data() {
    return {
      drawLogo: false
    }
  },
  computed: {
    logoPaths() {
      return this.$store.getters.getLogoSvgCode
    }
  },
  mounted() {
    this.drawLogo = true
  }
}
</script>

<style scoped>
.logo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.draw-logo-1-enter-active {
  stroke-dasharray: 2075;
  stroke-dashoffset: 0;
  animation: dash-red 1.5s ease;
}
@keyframes dash-red {
  from {
    stroke-dashoffset: -2075;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
