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
        stroke="white"
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
  fill: white;
  stroke-dasharray: 2075;
  stroke-dashoffset: 0;
  animation: dash-red 1.5s ease 1;
}

.draw-logo-1-enter-to {
  fill: #2aa198;
}

@keyframes dash-red {
  from {
    fill: white;
    stroke-dashoffset: -2075;
  }
  to {
    fill: #2aa198;
    stroke-dashoffset: 0;
  }
}
</style>
