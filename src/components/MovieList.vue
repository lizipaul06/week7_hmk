<template lang="html">
  <div v-if="allMovies">

   <v-select
   label="title"
      class="style-chooser"
   @input="setActiveMovie"
   :options="allMovies"
   :value="$store.state.activeMovie"
 ></v-select>

    <!-- iterate over selected food array -->
    <movie-details :activeMovie="activeMovie"></movie-details>

</div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import MovieDetails from './MovieDetails.vue';
import {mapActions, mapGetters} from 'vuex';
 import vSelect from 'vue-select';
export default {
  name: 'movie-list',
  data(){
    return{

    }
  },
  created(){
    this.getMovies()
  },
  components: {
    "v-select": vSelect,
    "movie-details":MovieDetails
  },

  computed:{
    ...mapGetters(['allMovies', 'activeMovie']),
    store() {
         return this.$store.state
       }
  },

  mounted(){

  },
  methods: {
    ...mapActions(['getMovies']),
    setActiveMovie(value) {
       this.$store.commit('setActiveMovie', value)

},

  }
}
</script>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: 'white';
  border: 'bold';
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
  width: 250px
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: 'white';

}
</style>
