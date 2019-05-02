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
    },
    showProfile: function () {
      this.$store.dispatch('loadFilm', this.$vnode.key);
      const el = document.body;
      el.classList.add('showprofile');

    }

  }
}