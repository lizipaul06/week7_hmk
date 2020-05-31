<template>
  <div class="app">

    <h1> Movies </h1>

      <movie-list >   </movie-list>



  </div>
</template>

<script>

import MovieList from './components/MovieList.vue'

export default {
  name: 'app',
  data(){
    return {
      movies: [],
      selectedMovie: null,
      cats: [],
     cat1: []

    };
  },
  computed: {
    getCats: function() {
    return  this.selectedMovie.species.map(cat => {
        fetch(`${cat}`).then(res => res.json())
        .then(data => this.cat1 = data )

          })


        }
      },

      mounted(){


        fetch('https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3')
        .then(res => res.json())
        .then(cats => this.cats  = cats.people)

    },

  components:{
    "movie-list": MovieList,

  }
}

</script>

<style >
html {
  background-color: #dfe5fb;

 background-size: cover;

}

.app {


}

#item {

}


</style>
