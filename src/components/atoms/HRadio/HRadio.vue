<template>
  <div>
    <input type="radio" class="d-none" :checked="checked" />
    <HLabel
      class="d-flex flex-row cursor-pointer align-items-center"
      @click.native="$emit('update:checked', !checked)"
    >
      <!-- <IconRadio :checked="checked" /> -->
      {{ label }}
    </HLabel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HLabel from "@/components/atoms/HLabel";

export default Vue.extend({
  name: "HRadio",
  components: { HLabel },
  props: {
    checked: Boolean,
    label: String,
  },
});
</script>
