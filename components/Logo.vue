<template>
  <div class="logo-container">
    <transition-group
      @after-enter="$emit('show-main')"
      class="logo"
      tag="svg"
      name="draw-logo"
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
.logo-container {
  width: 100%;
  height: 100%;
  background-color: #2aa198;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.draw-logo-enter-active {
  stroke-dasharray: 2075;
  stroke-dashoffset: 0;
  animation: dash 2s ease;
}
/* may be necessary when logo stays on and main slides in.
.draw-logo-enter-to {
  fill: #2aa198;
} */

@keyframes dash {
  from {
    stroke-dashoffset: -2075;
  }
  75% {
    stroke-dashoffset: 0;
  }
}
</style>
