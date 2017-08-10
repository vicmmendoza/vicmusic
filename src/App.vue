<template lang="pug">
  #app
    img(src='https://vicmmendoza.github.io/vicmusic/assets/logo.png')
    h1 Music
    <div class="col-md-4 offset-md-4">
        <b-form-select v-model="selectedCountry" :options="options" class="mb-3">
        </b-form-select>
    </div>
    spinner(v-show="loading")
    <div class="row">
      <div class="d-flex flex-wrap">
        artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
      </div>
    </div>
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      options: [
        { text: 'Argentina', value: 'argentina' },
        { text: 'Colombia', value: 'colombia' },
        { text: 'España', value: 'spain' },
      ],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists
        })
    }
  },
  mounted() {
    this.refreshArtists()
  },
  watch: {
    selectedCountry() {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
