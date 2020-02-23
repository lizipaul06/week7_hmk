<template lang="html">
  <div>
  <ul>
    <movie-item v-for="(movie, index) in movies" :movie="movie"  :key="index"> </movie-item>
  </ul>
</div>
</template>

<script>

import MovieItem from './MovieItem.vue';

export default {
  name: 'movie-list',
  props: ['movies'],
  components: {
    "movie-item": MovieItem
  }
}
</script>

<style lang="css" scoped>
.beer-list {
  width: 45%;
  height: 550px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}
</style>
