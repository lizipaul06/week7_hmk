<template lang="html">
  <div v-if='activeMovie'>
  <b-card
   :title="activeMovie.title"
   style="max-width: 20rem;"
     class="mb-2">
    <b-card-text>
    <p> Description: {{activeMovie.description}} </p>
    <p> Release date: {{activeMovie.release_date}} </p>
    <p> Director: {{activeMovie.director}} </p>
    <p> Producer: {{activeMovie.producer}} </p>
    <p> Rating: {{activeMovie.rt_score}} </p>
  </b-card-text>
      <!-- <div v-for="catob in this.cat" :catob='catob'> {{catob.name}} </div> -->
  </b-card>
  </div>
</template>

<script>
import {mapstate, mapGetters} from 'vuex'

export default {
  name: 'movie-details',
  props: ['movie'],
  computed: mapGetters(['activeMovie']),
  }

</script>

<style lang="css" scoped>
</style>
