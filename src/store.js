import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    films: [],
    film: {}
  },
  getters: {
    films: state => state.films,
    film: state => state.film
  },
  mutations: {
    SET_LOADING(state, flag) {
      state.loading = flag
    },
    SET_FILMS(state, films) {
      state.films = films
    },
    SET_FILM(state, film) {
      state.film = film
    }
  },
  actions: {
    loadFilms({
      commit
    }, queryFilm) {
      commit('SET_FILMS', [])
      commit('SET_LOADING', true)
      axios
        .get('https://www.omdbapi.com/?s=' + queryFilm + '&apikey=3a581182&type=movie')
        .then(r => r.data)
        .then(films => {
          commit('SET_FILMS', films.Search)
          commit('SET_LOADING', false)
        })
    },
    loadFilm({
      commit
    }, id) {
      commit('SET_FILM', {})
      commit('SET_LOADING', true)
      axios
        .get('https://www.omdbapi.com/?i=' + id + '&apikey=3a581182')
        .then(r => r.data)
        .then(film => {
          commit('SET_FILM', film)
          commit('SET_LOADING', false)
        })
    },
    cleanFilm({
      commit
    }) {
      commit('SET_FILM', {})
    }
  }
})