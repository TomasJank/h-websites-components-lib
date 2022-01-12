<template>
  <input
    :type="password && !show ? 'password' : 'text'"
    :disabled="disabled"
    :placeholder="placeholder"
    @blur="hide"
  />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name:"InputField",
  props: {
    placeholder: String,
    label: String,
    help: String,
    error: String,
    password: Boolean,
    show: Boolean,
    disabled: Boolean,
  },
  methods: {
    hide() {
      this.$emit("update:show", false);
    },
  },
});
</script>
