<template>
	<a :href="href">
		<slot></slot>
	</a>
</template>

<script lang='ts'>
	import Vue from 'vue'
export default Vue.extend({
	props: {
		href: {
			type: String,
		}
	}
})
</script>
