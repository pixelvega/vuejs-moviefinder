export default {
  name: 'SearchForm',
  data: function () {
    return {
      filmtitle: ''
    }
  },
  created() {
    let filmquery = this.$route.query.film
    if (filmquery != undefined) {
      this.filmtitle = filmquery;
    }
  },
  methods: {
    searchfilms: function (e) {
      e.preventDefault();
      this.$store.dispatch('loadFilms', this.filmtitle)
      this.$router.push({
        path: 'results',
        query: {
          film: this.filmtitle
        }
      })
    }
  }
}