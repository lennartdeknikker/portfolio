<template>
  <footer class="footer">
    <small class="footer-text-copyright"
      >Copyright ©2019 lennART. All Rights Reserved.</small
    >
    <a href="#" class="footer-link-terms"
      ><small class="footer-text-terms">Terms & Conditions</small></a
    >
    <Social class="social" />
  </footer>
</template>

<script>
import Social from '../components/Social.vue'

export default {
  components: {
    Social
  }
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.footer-text-copyright,
.footer-text-terms {
  color: white;
  font-family: 'Advent Pro', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.footer-text-copyright {
  grid-area: copyright;
}

.footer-text-terms {
  grid-area: terms;
  justify-content: center;
  height: 100%;
}

.footer-link-terms {
  height: 100%;
}

.social {
  grid-area: social;
  display: flex;
  align-items: center;
}

.footer {
  display: grid;
  background-color: #2aa198;
  padding: 0 3rem;
  grid-template-areas: 'copyright terms social';
  grid-template-columns: 1fr 1fr 1fr;
  height: 3rem;
}
</style>
