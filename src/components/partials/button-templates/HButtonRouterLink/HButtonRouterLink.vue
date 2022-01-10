<template>
  <router-link :to="to">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    to: {
      type: [Object, String],
    },
  },
});
</script>
