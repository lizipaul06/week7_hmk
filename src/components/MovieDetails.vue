<template lang="html">
  <div v-if='movie'>
    <h2 > {{movie.title}} </h2>
    <p> Description: {{movie.description}} </p>
    <p> Release date: {{movie.release_date}} </p>
    <p> Director: {{movie.director}} </p>
    <p> Producer: {{movie.producer}} </p>
    <p> Rating: {{movie.rt_score}} </p>
  </div>
</template>

<script>


export default {
  name: 'movie-details',
  props: ['movie']

}
</script>

<style lang="css" scoped>
</style>
