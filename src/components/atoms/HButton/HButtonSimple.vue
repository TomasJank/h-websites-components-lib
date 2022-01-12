<template>
  <button :disabled="disabled" @click.prevent="$emit('click')">
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
