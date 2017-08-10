<template>
  	<div class="p-4">
	  <b-card :title="artist.name"
	          :img="artist.image[2]['#text']"
	          :img-alt="artist.name"
	          tag="article"
	          style="width: 20rem;"
	          class="mb-2">
	    <b-button :href="artist.url" target="_blank" variant="primary">Acceso Lastfm</b-button>
	  </b-card>
	</div>
  
</template>

<script>
export default {
  name: 'artist',
  props: [ 'artist' ]
}
</script>

<style lang="stylus" scoped>
li.artist
  display block
  margin 10px 0
</style>
