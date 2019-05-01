export default {
  name: 'Film',
  data: function () {
    return {
      visible: false
    }
  },
  props: {
    title: String,
    poster: String,
    year: String
  },
  methods: {
    showFilm: function () {
      this.visible = true;
    }

  }
}