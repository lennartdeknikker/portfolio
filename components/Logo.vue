<template>
  <div class="logo-container">
    <transition-group
      id="Layer_1"
      tag="svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="300px"
      height="300px"
      view-box="0 0 300 300"
      style="enable-background:new 0 0 300 300;"
      xml:space="preserve"
      name="draw-logo-1"
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
.draw-logo-1-enter-active {
  stroke-dasharray: 2075;
  stroke-dashoffset: 0;
  animation: dash-red 1.5s ease 1;
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
