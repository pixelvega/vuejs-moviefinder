import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    films: [],
  },
  getters: {
    getFilm: state => state.films,
    films: state => state.films
  },
  mutations: {
    SET_LOADING(state, flag) {
      state.loading = flag
    },
    SET_FILMS(state, films) {
      state.films = films
    }
  },
  actions: {
    loadFilms({
      commit
    }, queryFilm) {
      commit('SET_FILMS', [])
      commit('SET_LOADING', true)
      axios
        .get('http://www.omdbapi.com/?s=' + queryFilm + '&apikey=3a581182&type=movie')
        .then(r => r.data)
        .then(films => {
          commit('SET_FILMS', films.Search)
          commit('SET_LOADING', false)
        })
    }
  }
})