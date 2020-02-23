<template>
  <div class="app">
  <div id="item">
    <h1> Movies </h1>

      <movie-list :movies='movies'>   </movie-list>
    </div>
    <div id="item">
      <movie-details v-if="selectedMovie" :movie='selectedMovie'> </movie-details>
      <div v-for="cat in this.cats.getCats" :cat='cat'> {{cat}} </div>
    </div>
  </div>
</template>

<script>

import MovieDetails from './components/MovieDetails.vue'
import {eventBus} from './main.js'
import MovieList from './components/MovieList.vue'

export default {
  name: 'app',
  data(){
    return {
      movies: [],
      selectedMovie: null,
      cats: [],
     catsData: []
    };
  },
  methods: {
    getCats: function() {
      this.cats.map(cat => {
        fetch(`${cat}`).then(res => res.json())
        .then(data =>
            data = this.catsData);

          })

          return this.catsData
        }
      },

      mounted(){

      fetch('https://ghibliapi.herokuapp.com/films/')
      .then(res => res.json())
      .then(movies => this.movies = movies)
      eventBus.$on('movie-selected', (movie) => {
        this.selectedMovie = movie; });

        fetch('https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3')
        .then(res => res.json())
        .then(cats => this.cats  = cats.people)

    },

  components:{
    "movie-list": MovieList,
    "movie-details": MovieDetails
  }
}

</script>

<style >
html {
  background-color: rgba(224, 255, 252);

 background-size: cover;

}

.app {


}

#item {

}


</style>
