<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <HIcon
        v-if="status != 'danger'"
        v-bind="{
          success: status === 'success',
          warning: status === 'warning',
        }"
        class="pr-8"
      />
      <HIcon v-else danger class="pr-8" />
      <HText class="feature-text" meteorite-dark>{{ name }}</HText>
    </div>
    <HIcon icon="ic-check" class="cursor-pointer pl-4" success></HIcon>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HIcon from "@/components/atoms/HIcon";
import HText from "@/components/atoms/HText";

export default Vue.extend({
  name: "HFeature",
  components: { HIcon, HText },
  props: { status: String, name: String, tooltip: String },
});
</script>
