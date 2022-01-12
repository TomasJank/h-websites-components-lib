<template>
  <HText tag="span" meteorite-dark class="d-flex mb-24">
    <!-- <IconFlag :country-code="countryCode" class="mt-auto mb-auto" /> -->
    <HText tag="p" class="pl-8 country-name">{{ countryName }}</HText>
    <HText tag="p" class="pl-8 language-name">{{ lang }}</HText>
  </HText>
</template>

<script lang="ts">
import Vue from "vue";
import HText from "@/components/atoms/HText";

export default Vue.extend({
  name: "Language",
  components: { HText },
  props: {
    countryCode: {
      type: String,
      default: "com",
    },
    lang: {
      type: String,
      default: "English",
    },
    countryName: {
      type: String,
      default: "United States",
    },
  },
});
</script>
<style lang="scss" scoped>
.country-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: get-color("meteorite-dark");
}

.language-name {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: get-color("gray");
}
</style>
