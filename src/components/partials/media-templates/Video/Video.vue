<template>
	<video
		class="w-100 play-video-on-scroll"
		:poster="poster"
		muted="muted"
		preload="none"
		v-play-on-scroll
	>
		<source type="video/mp4" :src="video" />
	</video>
</template>

<script lang='ts'>
	import Vue from 'vue'
export default Vue.extend({
	props: {
		video: String,
		poster: String
	}
})
</script>
