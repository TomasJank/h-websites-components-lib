<template>
  <HText tag="p" meteorite-dark :white="dark">
    <IconCheck success class="mr-4" />
    30-day money-back guarantee
  </HText>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    dark: Boolean,
  },
});
</script>
