// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import Film from "@/components/Film/Film.vue";
import FilmProfile from "@/components/FilmProfile/FilmProfile.vue";
import SearchForm from "@/components/SearchForm/SearchForm.vue";
import carousel from 'vue-owl-carousel'

export default {
  name: "results",
  components: {
    Header,
    Film,
    FilmProfile,
    SearchForm,
    carousel
  },

  created() {
    let filmquery = this.$route.query.film
    if (filmquery === undefined) {
      this.$router.push({
        path: '/'
      })
    }

    this.$store.dispatch('loadFilms', filmquery)
  },
  computed: {
    films() {
      return this.$store.getters.films
    }
  },
  watch: {
    films: function (val) {}
  },
  methods: {
    updated: function () {}
  }
};