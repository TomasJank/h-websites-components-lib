<template>
	<nuxt-link :to="to">
		<slot></slot>
	</nuxt-link>
</template>

<script lang='ts'>
	import Vue from 'vue'
export default Vue.extend({
	props: {
		to: {
			type: [Object, String],
		}
	}
})
</script>
