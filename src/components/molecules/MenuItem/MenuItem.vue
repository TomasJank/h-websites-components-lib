<template>
  <HText tag="span" meteorite-dark class="menu-item d-flex mb-24">
    <!-- <IconMenuItem :route="route" class="icon mt-auto mb-auto" /> -->
    <div class="text d-flex flex-column">
      <HText tag="p" class="pl-8 title">{{ title }}</HText>
      <HText tag="p" class="pl-8 description">{{ description }}</HText>
    </div>
  </HText>
</template>

<script lang="ts">
import Vue from "vue";
import HText from "@/components/atoms/HText";

export default Vue.extend({
  name: "MenuItem",
  components: { HText },
  props: {
    route: String,
    title: String,
    description: String,
  },
});
</script>
<style lang="scss" scoped>
.menu-item {
  .icon {
  }
  .text {
    align-items: flex-start;
    /* .title {
      @include mix-font-props(18px, 24px);
    } */
  }
}
</style>
