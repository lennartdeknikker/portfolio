<template>
  <article class="portfolio-item">
    <div class="thumbnail-container">
      <a :href="project.link">
        <img :src="project.image" class="thumbnail" alt="portfolio-item"
      /></a>
    </div>
    <h2 @click="minimal = !minimal" class="item-title">
      {{ project.title }}
    </h2>
    <p
      :class="{ clicked: minimal == true }"
      @click="minimal = !minimal"
      class="item-text"
    >
      {{ project.description }}
    </p>
    <button @click="minimal = !minimal" class="button-expand">
      <svg :class="{ up: !minimal }" class="button-svg" viewBox="0 0 30 20">
        <polygon points="0,0 15,20 30,0" />
      </svg>
    </button>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      minimal: true
    }
  }
}
</script>

<style scoped>
.portfolio-item {
  max-width: 21rem;
  width: 100%;
  height: 80vh;
  margin-block-end: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.thumbnail-container {
  width: 100%;
  overflow: hidden;
  height: 15rem;
  flex: 3 3 3;
  background-color: #2aa198;
  border: 1px solid #2aa198;
}

.item-text.clicked {
  flex: 0;
}

.thumbnail {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: 50% 50%;
}

.item-title {
  font-family: 'Advent Pro', sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  color: white;
  overflow: hidden;
  height: 3rem;
  flex: 1 1 1;
  background-color: #2aa198;
  border: 1px solid #2aa198;
}

.item-text {
  padding: 0 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  overflow: hidden;
  height: auto;
  flex: 1;
  transition: flex 0.2s ease;
  background-color: #2aa198;
  border: 1px solid #2aa198;
}

.button-expand {
  display: flex;
  width: 100%;
  background-color: white;
  border: none;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;
  height: 3rem;
  flex: 1 1 1;
  border: 1px solid #2aa198;
}

.button-svg {
  fill: #2aa198;
  height: 1.5rem;
  transition: transform ease 0.5s;
}

.up {
  transform: rotate(180deg);
}

.show-text-enter-active,
.show-text-leave-active {
  transition: all 0.5s;
}
.show-text-enter, .show-text-leave-to /* .show-text-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scaleY(0);
}
</style>
