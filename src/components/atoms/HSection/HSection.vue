<template>
  <div :class="getSectionSpaceClass">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name:"HSection",
  props: {
    top: Boolean,
    bottom: Boolean,
  },
  computed: {
    getSectionSpaceClass() {
      return this.top
        ? "section-spaces--top"
        : this.bottom
        ? "section-spaces--bottom"
        : "section-spaces";
    },
  },
});
</script>
