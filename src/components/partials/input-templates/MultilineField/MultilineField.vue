<template>
  <textarea :disabled="disabled" class="textarea" :placeholder="placeholder" />
</template>
<script lang='ts'>
  import Vue from 'vue'
export default Vue.extend({
  props: {
    placeholder: String,
    label: String,
    help: String,
    error: String,
    disabled: Boolean,
  }
})
</script>
