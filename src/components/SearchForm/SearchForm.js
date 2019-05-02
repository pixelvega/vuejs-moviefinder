export default {
  name: 'SearchForm',
  data: function () {
    return {
      filmtitle: '',
      filmquery: ''
    }
  },
  created() {
    this.filmquery = this.$route.query.film
    if (this.filmquery != undefined) {
      this.filmtitle = this.filmquery;
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