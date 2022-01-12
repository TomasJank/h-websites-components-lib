<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :aria-labelledby="iconName || icon"
    role="presentation"
    class="h-icon"
    :class="[iconClass, customClass]"
  >
    <title v-if="title" :id="iconName || icon">
      {{ title }}
    </title>
    <g>
      <component :is="currentIcon" />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import { kebabToCamel, toTitleCase, getClasses } from "@/utils/helpers";
import * as Icons from "@/components/icons/plain-icons";
import { MainColors, DarkColors } from "@/types/props/global-props";

export default Vue.extend({
  name: "HIcon",
  props: {
    title: String,
    iconName: String,
    icon: {
      type: String,
      required: true,
    },
    viewBox: {
      type: [Number, String],
      default: "0 0 24 24",
    },
    ...MainColors,
    ...DarkColors,
    customClass: String,
    disabled: Boolean,
  },
  computed: {
    currentIcon() {
      return Icons[kebabToCamel(toTitleCase(this.icon))];
    },
    iconClass() {
      return getClasses("icon", this.$props, "-");
    },
  },
});
</script>

<style lang="scss" scoped>
@use "src/styles/scss/abstracts" as *;
.h-icon {
  width: 24px;
  height: 24px;
}

@each $color, $value in $colors {
  .icon-#{$color} {
    fill: get-color("#{$color}") !important;
  }
}
</style>
