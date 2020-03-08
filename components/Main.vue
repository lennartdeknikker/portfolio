<template>
  <div class="main-container">
    <h1 class="title">LATEST PROJECTS</h1>
    <section class="projects-container">
      <project
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </section>
  </div>
</template>

<script>
import Project from '../components/Project.vue'

export default {
  components: {
    Project
  },
  data() {
    return {}
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects
    }
  },
  methods: {}
}
</script>

<style scoped>
.main-container {
  height: 100vh;
  overflow-y: auto;
  min-width: 300px;
  background: repeating-linear-gradient(
    180deg,
    #2aa198,
    transparent 8vh,
    transparent 20vh
  );
}

.title {
  font-family: 'Advent Pro', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2aa198;
  height: 15%;
  font-weight: 300;
}

.projects-container {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem 3rem;
  flex-wrap: wrap;
}

@media (max-width: 800px) {
  .projects-container {
    justify-content: center;
  }
}
</style>
