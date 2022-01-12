<script>
import Vue from "vue";
import clickOutside from "@/directives";

import { HButton, HIcon, HInput, HText } from "@/components/atoms";

Vue.directive("click-outside", clickOutside);
//Used for components development

export default Vue.extend({
  name: "ServeDev",
  components: {
    HButton,
    HIcon,
    HText,
    HInput,
  },
});
</script>

<template>
  <div id="app">
    <HIcon
      icon="ic-burger"
      class="cursor-pointer"
      success
      viewBox="-2 3 20 20"
    />
    <HText tag="h1">Test HText</HText>
    <HButton primary>Test HButton</HButton>
    <HInput />
  </div>
</template>
