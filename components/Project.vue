<template>
  <article class="portfolio-item">
    <div class="thumbnail-container">
      <img
        class="thumbnail"
        src="../assets/content/dummy-img/l5.jpeg"
        alt="portfolio-item"
      />
    </div>
    <h2 class="item-title">Pointer</h2>
    <p class="item-text">
      A project to visualize data about health care institutions that seem to
      make too much revenue.
    </p>
    <button class="button-expand">
      <svg viewBox="0 0 30 20" class="button-expand-triangle">
        <polygon points="0,0 15,20 30,0" />
      </svg>
    </button>
  </article>
</template>

<style scoped>
.portfolio-item {
  max-width: 21rem;
  width: 100%;
  height: 100%;
  background-color: #2aa198;
  border: 1px solid #2aa198;
  display: grid;
  grid-template-areas: 'thumbnail' 'title' 'item-text' 'button';
  grid-template-rows: 14fr 3fr 7fr 2rem;
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
}
</style>
