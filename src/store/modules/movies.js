import axios from 'axios';

const state =({
  movies:[],
  activeMovie: null
})

  const getters = {
    allMovies: (state) => state.movies,
        activeMovie: (state) => state.activeMovie
  };



const mutations = {
  updateMovies(state, movies){
    state.movies = movies;
  },
  setActiveMovie(state, movie){
    state.activeMovie = movie
  }
}

const actions ={
  async getMovies({commit}){
    const response = await axios.get('https://ghibliapi.herokuapp.com/films/');
    commit('updateMovies', response.data)
  },

}


export default{
  state,
  getters,
  actions,
  mutations
}
