<template>
  <div>
    <input type="radio" class="d-none" :checked="checked" />
    <HLabel
      class="d-flex flex-row cursor-pointer align-items-center"
      @click.native="$emit('update:checked', !checked)"
    >
      <IconRadio :checked="checked" />
      {{ label }}
    </HLabel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    checked: Boolean,
    label: String,
  },
});
</script>
