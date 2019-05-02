export default {
  name: 'FilmProfile',
  computed: {
    film() {
      return this.$store.getters.film
    }
  },
  methods: {
    close: function () {
      this.$store.dispatch('cleanFilm')
    }
  }
}