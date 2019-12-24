<template>
  <article :class="{ clicked: !clicked }" class="portfolio-item">
    <div class="thumbnail-container">
      <a :href="project.link">
        <img :src="project.image" class="thumbnail" alt="portfolio-item"
      /></a>
    </div>
    <h2 @click="clicked = !clicked" class="item-title">{{ project.title }}</h2>
    <p v-if="clicked" @click="clicked = !clicked" class="item-text">
      {{ project.description }}
    </p>
    <button @click="clicked = !clicked" class="button-expand">
      <svg
        :class="{ up: clicked }"
        viewBox="0 0 30 20"
        class="button-expand-triangle"
      >
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
      clicked: false
    }
  }
}
</script>

<style scoped>
.portfolio-item {
  max-width: 21rem;
  width: 100%;
  background-color: #2aa198;
  border: 1px solid #2aa198;
  display: grid;
  grid-template-areas: 'thumbnail' 'title' 'item-text' 'button';
  grid-template-rows: 14rem 5rem 10rem 2rem;
  height: fit-content;
  margin-block-end: 3rem;
}

.clicked {
  grid-template-rows: 14rem 5rem 0 2rem;
}

.thumbnail-container {
  grid-area: thumbnail;
  overflow: hidden;
  width: 100%;
}

.thumbnail {
  width: 100%;
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
  grid-area: title;
}

.item-text {
  padding: 0 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  grid-area: item-text;
}

.button-expand {
  height: 100%;
  display: flex;
  width: 100%;
  background-color: white;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  grid-area: button;
}

.button-expand-triangle {
  fill: #2aa198;
  height: 100%;
  transition: transform ease 0.3s;
}

.up {
  transform: rotate(180deg);
}
</style>
