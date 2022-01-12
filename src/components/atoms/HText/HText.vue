<template>
  <component :is="tag" :class="getTextClass">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
const _tagTypes = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];

export default Vue.extend({
  name: "HText",
  props: {
    tag: {
      type: String,
      required: true,
      default: "p",
      validator: (value) => _tagTypes.includes(value),
    },
    span: Boolean,
    white: Boolean,
    dark: Boolean,
    gray: Boolean,
    primary: Boolean,
    primaryLight: Boolean,
    primaryDark: Boolean,
    danger: Boolean,
    meteoriteDark: Boolean,
  },
  computed: {
    getTextClass() {
      return [
        this.white && "text-h-white",
        this.dark && "text-h-dark",
        this.gray && "text-h-gray",
        this.primary && "text-h-primary",
        this.primaryLight && "text-h-primary-light",
        this.primaryDark && "text-h-primary-dark",
        this.meteoriteDark && "text-h-meteorite-dark",
        this.danger && "text-h-danger",
      ];
    },
  },
});
</script>
