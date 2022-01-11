<template>
  <button :disabled="disabled" @click.prevent="$emit('click')">
    works
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HButtonSimple",
  props: {
    disabled: Boolean,
  },
});
</script>
