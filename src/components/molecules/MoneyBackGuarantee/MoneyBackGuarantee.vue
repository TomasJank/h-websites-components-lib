<template>
  <HText tag="p" meteorite-dark :white="dark">
    <HIcon success class="mr-4" />
    30-day money-back guarantee
  </HText>
</template>

<script lang="ts">
import Vue from "vue";
import HIcon from "@/components/atoms/HIcon";
import HText from "@/components/atoms/HText";

export default Vue.extend({
  name: "MoneyBackGuarantee",
  components: { HIcon, HText },
  props: {
    dark: Boolean,
  },
});
</script>
